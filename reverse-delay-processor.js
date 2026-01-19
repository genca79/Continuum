// reverse-delay-processor.js - AudioWorklet processor for reverse delay effect
class ReverseDelayProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super();
        
        const initialDelaySamples = options.processorOptions?.delaySamples || 
            Math.floor(sampleRate * 0.3);
        
        this.delaySamples = Math.max(1, initialDelaySamples);
        this.feedback = 0;
        this.writeBuf = 0;
        this.readBuf = 1;
        this.writeIndex = 0;
        this.readIndex = this.delaySamples - 1;
        this.playing = false;
        this.buffers = [];
        
        this._initBuffers(this.delaySamples);
        
        // Handle messages from main thread
        this.port.onmessage = (event) => {
            const { type, value } = event.data;
            if (type === 'setFeedback') {
                this.feedback = value || 0;
            } else if (type === 'setDelaySamples') {
                this._initBuffers(Math.max(1, Math.floor(value)));
            }
        };
    }
    
    _initBuffers(samples) {
        this.delaySamples = samples;
        this.buffers = [
            [new Float32Array(this.delaySamples), new Float32Array(this.delaySamples)],
            [new Float32Array(this.delaySamples), new Float32Array(this.delaySamples)]
        ];
        this.writeBuf = 0;
        this.readBuf = 1;
        this.writeIndex = 0;
        this.readIndex = this.delaySamples - 1;
        this.playing = false;
    }
    
    process(inputs, outputs, parameters) {
        const input = inputs[0];
        const output = outputs[0];
        
        if (!input || !input.length || !output || !output.length) {
            return true;
        }
        
        const inL = input[0] || new Float32Array(128);
        const inR = input.length > 1 ? input[1] : inL;
        const outL = output[0];
        const outR = output.length > 1 ? output[1] : outL;
        
        const blockSize = outL.length;
        
        for (let i = 0; i < blockSize; i++) {
            let outSampleL = 0;
            let outSampleR = 0;
            
            if (this.playing) {
                outSampleL = this.buffers[this.readBuf][0][this.readIndex];
                outSampleR = this.buffers[this.readBuf][1][this.readIndex];
                this.readIndex -= 1;
                if (this.readIndex < 0) {
                    this.playing = false;
                }
            }
            
            const fb = this.feedback;
            const inputL = inL[i] || 0;
            const inputR = inR[i] || 0;
            
            this.buffers[this.writeBuf][0][this.writeIndex] = inputL + outSampleL * fb;
            this.buffers[this.writeBuf][1][this.writeIndex] = inputR + outSampleR * fb;
            
            outL[i] = outSampleL;
            outR[i] = outSampleR;
            
            this.writeIndex += 1;
            if (this.writeIndex >= this.delaySamples) {
                this.writeIndex = 0;
                this.readIndex = this.delaySamples - 1;
                this.readBuf = this.writeBuf;
                this.writeBuf = this.writeBuf === 0 ? 1 : 0;
                this.playing = true;
            }
        }
        
        return true;
    }
}

registerProcessor('reverse-delay-processor', ReverseDelayProcessor);
