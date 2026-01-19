
const canvas = document.getElementById('surface');
const ctx = canvas.getContext('2d');
const CANVAS_FONT_FAMILY = "'Segoe UI', Roboto, sans-serif";
const els = {
    ui: document.getElementById('ui'),
    performance: document.getElementById('performance'),
    uiAdvancedToggle: document.getElementById('uiAdvancedToggle'),
    midiInSelect: document.getElementById('midiInSelect'),
    midiOutSelect: document.getElementById('midiOutSelect'),
    rootNote: document.getElementById('rootNote'),
    scaleType: document.getElementById('scaleType'),
    microScaleSelect: document.getElementById('microScaleSelect'),
    microtonalizeIn: document.getElementById('microtonalizeIn'),
    visibleOctaves: document.getElementById('visibleOctaves'),
    scaleModeDiatonic: document.getElementById('scaleModeDiatonic'),
    scaleModeMicro: document.getElementById('scaleModeMicro'),
    scaleModeCustom: document.getElementById('scaleModeCustom'),
    scaleDiatonicBox: document.getElementById('scaleDiatonicBox'),
    scaleMicroBox: document.getElementById('scaleMicroBox'),
    scaleCustomBox: document.getElementById('scaleCustomBox'),
    customModeNotes: document.getElementById('customModeNotes'),
    customModeCents: document.getElementById('customModeCents'),
    chordMode: document.getElementById('chordMode'),
    chordInversion: document.getElementById('chordInversion'),
    chordSpread: document.getElementById('chordSpread'),
    pbRange: document.getElementById('pbRange'),
    midiThru: document.getElementById('midiThru'),
    roundRate: document.getElementById('roundRate'),
    deadCenter: document.getElementById('deadCenter'),
    deadCenterForce: document.getElementById('deadCenterForce'),
    linkPressToY: document.getElementById('linkPressToY'),
    linkYToVelocity: document.getElementById('linkYToVelocity'),
    smoothAmt: document.getElementById('smoothAmt'),
    curveType: document.getElementById('curveType'),
    yDeadzone: document.getElementById('yDeadzone'),
    touchSensitivity: document.getElementById('touchSensitivity'),
    quantizeRelease: document.getElementById('quantizeRelease'),
    customScaleName: document.getElementById('customScaleName'),
    customScaleSaved: document.getElementById('customScaleSaved'),
    customScaleSave: document.getElementById('customScaleSave'),
    customScaleDel: document.getElementById('customScaleDel'),
    customScaleNotes: document.getElementById('customScaleNotes'),
    customScaleCents: document.getElementById('customScaleCents'),
    customScaleNames: document.getElementById('customScaleNames'),
    presetSelect: document.getElementById('presetSelect'),
    presetName: document.getElementById('presetName'),
    presetSave: document.getElementById('presetSave'),
    presetDel: document.getElementById('presetDel'),
    presetDesc: document.getElementById('presetDesc'),
    mpePresetSelect: document.getElementById('mpePresetSelect'),
    mpePresetName: document.getElementById('mpePresetName'),
    mpePresetSave: document.getElementById('mpePresetSave'),
    mpePresetDel: document.getElementById('mpePresetDel'),
    mpePresetDesc: document.getElementById('mpePresetDesc'),
    fsBtn: document.getElementById('fsBtn'),
    arpEnabled: document.getElementById('arpEnabled'),
    arpRate: document.getElementById('arpRate'),
    arpRateSelect: document.getElementById('arpRateSelect'),
    arpGate: document.getElementById('arpGate'),
    arpSync: document.getElementById('arpSync'),
    arpBpm: document.getElementById('arpBpm'),
    arpLatch: document.getElementById('arpLatch'),
    octDownBtn: document.getElementById('octDownBtn'),
    octUpBtn: document.getElementById('octUpBtn'),
    octVal: document.getElementById('octVal'),
    holdBtn: document.getElementById('holdBtn'),
    loopWheel: document.getElementById('loopWheel'),
    holdNotes: document.getElementById('holdNotes'),
    panicBtn: document.getElementById('panicBtn'),
    fadeBtn: document.getElementById('fadeBtn'),
    fadeSeconds: document.getElementById('fadeSeconds'),
    chordWheel: document.getElementById('chordWheel'),
    arpWheel: document.getElementById('arpWheel'),
    arpParamsToggle: document.getElementById('arpParamsToggle'),
    arpParamsPanel: document.getElementById('arpParamsPanel'),
    groupShiftBtn: document.getElementById('groupShiftBtn'),
    midiStatus: document.getElementById('midiStatus'),
    audioStart: document.getElementById('audioStart'),
    audioStatus: document.getElementById('audioStatus'),
    sampleSetSelect: document.getElementById('sampleSetSelect'),
    sampleSetName: document.getElementById('sampleSetName'),
    sampleSetNew: document.getElementById('sampleSetNew'),
    sampleSetSave: document.getElementById('sampleSetSave'),
    sampleSetDel: document.getElementById('sampleSetDel'),
    fxPanel: document.getElementById('fxPanel'),
    fxToggle: document.getElementById('fxToggle'),
    fxClose: document.getElementById('fxClose'),
    fxFilterToggle: document.getElementById('fxFilterToggle'),
    fxChorusToggle: document.getElementById('fxChorusToggle'),
    fxDelayToggle: document.getElementById('fxDelayToggle'),
    fxReverbToggle: document.getElementById('fxReverbToggle'),
    wtMode: document.getElementById('wtMode'),
    wtSelect: document.getElementById('wtSelect'),
    wtMix: document.getElementById('wtMix'),
    wtMixBox: document.getElementById('wtMixBox'),
    samplerGain: document.getElementById('samplerGain'),
    samplerMaxVoices: document.getElementById('samplerMaxVoices'),
    sampleLoopBtn: document.getElementById('sampleLoopBtn'),
    sampleGain1: document.getElementById('sampleGain1'),
    sampleGain2: document.getElementById('sampleGain2'),
    sampleGain3: document.getElementById('sampleGain3'),
    sampleGain4: document.getElementById('sampleGain4'),
    sampleGain5: document.getElementById('sampleGain5'),
    fxPresetSelect: document.getElementById('fxPresetSelect'),
    fxPresetApply: document.getElementById('fxPresetApply'),
    fxPresetQuick: document.getElementById('fxPresetQuick'),
    sampleFile1: document.getElementById('sampleFile1'),
    sampleFile2: document.getElementById('sampleFile2'),
    sampleFile3: document.getElementById('sampleFile3'),
    sampleFile4: document.getElementById('sampleFile4'),
    sampleFile5: document.getElementById('sampleFile5'),
    sampleName1: document.getElementById('sampleName1'),
    sampleName2: document.getElementById('sampleName2'),
    sampleName3: document.getElementById('sampleName3'),
    sampleName4: document.getElementById('sampleName4'),
    sampleName5: document.getElementById('sampleName5'),
    sampleRoot1: document.getElementById('sampleRoot1'),
    sampleRoot2: document.getElementById('sampleRoot2'),
    sampleRoot3: document.getElementById('sampleRoot3'),
    sampleRoot4: document.getElementById('sampleRoot4'),
    sampleRoot5: document.getElementById('sampleRoot5'),
    fxAttack: document.getElementById('fxAttack'),
    fxDecay: document.getElementById('fxDecay'),
    fxSustain: document.getElementById('fxSustain'),
    fxRelease: document.getElementById('fxRelease'),
    fxCutoff: document.getElementById('fxCutoff'),
    fxResonance: document.getElementById('fxResonance'),
    fxFilterEnv: document.getElementById('fxFilterEnv'),
    fxChorusRate: document.getElementById('fxChorusRate'),
    fxChorusDepth: document.getElementById('fxChorusDepth'),
    fxDelayTime: document.getElementById('fxDelayTime'),
    fxDelayFeedback: document.getElementById('fxDelayFeedback'),
    fxDelayDry: document.getElementById('fxDelayDry'),
    fxDelayWet: document.getElementById('fxDelayWet'),
    fxDelayReverse: document.getElementById('fxDelayReverse'),
    fxReverbDecay: document.getElementById('fxReverbDecay'),
    fxReverbDry: document.getElementById('fxReverbDry'),
    fxReverbWet: document.getElementById('fxReverbWet'),
    fxMix: document.getElementById('fxMix'),
    sampleClear1: document.getElementById('sampleClear1'),
    sampleClear2: document.getElementById('sampleClear2'),
    sampleClear3: document.getElementById('sampleClear3'),
    sampleClear4: document.getElementById('sampleClear4'),
    sampleClear5: document.getElementById('sampleClear5'),
    sampleGain6: document.getElementById('sampleGain6'),
    sampleFile6: document.getElementById('sampleFile6'),
    sampleName6: document.getElementById('sampleName6'),
    sampleRoot6: document.getElementById('sampleRoot6'),
    sampleClear6: document.getElementById('sampleClear6'),
    sampleGain7: document.getElementById('sampleGain7'),
    sampleFile7: document.getElementById('sampleFile7'),
    sampleName7: document.getElementById('sampleName7'),
    sampleRoot7: document.getElementById('sampleRoot7'),
    sampleClear7: document.getElementById('sampleClear7'),
    factorySelect: document.getElementById('factorySelect'),
    factoryLoadBtn: document.getElementById('factoryLoadBtn'),
    // Audio Recorder elements
    recStartBtn: document.getElementById('recStartBtn'),
    recStopBtn: document.getElementById('recStopBtn'),
    recTimer: document.getElementById('recTimer'),
    recControls: document.getElementById('recControls')
};
const sampleFileEls = [els.sampleFile1, els.sampleFile2, els.sampleFile3, els.sampleFile4, els.sampleFile5, els.sampleFile6, els.sampleFile7];
const sampleNameEls = [els.sampleName1, els.sampleName2, els.sampleName3, els.sampleName4, els.sampleName5, els.sampleName6, els.sampleName7];
const sampleRootEls = [els.sampleRoot1, els.sampleRoot2, els.sampleRoot3, els.sampleRoot4, els.sampleRoot5, els.sampleRoot6, els.sampleRoot7];
const sampleGainEls = [els.sampleGain1, els.sampleGain2, els.sampleGain3, els.sampleGain4, els.sampleGain5, els.sampleGain6, els.sampleGain7];
const sampleClearEls = [els.sampleClear1, els.sampleClear2, els.sampleClear3, els.sampleClear4, els.sampleClear5, els.sampleClear6, els.sampleClear7];

// Bow button removed

// === RANGE SLIDER PROGRESS BAR ===
function updateRangeProgress(input) {
    if (!input) return;
    const min = parseFloat(input.min) || 0;
    const max = parseFloat(input.max) || 100;
    const val = parseFloat(input.value);
    // Ensure we have valid numbers and avoid division by zero
    if (isNaN(val) || max === min) {
        input.style.setProperty('--range-progress', '0%');
        return;
    }
    const percent = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
    input.style.setProperty('--range-progress', percent + '%');
}

function initAllRangeSliders() {
    document.querySelectorAll('input[type="range"]').forEach(input => {
        updateRangeProgress(input);
        input.addEventListener('input', () => updateRangeProgress(input));
    });
}
initAllRangeSliders();

// setToggle element: toggles the original top `#ui` settings panel
const setToggleBtn = document.getElementById('setToggle');
if (setToggleBtn) {
    setToggleBtn.addEventListener('click', () => {
        const uiEl = els.ui;
        if (uiEl) {
            const isOpen = uiEl.classList.toggle('active');
            uiEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        }
    });

    // Close #ui with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && els.ui && els.ui.classList.contains('active')) {
            els.ui.classList.remove('active');
            els.ui.setAttribute('aria-hidden', 'true');
        }
    });
}

// === TAB SYSTEM FOR TOP UI PANEL ===
(function initTabSystem() {
    // Main tabs (MIDI, SCALE, ADVANCED)
    const mainTabs = document.querySelectorAll('#mainTabsRow .ui-tab');
    const mainContents = document.querySelectorAll('#ui > .ui-tab-content');
    
    mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            // Deactivate all
            mainTabs.forEach(t => t.classList.remove('active'));
            mainContents.forEach(c => c.classList.remove('active'));
            // Activate clicked
            tab.classList.add('active');
            const content = document.querySelector(`[data-tab-content="${target}"]`);
            if (content) content.classList.add('active');
        });
    });

    // Sub-tabs inside ADVANCED (CHORD, MPE, PRESET, SAMPLER)
    const advSubTabs = document.querySelectorAll('#advSubTabs .ui-tab');
    const advSubContents = document.querySelectorAll('#tabAdvanced .ui-subtab-content');
    
    advSubTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.subtab;
            // Deactivate all
            advSubTabs.forEach(t => t.classList.remove('active'));
            advSubContents.forEach(c => c.classList.remove('active'));
            // Activate clicked
            tab.classList.add('active');
            const content = document.querySelector(`[data-subtab-content="${target}"]`);
            if (content) content.classList.add('active');
        });
    });
})();

function triggerBow(voiceObj, attackTime = 0.05) {
    if (!voiceObj || !state.audio.ctx) return;
    voiceObj.bowFlash = 1.0;
    const key = `${voiceObj.chan}:${voiceObj.note}`;
    
    // Stop existing voice with quick fade
    const activeVoice = state.audio.voices.get(key);
    const now = state.audio.ctx.currentTime;
    if (activeVoice && activeVoice.source) {
        try {
            activeVoice.gain.gain.cancelScheduledValues(now);
            activeVoice.gain.gain.setValueAtTime(activeVoice.gain.gain.value, now);
            activeVoice.gain.gain.linearRampToValueAtTime(0, now + 0.02); // Faster stop
            if (activeVoice.source) activeVoice.source.stop(now + 0.03);
            if (activeVoice.osc) activeVoice.osc.stop(now + 0.03);
        } catch(e) {}
        state.audio.voices.delete(key);
    }
    
    const m = voiceObj.lastM || { press: 90 };
    const press = m.press || 90;
    // Restart with override
    noteOnInternal(voiceObj.note, press, voiceObj.chan, attackTime);
}
const PRESET_KEY = 'genca_presets_v1';
const MPE_PRESET_KEY = 'genca_mpe_presets_v1';
const CUSTOM_SCALE_KEY = 'genca_custom_scales_v1';
const MICROTONAL_SCALES = {
    'Balinese Slendro': { cents: [0, 240, 480, 720, 960] },
    'Balinese Pelog': { cents: [0, 150, 350, 550, 700, 900, 1050] },
    'Just Major (5-limit)': { cents: [0, 204, 386, 498, 702, 884, 1088] },
    'Just Minor (5-limit)': { cents: [0, 204, 316, 498, 702, 814, 1018] },
    'Maqam Rast': { cents: [0, 204, 350, 498, 702, 904, 1050] },
    '19-TET': { cents: makeEqualTemperament(19) },
    '24-TET': { cents: makeEqualTemperament(24) },
    '31-TET': { cents: makeEqualTemperament(31) }
};
const DEFAULT_CUSTOM_SCALES = {
    'Custom 1': { type: 'cents', cents: [0, 240, 480, 720, 960] }
};
const SAMPLE_SLOT_COUNT = 7;
const DEFAULT_SAMPLE_ROOTS = [36, 48, 60, 72, 84, 96, 108];
const FACTORY_LIBRARY = {
    'Bass': [
        { root: 45, file: 'samples/Bass__a2.wav', loop: false },
        { root: 48, file: 'samples/Bass__c3.wav', loop: false },
        { root: 43, file: 'samples/Bass__g2.wav', loop: false },
        { root: 0, file: null }, { root: 0, file: null }, { root: 0, file: null }, { root: 0, file: null }
    ],
    'Bassoon': [
        { root: 34, file: 'samples/BassoonSustain_As1.wav', loop: false },
        { root: 46, file: 'samples/BassoonSustain_As2.wav', loop: false },
        { root: 55, file: 'samples/BassoonSustain_G3.wav', loop: false },
        { root: 68, file: 'samples/BassoonSustain_Gs4.wav', loop: false },
        { root: 75, file: 'samples/BassoonSustain_Ds5.wav', loop: false },
        { root: 0, file: null }, { root: 0, file: null }
    ],
    'Cello': [
        { root: 36, file: 'samples/CelloVibrato_C2.wav', loop: false },
        { root: 43, file: 'samples/CelloVibrato_G2.wav', loop: false },
        { root: 57, file: 'samples/CelloVibrato_A3.wav', loop: false },
        { root: 60, file: 'samples/CelloVibrato_C4.wav', loop: false },
        { root: 67, file: 'samples/CelloVibrato_G4.wav', loop: false },
        { root: 0, file: null }, { root: 0, file: null }
    ],
    'Trumpet': [
        { root: 57, file: 'samples/TrumpetStaccato_A3.wav', loop: false },
        { root: 62, file: 'samples/TrumpetStaccato_D4.wav', loop: false },
        { root: 67, file: 'samples/TrumpetStaccato_G4.wav', loop: false },
        { root: 77, file: 'samples/TrumpetStaccato_F5.wav', loop: false },
        { root: 84, file: 'samples/TrumpetStaccato_C6.wav', loop: false },
        { root: 0, file: null }, { root: 0, file: null }
    ],
    'Violin': [
        { root: 57, file: 'samples/ViolinVibrato_A3.wav', loop: false },
        { root: 60, file: 'samples/ViolinVibrato_C4.wav', loop: false },
        { root: 64, file: 'samples/ViolinVibrato_E4.wav', loop: false },
        { root: 67, file: 'samples/ViolinVibrato_G4.wav', loop: false },
        { root: 69, file: 'samples/ViolinVibrato_A4.wav', loop: false },
        { root: 76, file: 'samples/ViolinVibrato_E5.wav', loop: false },
        { root: 84, file: 'samples/ViolinVibrato_C6.wav', loop: false }
    ]
};
const SAMPLE_SETS_KEY = 'genca_sample_sets_v1';
const SAMPLE_ACTIVE_SET_KEY = 'genca_sample_active_set_v1';
const SAMPLE_DB_NAME = 'genca_sample_db_v1';
const SAMPLE_DB_STORE = 'samples';
const DEFAULT_SAMPLE_GAINS = [1, 1, 1, 1, 1, 1, 1];
const DEFAULT_SAMPLER_GAIN = 1;
const DEFAULT_FX = {
    attack: 0.01,
    decay: 0.2,
    sustain: 0.7,
    release: 0.3,
    filterOn: true,
    filterCutoff: 12000,
    filterQ: 0.7,
    filterEnv: 0,
    chorusOn: true,
    chorusRate: 0.25,
    chorusDepth: 0.008,
    delayOn: true,
    delayTime: 0.3,
    delayFeedback: 0.35,
    delayDry: 1,
    delayWet: 0.2,
    delayReverseMix: 0,
    reverbOn: true,
    reverbDecay: 2.5,
    reverbDry: 1,
    reverbWet: 0.2,
    fxMix: 0.3
};
const WAVETABLES = {
    Saw: 'saw',
    Square: 'square',
    Triangle: 'triangle',
    PWM: 'pwm',
    Formant: 'formant'
};
const FX_PRESETS = {
    Init: { ...DEFAULT_FX },
    Pad: {
        ...DEFAULT_FX,
        attack: 0.4,
        decay: 0.8,
        sustain: 0.85,
        release: 1.2,
        filterCutoff: 6000,
        filterEnv: 0.6,
        chorusRate: 0.18,
        chorusDepth: 0.012,
        delayTime: 0.45,
        delayFeedback: 0.4,
        delayWet: 0.25,
        reverbDecay: 4.5,
        reverbWet: 0.35,
        fxMix: 0.45
    },
    Pluck: {
        ...DEFAULT_FX,
        attack: 0.005,
        decay: 0.18,
        sustain: 0.3,
        release: 0.08,
        filterCutoff: 8000,
        filterEnv: 0.4,
        chorusRate: 0.12,
        chorusDepth: 0.004,
        delayTime: 0.18,
        delayFeedback: 0.22,
        delayWet: 0.18,
        reverbDecay: 1.3,
        reverbWet: 0.12,
        fxMix: 0.25
    },
    Lead: {
        ...DEFAULT_FX,
        attack: 0.01,
        decay: 0.15,
        sustain: 0.75,
        release: 0.25,
        filterCutoff: 10000,
        filterEnv: 0.2,
        chorusRate: 0.3,
        chorusDepth: 0.007,
        delayTime: 0.26,
        delayFeedback: 0.28,
        delayWet: 0.2,
        reverbDecay: 2,
        reverbWet: 0.18,
        fxMix: 0.3
    },
    Ambient: {
        ...DEFAULT_FX,
        attack: 0.6,
        decay: 1.2,
        sustain: 0.9,
        release: 2.2,
        filterCutoff: 5000,
        filterEnv: 0.8,
        chorusRate: 0.1,
        chorusDepth: 0.015,
        delayTime: 0.8,
        delayFeedback: 0.55,
        delayWet: 0.35,
        reverbDecay: 6.5,
        reverbWet: 0.45,
        fxMix: 0.6
    }
};
const LOCAL_SUPPRESS_MS = 30;
const GHOST_NOTE_MS = 220;
const state = {
    midi: { output: null, input: null, access: null, hardwareOutput: null, outputWrapper: null },
    currentOctave: 0,
    perfHeight: 0,
    canvasRect: canvas.getBoundingClientRect(),
    activeTouches: new Map(),
    physicalNotes: new Map(),
    mpeChannels: Array.from({length: 15}, (_, i) => i + 2),
    localNoteOnTimes: new Map(),
    externalNoteMap: new Map(),
    groupDragStates: new Map(),
    presets: {},
    mpePresets: {},
    customScales: {},
    scaleNotes: { notes: [], root: 0, scale: '' },
    gridCache: null,
    groupShiftEnabled: false,
    fadeState: { active: false, start: 0, durationMs: 0 },
    drawRaf: null,
    scaleUpdateRaf: null,
    fadeTimer: null,
    heldVoices: [],
    arpHoldTouches: [],
    arpColorIndex: 0,
    holdGroupSeq: 1,
    audio: {
        enabled: true,
        activeSet: 'Default',
        loopGlobal: false,
        ctx: null,
        master: null,
        dryGain: null,
        wetGain: null,
        fxBus: null,
        fxSend: null,
        chorusDelay: null,
        chorusLfo: null,
        chorusLfoGain: null,
        delay: null,
        delayFeedback: null,
        delayWetGain: null,
        delayDryGain: null,
        reverseDelay: null,
        reverseWetGain: null,
        reverbInput: null,
        convolver: null,
        reverbWetGain: null,
        reverbDryGain: null,
        wavetables: {},
        wavetable: {
            mode: 'layer',
            type: 'Saw',
            mix: 0.35
        },
        dynamicVelocity: true,
        samplerGain: 1,
        maxSamplerVoices: 24,
        samples: [],
        voices: new Map(),
        channelPb: new Map(),
        channelPress: new Map(),
        bowMode: false,
        fx: { ...DEFAULT_FX },
        fxActiveGroup: 'filter',
        fxEnabled: false
    },
    // Audio Recorder state
    recorder: {
        isRecording: false,
        workletNode: null,
        startTime: 0,
        timerInterval: null
    }
};
const FADE_TAIL_MS = 200;
const FADE_EASE_POW = 2.2;
const ECHO_TAIL_STEPS = 7;
const ECHO_INTERVAL_MS = 140;
const ECHO_NOTE_MS = 90;
const ECHO_DECAY = 0.75;
const FADE_ECHO_ENABLED = true;
const PRESET_DESCRIPTIONS = {
    Init: 'Default baseline settings.',
    Ableton: 'Studio-friendly sync: MIDI clock ARP and cleaner control.',
    Expressive: 'Loose feel with minimal snap and magnetism.',
    Tight: 'High precision snap and strong dead-center.',
    Glide: 'Free pitch glide with no snap or dead-center.'
};
const MPE_PRESET_DESCRIPTIONS = {
    Expressive: 'Loose feel with minimal snap and magnetism.',
    Tight: 'High precision snap and strong dead-center.',
    Glide: 'Free pitch glide with no snap or dead-center.'
};

initSampleSlots();
initFactoryUI();

function initSampleSlots() {
    const activeSet = getActiveSampleSetName();
    state.audio.activeSet = activeSet;
    const roots = loadSampleRootsForSet(activeSet);
    const gains = loadSampleGainsForSet(activeSet);
    state.audio.samplerGain = loadSamplerGainForSet(activeSet);
    state.audio.samples = DEFAULT_SAMPLE_ROOTS.map((fallback, idx) => {
        const root = roots[idx] ?? fallback;
        const gain = gains[idx] ?? DEFAULT_SAMPLE_GAINS[idx] ?? 1;
        return { buffer: null, root, name: '', data: null, gain };
    });
    state.audio.fx = { ...DEFAULT_FX };
}

function initFactoryUI() {
    if (!els.factorySelect || !els.factoryLoadBtn) return;
    Object.keys(FACTORY_LIBRARY).forEach(name => {
        appendOption(els.factorySelect, name, name);
    });
    els.factoryLoadBtn.onclick = async () => {
        const setName = els.factorySelect.value;
        if (!setName || !FACTORY_LIBRARY[setName]) return;
        if (!state.audio.ctx) initAudioContext();
        if (state.audio.ctx.state === 'suspended') await state.audio.ctx.resume();
        els.midiStatus.innerText = "LOADING FACTORY SET...";
        if(els.sampleSetName) els.sampleSetName.value = setName;
        setActiveSampleSetName(setName);
        const presets = FACTORY_LIBRARY[setName];
        stopAllVoicesInternal();
        for (let i = 0; i < SAMPLE_SLOT_COUNT; i++) {
            const slotCfg = presets[i];
            if (sampleFileEls[i]) sampleFileEls[i].value = ""; 
            if (!slotCfg || !slotCfg.file) {
                clearSampleSlot(i);
                continue;
            }
            try {
                const response = await fetch(slotCfg.file);
                if (!response.ok) throw new Error(`File non trovato: ${slotCfg.file}`);
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await state.audio.ctx.decodeAudioData(arrayBuffer.slice(0));
                state.audio.samples[i].buffer = audioBuffer;
                state.audio.samples[i].name = slotCfg.file.split('/').pop();
                state.audio.samples[i].data = arrayBuffer;
                state.audio.samples[i].root = slotCfg.root;
                state.audio.samples[i].loop = slotCfg.loop;
                if (sampleRootEls[i]) sampleRootEls[i].value = midiToNoteName(slotCfg.root);
                updateSampleName(i);
                await saveSampleToDB(i, {
                    name: state.audio.samples[i].name,
                    root: slotCfg.root,
                    data: arrayBuffer
                }, setName);
            } catch (err) {
                console.error("Errore caricamento sample factory:", err);
                if (sampleNameEls[i]) sampleNameEls[i].textContent = `Err: ${slotCfg.file}`;
            }
        }
        saveSampleRootsForSet(setName);
        saveSampleLoopsForSet(setName);
        const currentSets = getSampleSetsState();
        ensureSampleSet(setName, currentSets);
        saveSampleSetsState(currentSets);
        refreshSampleSetSelect(setName);
        els.midiStatus.innerText = "FACTORY LOADED OK";
    };
}

function getSampleSetsState() {
    const raw = localStorage.getItem(SAMPLE_SETS_KEY);
    const parsed = safeParseJson(raw, {});
    const names = Array.isArray(parsed.names) ? parsed.names.filter(n => typeof n === 'string' && n.trim()) : [];
    const rootsBySet = parsed.rootsBySet && typeof parsed.rootsBySet === 'object' ? parsed.rootsBySet : {};
    const fxBySet = parsed.fxBySet && typeof parsed.fxBySet === 'object' ? parsed.fxBySet : {};
    const gainsBySet = parsed.gainsBySet && typeof parsed.gainsBySet === 'object' ? parsed.gainsBySet : {};
    const loopsBySet = parsed.loopsBySet && typeof parsed.loopsBySet === 'object' ? parsed.loopsBySet : {};
    const samplerGainBySet = parsed.samplerGainBySet && typeof parsed.samplerGainBySet === 'object' ? parsed.samplerGainBySet : {};
    return { names, rootsBySet, fxBySet, gainsBySet, loopsBySet, samplerGainBySet };
}

function loadSampleLoopsForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    const loops = sets.loopsBySet[key] || [];
    return loops.slice(0, SAMPLE_SLOT_COUNT).map(value => !!value);
}

function saveSampleSetsState(stateObj) {
    localStorage.setItem(SAMPLE_SETS_KEY, JSON.stringify(stateObj));
}

function ensureSampleSet(name, stateObj) {
    const key = name.trim();
    if (!stateObj.names.includes(key)) stateObj.names.push(key);
    if (!Array.isArray(stateObj.rootsBySet[key])) {
        stateObj.rootsBySet[key] = DEFAULT_SAMPLE_ROOTS.slice();
    }
    if (!stateObj.fxBySet[key] || typeof stateObj.fxBySet[key] !== 'object') {
        stateObj.fxBySet[key] = { ...DEFAULT_FX };
    }
    if (!Array.isArray(stateObj.gainsBySet[key])) {
        stateObj.gainsBySet[key] = DEFAULT_SAMPLE_GAINS.slice();
    }
    if (!Number.isFinite(stateObj.samplerGainBySet[key])) {
        stateObj.samplerGainBySet[key] = DEFAULT_SAMPLER_GAIN;
    }
}

function getActiveSampleSetName() {
    const raw = localStorage.getItem(SAMPLE_ACTIVE_SET_KEY);
    const name = raw && raw.trim() ? raw.trim() : 'Default';
    return name;
}

function setActiveSampleSetName(name) {
    const key = name.trim() || 'Default';
    localStorage.setItem(SAMPLE_ACTIVE_SET_KEY, key);
    state.audio.activeSet = key;
}

function loadSampleRootsForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    saveSampleSetsState(sets);
    const roots = sets.rootsBySet[key] || [];
    return roots.slice(0, SAMPLE_SLOT_COUNT).map(value => {
        const num = parseInt(value, 10);
        if (Number.isFinite(num)) return Math.max(0, Math.min(127, num));
        return null;
    });
}

function saveSampleRootsForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    sets.rootsBySet[key] = state.audio.samples.map(s => s.root);
    saveSampleSetsState(sets);
}

function loadSampleGainsForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    const gains = sets.gainsBySet[key] || [];
    return gains.slice(0, SAMPLE_SLOT_COUNT).map(value => {
        const num = parseFloat(value);
        if (Number.isFinite(num)) return Math.max(0, Math.min(5, num));
        return null;
    });
}

function saveSampleGainsForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    sets.gainsBySet[key] = state.audio.samples.map(s => s.gain ?? 1);
    saveSampleSetsState(sets);
}

function loadSamplerGainForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    const gain = parseFloat(sets.samplerGainBySet[key]);
    return Number.isFinite(gain) ? Math.max(0, Math.min(5, gain)) : DEFAULT_SAMPLER_GAIN;
}

function saveSamplerGainForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    sets.samplerGainBySet[key] = state.audio.samplerGain ?? DEFAULT_SAMPLER_GAIN;
    saveSampleSetsState(sets);
}

function loadFxForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    const saved = sets.fxBySet[key] || {};
    state.audio.fx = { ...DEFAULT_FX, ...saved };
    saveSampleSetsState(sets);
    applyFxToUI();
    readFxFromUI();
    updateFxNodes();
    rebuildReverbImpulse();
    setFxGroup(state.audio.fxActiveGroup || 'filter');
}

function saveFxForSet(setName) {
    const sets = getSampleSetsState();
    const key = setName.trim() || 'Default';
    ensureSampleSet(key, sets);
    sets.fxBySet[key] = { ...state.audio.fx };
    saveSampleSetsState(sets);
}

function openSampleDB() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            
            reject(new Error('IndexedDB not supported'));
            return;
        }
        const request = indexedDB.open(SAMPLE_DB_NAME, 2);
        request.onupgradeneeded = () => {
            const db = request.result;
            if (db.objectStoreNames.contains(SAMPLE_DB_STORE)) {
                db.deleteObjectStore(SAMPLE_DB_STORE);
            }
            db.createObjectStore(SAMPLE_DB_STORE, { keyPath: 'key' });
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => {
            
            reject(request.error);
        };
    });
}

async function saveSampleToDB(slotIndex, entry, setName = state.audio.activeSet) {
    try {
        const db = await openSampleDB();
        const tx = db.transaction(SAMPLE_DB_STORE, 'readwrite');
        const key = `${setName}::${slotIndex}`;
        const dataBlob = entry.data instanceof Blob ? entry.data : new Blob([entry.data], { type: 'audio/wav' });
        const store = tx.objectStore(SAMPLE_DB_STORE);
        store.put({
            key,
            set: setName,
            slot: slotIndex,
            name: entry.name || '',
            root: entry.root,
            data: dataBlob
        });
        // Wait for transaction to complete
        await new Promise((resolve, reject) => {
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
        });
        console.log(`Saved sample to DB: set="${setName}", slot=${slotIndex}, name="${entry.name}"`);
    } catch (err) {
        console.error(`Error saving sample to DB: slot=${slotIndex}`, err);
    }
}

async function deleteSampleFromDB(slotIndex, setName = state.audio.activeSet) {
    try {
        const db = await openSampleDB();
        const tx = db.transaction(SAMPLE_DB_STORE, 'readwrite');
        const key = `${setName}::${slotIndex}`;
        tx.objectStore(SAMPLE_DB_STORE).delete(key);
    } catch (err) {
        
    }
}

async function loadSavedSamples(setName = state.audio.activeSet) {
    console.log(`loadSavedSamples called for set: "${setName}"`);
    try {
        const db = await openSampleDB();
        const tx = db.transaction(SAMPLE_DB_STORE, 'readonly');
        const store = tx.objectStore(SAMPLE_DB_STORE);
        const request = store.getAll();
        const entries = await new Promise(resolve => {
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => resolve([]);
        });
        console.log(`Total entries in DB: ${entries.length}`);
        const filtered = entries.filter(entry => entry && entry.set === setName);
        console.log(`Entries for set "${setName}": ${filtered.length}`, filtered.map(e => e.name));
        if (!filtered.length) {
            console.log(`No saved samples for set "${setName}"`);
            return;
        }
        
        // Initialize audio context if needed
        if (!state.audio.ctx) {
            initAudioContext();
        }
        if (!state.audio.ctx) {
            console.warn("Cannot decode samples: AudioContext not available");
            // Still update UI with sample names from DB
            for (const entry of filtered) {
                if (!entry || typeof entry.slot !== 'number') continue;
                const idx = entry.slot;
                if (!state.audio.samples[idx]) continue;
                state.audio.samples[idx].name = entry.name || '';
                // Convert Blob to ArrayBuffer if needed
                if (entry.data instanceof Blob) {
                    state.audio.samples[idx].data = await entry.data.arrayBuffer();
                } else {
                    state.audio.samples[idx].data = entry.data;
                }
                if (Number.isFinite(entry.root)) {
                    state.audio.samples[idx].root = entry.root;
                    if (sampleRootEls[idx]) sampleRootEls[idx].value = midiToNoteName(entry.root);
                }
                updateSampleName(idx);
            }
            return;
        }
        
        const storedRoots = loadSampleRootsForSet(setName);
        const storedLoops = loadSampleLoopsForSet(setName);
        for (const entry of filtered) {
            if (!entry || typeof entry.slot !== 'number') continue;
            const idx = entry.slot;
            console.log(`Processing slot ${idx}: ${entry.name}, data type: ${entry.data?.constructor?.name}`);
            if (!state.audio.samples[idx]) continue;
            if (storedRoots[idx] != null) {
                const root = Math.max(0, Math.min(127, parseInt(storedRoots[idx], 10)));
                state.audio.samples[idx].root = root;
                if (sampleRootEls[idx]) sampleRootEls[idx].value = midiToNoteName(root);
            } else if (Number.isFinite(entry.root)) {
                const root = Math.max(0, Math.min(127, parseInt(entry.root, 10)));
                state.audio.samples[idx].root = root;
                if (sampleRootEls[idx]) sampleRootEls[idx].value = midiToNoteName(root);
            }
            
            const isLoop = storedLoops[idx] ?? false;
            state.audio.samples[idx].loop = isLoop;
            
            const gains = loadSampleGainsForSet(setName);
            const gain = gains[idx] ?? DEFAULT_SAMPLE_GAINS[idx] ?? 1;
            state.audio.samples[idx].gain = gain;
            if (sampleGainEls[idx]) sampleGainEls[idx].value = gain.toFixed(2);
            if (!entry.data) {
                console.warn(`No data for slot ${idx}`);
                continue;
            }
            try {
                const dataBuffer = await normalizeSampleData(entry.data);
                if (!dataBuffer) {
                    console.warn(`Could not normalize data for slot ${idx}`);
                    continue;
                }
                console.log(`Decoding sample for slot ${idx}, buffer size: ${dataBuffer.byteLength}`);
                const buffer = await state.audio.ctx.decodeAudioData(dataBuffer.slice(0));
                state.audio.samples[idx].buffer = buffer;
                state.audio.samples[idx].name = entry.name || '';
                state.audio.samples[idx].data = dataBuffer;
                console.log(`Slot ${idx} loaded successfully: ${entry.name}`);
                updateSampleName(idx);
                
            } catch (err) {
                console.error(`Error decoding sample for slot ${idx}:`, err);
            }
        }
        saveSampleRootsForSet(setName);
        updateAudioStatus();
        updateAllSampleNames();
        
    } catch (err) {
        console.error("loadSavedSamples error:", err);
    }
}

async function normalizeSampleData(data) {
    if (!data) return null;
    if (data instanceof ArrayBuffer) return data;
    if (data instanceof Blob) return await data.arrayBuffer();
    return null;
}

function initAudioContext() {
    if (state.audio.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    state.audio.ctx = new AudioCtx();
    state.audio.master = state.audio.ctx.createGain();
    state.audio.dryGain = state.audio.ctx.createGain();
    state.audio.wetGain = state.audio.ctx.createGain();
    state.audio.fxBus = state.audio.ctx.createGain();
    state.audio.fxSend = state.audio.ctx.createGain();
    state.audio.chorusDelay = state.audio.ctx.createDelay(0.05);
    state.audio.chorusLfo = state.audio.ctx.createOscillator();
    state.audio.chorusLfoGain = state.audio.ctx.createGain();
    state.audio.delay = state.audio.ctx.createDelay(2.0);
    state.audio.delayFeedback = state.audio.ctx.createGain();
    state.audio.delayWetGain = state.audio.ctx.createGain();
    state.audio.delayDryGain = state.audio.ctx.createGain();
    state.audio.reverseDelay = createReverseDelayNode(state.audio.ctx);
    state.audio.reverseWetGain = state.audio.ctx.createGain();
    state.audio.reverbInput = state.audio.ctx.createGain();
    state.audio.convolver = state.audio.ctx.createConvolver();
    state.audio.reverbWetGain = state.audio.ctx.createGain();
    state.audio.reverbDryGain = state.audio.ctx.createGain();
    state.audio.master.gain.value = 0.8;
    state.audio.chorusDelay.delayTime.value = 0.015;
    state.audio.chorusLfo.type = 'sine';
    state.audio.chorusLfo.connect(state.audio.chorusLfoGain);
    state.audio.chorusLfoGain.connect(state.audio.chorusDelay.delayTime);
    state.audio.delayFeedback.gain.value = state.audio.fx.delayFeedback;
    state.audio.delayWetGain.gain.value = state.audio.fx.delayWet;
    state.audio.delayDryGain.gain.value = state.audio.fx.delayDry;
    state.audio.reverbWetGain.gain.value = state.audio.fx.reverbWet;
    state.audio.reverbDryGain.gain.value = state.audio.fx.reverbDry;
    state.audio.fxSend.gain.value = state.audio.fx.fxMix;
    state.audio.dryGain.connect(state.audio.master);
    state.audio.fxSend.connect(state.audio.fxBus);
    state.audio.fxBus.connect(state.audio.chorusDelay);
    state.audio.chorusDelay.connect(state.audio.delay);
    state.audio.chorusDelay.connect(state.audio.reverseDelay);
    state.audio.delay.connect(state.audio.delayFeedback);
    state.audio.delayFeedback.connect(state.audio.delay);
    state.audio.delay.connect(state.audio.delayWetGain);
    state.audio.delay.connect(state.audio.delayDryGain);
    state.audio.reverseDelay.connect(state.audio.reverseWetGain);
    state.audio.delayWetGain.connect(state.audio.reverbInput);
    state.audio.delayDryGain.connect(state.audio.reverbInput);
    state.audio.reverseWetGain.connect(state.audio.reverbInput);
    state.audio.reverbInput.connect(state.audio.convolver);
    state.audio.convolver.connect(state.audio.reverbWetGain);
    state.audio.reverbWetGain.connect(state.audio.wetGain);
    state.audio.reverbInput.connect(state.audio.reverbDryGain);
    state.audio.reverbDryGain.connect(state.audio.wetGain);
    state.audio.wetGain.connect(state.audio.master);
    state.audio.master.connect(state.audio.ctx.destination);
    rebuildReverbImpulse();
    updateFxNodes();
    state.audio.wavetables = buildWavetables(state.audio.ctx);
    state.audio.chorusLfo.start();
}

function resumeAudioContext() {
    initAudioContext();
    if (!state.audio.ctx) return Promise.resolve();
    if (state.audio.ctx.state === 'running') return Promise.resolve();
    return state.audio.ctx.resume();
}

// === AUDIO RECORDER FUNCTIONS ===

async function initRecorderWorklet() {
    if (!state.audio.ctx) return false;
    if (state.recorder.workletNode) return true;
    
    try {
        await state.audio.ctx.audioWorklet.addModule('recorder-processor.js');
        state.recorder.workletNode = new AudioWorkletNode(state.audio.ctx, 'recorder-processor');
        
        // Connect master output to recorder (passthrough)
        state.audio.master.connect(state.recorder.workletNode);
        state.recorder.workletNode.connect(state.audio.ctx.destination);
        
        // Handle messages from worklet
        state.recorder.workletNode.port.onmessage = (event) => {
            if (event.data.command === 'buffers') {
                exportWavFile(event.data.buffers, event.data.sampleRate);
            }
        };
        
        return true;
    } catch (err) {
        console.error('Failed to init recorder worklet:', err);
        return false;
    }
}

function startRecording() {
    // Initialize audio context if needed (even if enabled flag is true)
    if (!state.audio.ctx || !state.audio.master) {
        initAudioContext();
    }
    
    // Still check after init attempt
    if (!state.audio.ctx || !state.audio.master) {
        alert('Could not initialize audio. Please try again.');
        return;
    }
    
    // Disable REC button during countdown
    if (els.recStartBtn) els.recStartBtn.disabled = true;
    
    // Start countdown
    startRecordingCountdown();
}

function startRecordingCountdown() {
    let count = 3;
    
    // Show countdown in timer
    if (els.recTimer) {
        els.recTimer.textContent = count.toString();
        els.recTimer.classList.add('countdown');
    }
    
    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            if (els.recTimer) els.recTimer.textContent = count.toString();
        } else {
            clearInterval(countdownInterval);
            if (els.recTimer) els.recTimer.classList.remove('countdown');
            // Start actual recording
            startRecordingNow();
        }
    }, 1000);
}

function startRecordingNow() {
    resumeAudioContext().then(async () => {
        const ready = await initRecorderWorklet();
        if (!ready) {
            alert('Could not initialize recorder');
            if (els.recStartBtn) els.recStartBtn.disabled = false;
            if (els.recTimer) els.recTimer.textContent = '00:00';
            return;
        }
        
        state.recorder.isRecording = true;
        state.recorder.startTime = Date.now();
        state.recorder.workletNode.port.postMessage({ command: 'start' });
        
        // Update UI
        if (els.recStartBtn) {
            els.recStartBtn.classList.add('recording');
            els.recStartBtn.disabled = true;
        }
        if (els.recStopBtn) els.recStopBtn.disabled = false;
        if (els.recTimer) els.recTimer.classList.add('active');
        
        // Start timer update
        state.recorder.timerInterval = setInterval(updateRecTimer, 100);
    });
}

function stopRecording() {
    if (!state.recorder.isRecording || !state.recorder.workletNode) return;
    
    state.recorder.isRecording = false;
    state.recorder.workletNode.port.postMessage({ command: 'stop' });
    
    // Update UI
    if (els.recStartBtn) {
        els.recStartBtn.classList.remove('recording');
        els.recStartBtn.disabled = false;
    }
    if (els.recStopBtn) els.recStopBtn.disabled = true;
    if (els.recTimer) {
        els.recTimer.classList.remove('active');
        els.recTimer.textContent = '00:00';
    }
    
    // Stop timer
    if (state.recorder.timerInterval) {
        clearInterval(state.recorder.timerInterval);
        state.recorder.timerInterval = null;
    }
}

function updateRecTimer() {
    if (!state.recorder.isRecording || !els.recTimer) return;
    const elapsed = Math.floor((Date.now() - state.recorder.startTime) / 1000);
    const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const secs = (elapsed % 60).toString().padStart(2, '0');
    els.recTimer.textContent = `${mins}:${secs}`;
}

function exportWavFile(buffers, sampleRate) {
    // Merge chunks into single arrays
    const leftChunks = buffers[0];
    const rightChunks = buffers[1] && buffers[1].length ? buffers[1] : buffers[0];
    
    const totalSamples = leftChunks.reduce((sum, chunk) => sum + chunk.length, 0);
    if (totalSamples === 0) return;
    
    const leftData = new Float32Array(totalSamples);
    const rightData = new Float32Array(totalSamples);
    
    let offset = 0;
    for (let i = 0; i < leftChunks.length; i++) {
        leftData.set(leftChunks[i], offset);
        if (rightChunks[i]) rightData.set(rightChunks[i], offset);
        offset += leftChunks[i].length;
    }
    
    // Create WAV file (16-bit PCM, stereo, 44.1kHz or context rate)
    const wavBuffer = createWavBuffer(leftData, rightData, sampleRate || 44100);
    
    // Download file
    const blob = new Blob([wavBuffer], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = `GENCA_Recording_${timestamp}.wav`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

function createWavBuffer(leftChannel, rightChannel, sampleRate) {
    const numChannels = 2;
    const bitsPerSample = 16;
    const bytesPerSample = bitsPerSample / 8;
    const numSamples = leftChannel.length;
    const dataSize = numSamples * numChannels * bytesPerSample;
    const buffer = new ArrayBuffer(44 + dataSize);
    const view = new DataView(buffer);
    
    // WAV header
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + dataSize, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // fmt chunk size
    view.setUint16(20, 1, true);  // PCM format
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * bytesPerSample, true); // byte rate
    view.setUint16(32, numChannels * bytesPerSample, true); // block align
    view.setUint16(34, bitsPerSample, true);
    writeString(view, 36, 'data');
    view.setUint32(40, dataSize, true);
    
    // Interleave and convert to 16-bit PCM
    let offset = 44;
    for (let i = 0; i < numSamples; i++) {
        // Left channel
        let sampleL = Math.max(-1, Math.min(1, leftChannel[i]));
        view.setInt16(offset, sampleL < 0 ? sampleL * 0x8000 : sampleL * 0x7FFF, true);
        offset += 2;
        // Right channel
        let sampleR = Math.max(-1, Math.min(1, rightChannel[i]));
        view.setInt16(offset, sampleR < 0 ? sampleR * 0x8000 : sampleR * 0x7FFF, true);
        offset += 2;
    }
    
    return buffer;
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

function setupDraggableRecControls() {
    const bar = els.recControls;
    if (!bar) return;
    
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;
    
    // Load saved position from localStorage
    const savedPos = localStorage.getItem('genca_rec_position');
    if (savedPos) {
        try {
            const pos = JSON.parse(savedPos);
            bar.style.left = pos.left + 'px';
            bar.style.top = pos.top + 'px';
            bar.style.transform = 'none';
        } catch (e) {}
    }
    
    function onPointerDown(e) {
        // Only drag if clicking on the bar itself, not on buttons
        if (e.target.closest('.menu-btn') || e.target.closest('.rec-timer')) return;
        
        isDragging = true;
        bar.classList.add('dragging');
        bar.setPointerCapture(e.pointerId);
        
        const rect = bar.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = rect.left;
        initialTop = rect.top;
        
        // Remove transform-based centering, use absolute positioning
        bar.style.transform = 'none';
        bar.style.left = initialLeft + 'px';
        bar.style.top = initialTop + 'px';
        
        e.preventDefault();
        e.stopPropagation();
    }
    
    function onPointerMove(e) {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        let newLeft = initialLeft + dx;
        let newTop = initialTop + dy;
        
        // Clamp to viewport
        const barRect = bar.getBoundingClientRect();
        const maxLeft = window.innerWidth - barRect.width;
        const maxTop = window.innerHeight - barRect.height;
        
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));
        
        bar.style.left = newLeft + 'px';
        bar.style.top = newTop + 'px';
        
        e.preventDefault();
        e.stopPropagation();
    }
    
    function onPointerUp(e) {
        if (!isDragging) return;
        
        isDragging = false;
        bar.classList.remove('dragging');
        bar.releasePointerCapture(e.pointerId);
        
        // Save position to localStorage
        const rect = bar.getBoundingClientRect();
        localStorage.setItem('genca_rec_position', JSON.stringify({
            left: rect.left,
            top: rect.top
        }));
        
        e.preventDefault();
        e.stopPropagation();
    }
    
    bar.addEventListener('pointerdown', onPointerDown);
    bar.addEventListener('pointermove', onPointerMove);
    bar.addEventListener('pointerup', onPointerUp);
    bar.addEventListener('pointercancel', onPointerUp);
}

// === END AUDIO RECORDER FUNCTIONS ===

function updateAudioStatus() {
    if (els.audioStart) {
        const on = state.audio.enabled;
        els.audioStart.className = `menu-btn btn-square audio-toggle ${on ? 'toggle-on' : 'toggle-off'}`;
        els.audioStart.querySelector('.btn-text').textContent = on ? 'ON' : 'OFF';
    }
}

function refreshFxPresetSelects() {
    const names = Object.keys(FX_PRESETS);
    [els.fxPresetSelect, els.fxPresetQuick].forEach(select => {
        if (!select) return;
        clearChildren(select);
        names.forEach(name => appendOption(select, name, name));
        select.value = 'Init';
    });
}

function applyFxPreset(name) {
    const preset = FX_PRESETS[name] || FX_PRESETS.Init;
    state.audio.fx = { ...DEFAULT_FX, ...preset };
    applyFxToUI();
    readFxFromUI();
    updateFxNodes();
    rebuildReverbImpulse();
    updateFxToggleButtons();
    updateFxValueDisplays();
    if (els.fxPresetSelect) els.fxPresetSelect.value = name;
    if (els.fxPresetQuick) els.fxPresetQuick.value = name;
    
}

function updateFxToggleButtons() {
    const fx = state.audio.fx;
    if (els.fxFilterToggle) {
        els.fxFilterToggle.className = `menu-btn fx-toggle ${fx.filterOn ? 'toggle-on' : 'toggle-off'}`;
        els.fxFilterToggle.textContent = fx.filterOn ? 'FILTER ON' : 'FILTER OFF';
    }
    if (els.fxChorusToggle) {
        els.fxChorusToggle.className = `menu-btn fx-toggle ${fx.chorusOn ? 'toggle-on' : 'toggle-off'}`;
        els.fxChorusToggle.textContent = fx.chorusOn ? 'CHORUS ON' : 'CHORUS OFF';
    }
    if (els.fxDelayToggle) {
        els.fxDelayToggle.className = `menu-btn fx-toggle ${fx.delayOn ? 'toggle-on' : 'toggle-off'}`;
        els.fxDelayToggle.textContent = fx.delayOn ? 'DELAY ON' : 'DELAY OFF';
    }
    if (els.fxReverbToggle) {
        els.fxReverbToggle.className = `menu-btn fx-toggle ${fx.reverbOn ? 'toggle-on' : 'toggle-off'}`;
        els.fxReverbToggle.textContent = fx.reverbOn ? 'REVERB ON' : 'REVERB OFF';
    }
    if (els.fxToggle) {
        els.fxToggle.className = `menu-btn btn-square fx-toggle ${state.audio.fxEnabled ? 'toggle-on' : 'toggle-off'}`;
    }
}

function setFxGroup(group) {
    state.audio.fxActiveGroup = group;
    document.querySelectorAll('.fx-panel .fx-group').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-fx-group') === group);
    });
    updateFxToggleButtons();
    updateFxValueDisplays();
}

function setFxEnabled(enabled) {
    state.audio.fxEnabled = enabled;
    updateFxNodes();
    updateFxToggleButtons();
    if (els.fxPanel) {
        if (enabled) els.fxPanel.classList.remove('hidden');
        else els.fxPanel.classList.add('hidden');
    }
}

function formatFxValue(id, value) {
    if (id === 'fxAttack' || id === 'fxDecay' || id === 'fxRelease' || id === 'fxDelayTime') {
        return `${Math.round(value)} ms`;
    }
    if (id === 'fxReverbDecay') {
        return `${parseFloat(value).toFixed(1)} s`;
    }
    if (id === 'fxCutoff') {
        return `${Math.round(value)} Hz`;
    }
    if (id === 'fxChorusRate') {
        return `${parseFloat(value).toFixed(2)} Hz`;
    }
    if (id === 'fxChorusDepth') {
        return `${parseFloat(value).toFixed(1)} ms`;
    }
    if (id === 'fxResonance') {
        return `Q ${parseFloat(value).toFixed(1)}`;
    }
    if (id === 'fxFilterEnv') {
        return `x${parseFloat(value).toFixed(2)}`;
    }
    if (id === 'fxDelayFeedback') {
        return `${Math.round(parseFloat(value) * 100)}%`;
    }
    if (id === 'fxDelayReverse') {
        return `${Math.round(parseFloat(value) * 100)}%`;
    }
    if (id === 'fxDelayDry' || id === 'fxDelayWet' || id === 'fxReverbDry' || id === 'fxReverbWet' || id === 'fxMix' || id === 'fxSustain') {
        return `${Math.round(parseFloat(value) * 100)}%`;
    }
    return value;
}

function updateFxValueDisplays() {
    document.querySelectorAll('[data-fx-value]').forEach(el => {
        const id = el.getAttribute('data-fx-value');
        const input = document.getElementById(id);
        if (!input) return;
        el.textContent = formatFxValue(id, input.value);
    });
}

function updateSampleName(slotIndex) {
    const label = sampleNameEls[slotIndex];
    if (!label) return;
    const sample = state.audio.samples[slotIndex];
    const name = sample && sample.name ? sample.name : 'vuoto';
    label.textContent = `Slot ${slotIndex + 1}: ${name}`;
    // Update visual class on the slot wrapper
    const wrapper = document.getElementById(`slotWrap${slotIndex + 1}`);
    if (wrapper) {
        if (sample && sample.buffer) {
            wrapper.classList.add('has-sample');
        } else {
            wrapper.classList.remove('has-sample');
        }
    }
}

function updateAllSampleNames() {
    for (let i = 0; i < SAMPLE_SLOT_COUNT; i++) {
        updateSampleName(i);
    }
}

function midiToFreq(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
}

function midiToNoteName(midi) {
    const note = Math.max(0, Math.min(127, Math.round(midi)));
    const name = NOTE_NAMES[note % 12];
    const octave = Math.floor(note / 12) - 1;
    return `${name}${octave}`;
}

function parseNoteName(value) {
    if (!value) return null;
    const raw = value.trim().toUpperCase();
    const midi = parseInt(raw, 10);
    if (Number.isFinite(midi)) {
        return Math.max(0, Math.min(127, midi));
    }
    const match = raw.match(/^([A-G])([#B]?)(-?\d+)([#B]?)$/);
    if (!match) return null;
    const letter = match[1];
    const acc1 = match[2] || '';
    const octave = parseInt(match[3], 10);
    const acc2 = match[4] || '';
    const accidental = acc1 || acc2;
    let base = NOTE_NAMES.indexOf(letter);
    if (base < 0) return null;
    if (accidental === '#') base += 1;
    if (accidental === 'B') base -= 1;
    base = (base + 12) % 12;
    const midiNote = (octave + 1) * 12 + base;
    if (midiNote < 0 || midiNote > 127) return null;
    return midiNote;
}

function updateWavetableUI() {
    if (els.wtMode) els.wtMode.value = state.audio.wavetable.mode;
    if (els.wtSelect) els.wtSelect.value = state.audio.wavetable.type;
    if (els.wtMix) {
        els.wtMix.value = state.audio.wavetable.mix.toFixed(2);
        updateRangeProgress(els.wtMix);
    }
    if (els.wtMixBox) {
        els.wtMixBox.style.display = state.audio.wavetable.mode === 'layer' ? '' : 'none';
    }
}

function updateWavetableMix() {
    const mix = state.audio.wavetable.mix;
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => {
        if (v.wtGain) v.wtGain.gain.setTargetAtTime(mix, state.audio.ctx.currentTime, 0.02);
    });
}

function updateSamplerGainNodes() {
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => {
        if (!v.sampleGain || v.sampleGainValue == null) return;
        const next = Math.max(0, Math.min(5, state.audio.samplerGain * v.sampleGainValue));
        v.sampleGain.gain.setTargetAtTime(next, state.audio.ctx.currentTime, 0.02);
    });
}

function getSamplerVoiceKeys() {
    return Array.from(state.audio.voices.entries())
        .filter(([, v]) => v && v.sampleGain)
        .map(([key]) => key);
}

function enforcePolyphonyLimit(isSamplerNeeded) {
    const MAX_TOTAL_VOICES = 64; // Aumentato a 64 per maggiore polifonia su PC moderni
    const maxSampler = Math.max(1, state.audio.maxSamplerVoices || 24);
    
    // 1. Controllo limite Sampler specifico
    if (isSamplerNeeded) {
        let samplerCount = 0;
        let oldestSamplerKey = null;
        let oldestSamplerTime = Infinity;
        
        state.audio.voices.forEach((v, key) => {
            if (v && v.sampleGain) {
                samplerCount++;
                const t = v.startTime || Infinity;
                if (t < oldestSamplerTime) {
                    oldestSamplerTime = t;
                    oldestSamplerKey = key;
                }
            }
        });

        if (samplerCount >= maxSampler && oldestSamplerKey) {
            stopVoiceInternal(oldestSamplerKey);
            return; // Abbiamo fatto spazio
        }
    }

    // 2. Controllo limite Globale (WT + Sampler)
    if (state.audio.voices.size >= MAX_TOTAL_VOICES) {
        let oldestKey = null;
        let oldestTime = Infinity;
        state.audio.voices.forEach((v, key) => {
            const t = v.startTime || Infinity;
            if (t < oldestTime) {
                oldestTime = t;
                oldestKey = key;
            }
        });
        if (oldestKey) stopVoiceInternal(oldestKey);
    }
}

function getWavetableModeFlags() {
    const mode = state.audio.wavetable.mode;
    return {
        sampler: mode === 'sampler' || mode === 'layer',
        wt: mode === 'wt' || mode === 'layer'
    };
}

function readFxFromUI() {
    if (!els.fxAttack) return;
    const fx = state.audio.fx;
    fx.attack = Math.max(0, (parseFloat(els.fxAttack.value) || 0) / 1000);
    fx.decay = Math.max(0, (parseFloat(els.fxDecay.value) || 0) / 1000);
    fx.sustain = Math.max(0, Math.min(1, parseFloat(els.fxSustain.value) || 0));
    fx.release = Math.max(0, (parseFloat(els.fxRelease.value) || 0) / 1000);
    fx.filterCutoff = Math.max(60, Math.min(20000, parseFloat(els.fxCutoff.value) || 12000));
    fx.filterQ = Math.max(0.1, Math.min(20, parseFloat(els.fxResonance.value) || 0.7));
    fx.filterEnv = Math.max(0, Math.min(2, parseFloat(els.fxFilterEnv.value) || 0));
    fx.chorusRate = Math.max(0, Math.min(5, parseFloat(els.fxChorusRate.value) || 0.25));
    fx.chorusDepth = Math.max(0, Math.min(0.02, (parseFloat(els.fxChorusDepth.value) || 0) / 1000));
    fx.delayTime = Math.max(0, Math.min(2, (parseFloat(els.fxDelayTime.value) || 0) / 1000));
    fx.delayFeedback = Math.max(0, Math.min(0.9, parseFloat(els.fxDelayFeedback.value) || 0));
    fx.delayDry = Math.max(0, Math.min(1, parseFloat(els.fxDelayDry.value) || 0));
    fx.delayWet = Math.max(0, Math.min(1, parseFloat(els.fxDelayWet.value) || 0));
    fx.delayReverseMix = Math.max(0, Math.min(1, parseFloat(els.fxDelayReverse.value) || 0));
    fx.reverbDecay = Math.max(0.1, Math.min(10, parseFloat(els.fxReverbDecay.value) || 2.5));
    fx.reverbDry = Math.max(0, Math.min(1, parseFloat(els.fxReverbDry.value) || 0));
    fx.reverbWet = Math.max(0, Math.min(1, parseFloat(els.fxReverbWet.value) || 0.2));
    fx.fxMix = Math.max(0, Math.min(1, parseFloat(els.fxMix.value) || 0.3));
    updateFxToggleButtons();
}

function applyFxToUI() {
    if (!els.fxAttack) return;
    const fx = state.audio.fx;
    els.fxAttack.value = Math.round(fx.attack * 1000);
    els.fxDecay.value = Math.round(fx.decay * 1000);
    els.fxSustain.value = fx.sustain.toFixed(2);
    els.fxRelease.value = Math.round(fx.release * 1000);
    els.fxCutoff.value = Math.round(fx.filterCutoff);
    els.fxResonance.value = fx.filterQ.toFixed(1);
    els.fxFilterEnv.value = fx.filterEnv.toFixed(2);
    els.fxChorusRate.value = fx.chorusRate.toFixed(2);
    els.fxChorusDepth.value = Math.round(fx.chorusDepth * 1000);
    els.fxDelayTime.value = Math.round(fx.delayTime * 1000);
    els.fxDelayFeedback.value = fx.delayFeedback.toFixed(2);
    els.fxDelayDry.value = fx.delayDry.toFixed(2);
    els.fxDelayWet.value = fx.delayWet.toFixed(2);
    els.fxDelayReverse.value = fx.delayReverseMix.toFixed(2);
    els.fxReverbDecay.value = fx.reverbDecay.toFixed(1);
    els.fxReverbDry.value = fx.reverbDry.toFixed(2);
    els.fxReverbWet.value = fx.reverbWet.toFixed(2);
    els.fxMix.value = fx.fxMix.toFixed(2);
    // Update range slider progress bars
    [els.fxAttack, els.fxDecay, els.fxSustain, els.fxRelease, 
     els.fxCutoff, els.fxResonance, els.fxFilterEnv,
     els.fxChorusRate, els.fxChorusDepth,
     els.fxDelayTime, els.fxDelayFeedback, els.fxDelayDry, els.fxDelayWet, els.fxDelayReverse,
     els.fxReverbDecay, els.fxReverbDry, els.fxReverbWet, els.fxMix
    ].forEach(input => { if (input) updateRangeProgress(input); });
    updateFxToggleButtons();
    updateFxValueDisplays();
}

function updateFxNodes() {
    if (!state.audio.ctx) return;
    const fx = state.audio.fx;
    if (state.audio.fxSend) state.audio.fxSend.gain.value = state.audio.fxEnabled ? fx.fxMix : 0;
    if (state.audio.delay) state.audio.delay.delayTime.setValueAtTime(fx.delayTime, state.audio.ctx.currentTime);
    if (state.audio.delayFeedback) state.audio.delayFeedback.gain.value = fx.delayFeedback;
    if (state.audio.reverseDelay) {
        state.audio.reverseDelay._feedback = fx.delayFeedback;
        if (state.audio.reverseDelay._setDelaySamples) {
            state.audio.reverseDelay._setDelaySamples(state.audio.ctx.sampleRate * fx.delayTime);
        }
    }
    const revMix = Math.max(0, Math.min(1, fx.delayReverseMix));
    const wetMix = fx.delayWet;
    const fwdMix = wetMix * (1 - revMix);
    const revWet = wetMix * revMix;
    if (state.audio.delayWetGain) state.audio.delayWetGain.gain.value = (state.audio.fxEnabled && fx.delayOn) ? fwdMix : 0;
    if (state.audio.delayDryGain) state.audio.delayDryGain.gain.value = (state.audio.fxEnabled && fx.delayOn) ? fx.delayDry : 1;
    if (state.audio.reverseWetGain) state.audio.reverseWetGain.gain.value = (state.audio.fxEnabled && fx.delayOn) ? revWet : 0;
    if (state.audio.reverbWetGain) state.audio.reverbWetGain.gain.value = (state.audio.fxEnabled && fx.reverbOn) ? fx.reverbWet : 0;
    if (state.audio.reverbDryGain) state.audio.reverbDryGain.gain.value = (state.audio.fxEnabled && fx.reverbOn) ? fx.reverbDry : 1;
    if (state.audio.chorusLfo) state.audio.chorusLfo.frequency.value = fx.chorusRate;
    if (state.audio.chorusLfoGain) state.audio.chorusLfoGain.gain.value = (state.audio.fxEnabled && fx.chorusOn) ? fx.chorusDepth : 0;
    updateActiveFilters();
}

function updateActiveFilters() {
    const fx = state.audio.fx;
    const filterActive = state.audio.fxEnabled && fx.filterOn;
    const cutoff = filterActive ? Math.max(60, Math.min(20000, fx.filterCutoff)) : 20000;
    const q = filterActive ? Math.max(0.1, Math.min(20, fx.filterQ)) : 0.1;
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => {
        if (!v.filter) return;
        v.filter.frequency.setTargetAtTime(cutoff, state.audio.ctx.currentTime, 0.02);
        v.filter.Q.setTargetAtTime(q, state.audio.ctx.currentTime, 0.02);
    });
}

function rebuildReverbImpulse() {
    if (!state.audio.ctx || !state.audio.convolver) return;
    const decay = Math.max(0.1, state.audio.fx.reverbDecay);
    const sampleRate = state.audio.ctx.sampleRate;
    const length = Math.floor(sampleRate * decay);
    const impulse = state.audio.ctx.createBuffer(2, length, sampleRate);
    for (let c = 0; c < 2; c++) {
        const channelData = impulse.getChannelData(c);
        for (let i = 0; i < length; i++) {
            const t = i / length;
            channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2);
        }
    }
    state.audio.convolver.buffer = impulse;
}

function createReverseDelayNode(ctx) {
    const node = ctx.createScriptProcessor(2048, 2, 2);
    const state = {
        delaySamples: Math.max(1, Math.floor(ctx.sampleRate * 0.3)),
        writeBuf: 0,
        readBuf: 1,
        writeIndex: 0,
        readIndex: 0,
        playing: false,
        buffers: []
    };

    function initBuffers(samples) {
        state.delaySamples = Math.max(1, Math.floor(samples));
        state.buffers = [
            [new Float32Array(state.delaySamples), new Float32Array(state.delaySamples)],
            [new Float32Array(state.delaySamples), new Float32Array(state.delaySamples)]
        ];
        state.writeBuf = 0;
        state.readBuf = 1;
        state.writeIndex = 0;
        state.readIndex = state.delaySamples - 1;
        state.playing = false;
    }

    initBuffers(state.delaySamples);
    node._feedback = 0;
    node._setDelaySamples = samples => initBuffers(samples);

    node.onaudioprocess = e => {
        const input = e.inputBuffer;
        const output = e.outputBuffer;
        const inL = input.getChannelData(0);
        const inR = input.numberOfChannels > 1 ? input.getChannelData(1) : inL;
        const outL = output.getChannelData(0);
        const outR = output.numberOfChannels > 1 ? output.getChannelData(1) : outL;
        for (let i = 0; i < outL.length; i++) {
            let outSampleL = 0;
            let outSampleR = 0;
            if (state.playing) {
                outSampleL = state.buffers[state.readBuf][0][state.readIndex];
                outSampleR = state.buffers[state.readBuf][1][state.readIndex];
                state.readIndex -= 1;
                if (state.readIndex < 0) {
                    state.playing = false;
                }
            }
            const fb = node._feedback || 0;
            state.buffers[state.writeBuf][0][state.writeIndex] = inL[i] + outSampleL * fb;
            state.buffers[state.writeBuf][1][state.writeIndex] = inR[i] + outSampleR * fb;
            outL[i] = outSampleL;
            outR[i] = outSampleR;
            state.writeIndex += 1;
            if (state.writeIndex >= state.delaySamples) {
                state.writeIndex = 0;
                state.readIndex = state.delaySamples - 1;
                state.readBuf = state.writeBuf;
                state.writeBuf = state.writeBuf === 0 ? 1 : 0;
                state.playing = true;
            }
        }
    };
    return node;
}

function buildWavetables(ctx) {
    const wts = {};
    const harmonics = 128; // Increased from 32 for better bass definition
    const makeWave = (real, imag) => ctx.createPeriodicWave(real, imag, { disableNormalization: false });

    const sawReal = new Float32Array(harmonics + 1);
    const sawImag = new Float32Array(harmonics + 1);
    for (let n = 1; n <= harmonics; n++) {
        sawImag[n] = 1 / n;
    }
    wts.Saw = makeWave(sawReal, sawImag);

    const squareReal = new Float32Array(harmonics + 1);
    const squareImag = new Float32Array(harmonics + 1);
    for (let n = 1; n <= harmonics; n += 2) {
        squareImag[n] = 1 / n;
    }
    wts.Square = makeWave(squareReal, squareImag);

    const triReal = new Float32Array(harmonics + 1);
    const triImag = new Float32Array(harmonics + 1);
    for (let n = 1; n <= harmonics; n += 2) {
        const sign = ((n - 1) / 2) % 2 === 0 ? 1 : -1;
        triImag[n] = sign * (1 / (n * n));
    }
    wts.Triangle = makeWave(triReal, triImag);

    const pwmReal = new Float32Array(harmonics + 1);
    const pwmImag = new Float32Array(harmonics + 1);
    const pw = 0.25;
    for (let n = 1; n <= harmonics; n++) {
        pwmImag[n] = (2 / (n * Math.PI)) * Math.sin(n * Math.PI * pw);
    }
    wts.PWM = makeWave(pwmReal, pwmImag);

    const formReal = new Float32Array(harmonics + 1);
    const formImag = new Float32Array(harmonics + 1);
    formImag[1] = 0.6;
    formImag[2] = 0.25;
    formImag[3] = 1.0;
    formImag[4] = 0.15;
    formImag[5] = 0.8;
    formImag[6] = 0.12;
    formImag[7] = 0.6;
    formImag[8] = 0.08;
    wts.Formant = makeWave(formReal, formImag);

    return wts;
}

function ensureOutputWrapper() {
    if (state.midi.outputWrapper) return;
    state.midi.outputWrapper = {
        send: data => {
            if (state.midi.hardwareOutput) state.midi.hardwareOutput.send(data);
            if (state.audio.enabled) handleInternalMidi(data);
        }
    };
}

function updateMidiStatusBase() {
    if (!els.midiStatus) return;
    if (state.audio.enabled) {
        els.midiStatus.innerText = state.midi.hardwareOutput ? 'AUDIO+MIDI READY' : 'AUDIO READY';
        return;
    }
    if (state.midi.hardwareOutput) {
        els.midiStatus.innerText = 'MIDI OUT READY';
    } else if (state.midi.access) {
        els.midiStatus.innerText = 'NESSUN MIDI OUT';
    } else {
        els.midiStatus.innerText = 'MIDI NON DISPONIBILE';
    }
}

function updateActiveOutput() {
    ensureOutputWrapper();
    state.midi.output = state.audio.enabled ? state.midi.outputWrapper : state.midi.hardwareOutput;
    updateMidiStatusBase();
}

function setAudioEnabled(isEnabled) {
    state.audio.enabled = isEnabled;
    if (isEnabled) initAudioContext();
    else stopAllVoicesInternal();
    updateActiveOutput();
    updateAudioStatus();
    
}

function getChannelPbSemis(chan) {
    const pbRange = parseInt(els.pbRange.value, 10) || 12;
    const pbValue = state.audio.channelPb.get(chan) ?? 8192;
    return ((pbValue - 8192) / 8192) * pbRange;
}

function findBestSample(note) {
    let best = null;
    let bestDist = Infinity;
    state.audio.samples.forEach(sample => {
        if (!sample.buffer) return;
        const dist = Math.abs(note - sample.root);
        if (dist < bestDist) {
            best = sample;
            bestDist = dist;
        }
    });
    return best;
}

function stopVoiceInternal(key) {
    const voice = state.audio.voices.get(key);
    if (!voice || !state.audio.ctx) return;
    const now = state.audio.ctx.currentTime;
    try {
        voice.gain.gain.cancelScheduledValues(now);
        voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
        voice.gain.gain.linearRampToValueAtTime(0, now + 0.03);
        if (voice.source) voice.source.stop(now + 0.05);
        if (voice.osc) voice.osc.stop(now + 0.05);
    } catch (err) {
        // Ignore audio stop errors for already-stopped nodes.
    }
    state.audio.voices.delete(key);
}

function releaseVoiceInternal(key) {
    const voice = state.audio.voices.get(key);
    if (!voice || !state.audio.ctx) return;
    const now = state.audio.ctx.currentTime;
    const release = Math.max(0, state.audio.fx.release);
    try {
        voice.gain.gain.cancelScheduledValues(now);
        voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
        voice.gain.gain.linearRampToValueAtTime(0, now + release);
        if (voice.source) voice.source.stop(now + release + 0.05);
        if (voice.osc) voice.osc.stop(now + release + 0.05);
    } catch (err) {
        // Ignore audio stop errors for already-stopped nodes.
    }
    state.audio.voices.delete(key);
}

function stopAllVoicesInternal() {
    Array.from(state.audio.voices.keys()).forEach(stopVoiceInternal);
    state.audio.voices.clear();
}

function noteOnInternal(note, velocity, chan, tempAttackOverride = null) {
    if (!state.audio.enabled) return;
    initAudioContext();
    if (!state.audio.ctx || !state.audio.master) return;
    const modeFlags = getWavetableModeFlags();
    const sample = modeFlags.sampler ? findBestSample(note) : null;
    const wtEnabled = modeFlags.wt && state.audio.wavetables[state.audio.wavetable.type];
    if (!sample && !wtEnabled) return;
    
    // Fix: Enforce Polyphony Limit for both Sampler and WT
    enforcePolyphonyLimit(!!sample);

    const source = sample ? state.audio.ctx.createBufferSource() : null;
    const gain = state.audio.ctx.createGain();
    const filter = state.audio.ctx.createBiquadFilter();
    const sampleGain = sample ? state.audio.ctx.createGain() : null;
    const wtGain = wtEnabled ? state.audio.ctx.createGain() : null;
    const osc = wtEnabled ? state.audio.ctx.createOscillator() : null;
    const initVel = Math.max(0.02, velocity / 127);
    const press = state.audio.channelPress.get(chan) ?? 90;
    const pressNorm = Math.max(0, Math.min(1, press / 127));
    const useDynamicVel = state.audio.dynamicVelocity;
    const velNorm = useDynamicVel ? Math.max(initVel, pressNorm) : initVel;
    const pressGain = useDynamicVel ? 1 : (0.2 + pressNorm * 0.8);
    const pbSemis = getChannelPbSemis(chan);
    if (sample && source) {
        source.buffer = sample.buffer;
        // Global Loop Override: If Global Loop is ON, everything loops. If OFF, nothing loops.
        source.loop = !!state.audio.loopGlobal;
        source.playbackRate.value = Math.pow(2, (note - sample.root + pbSemis) / 12);
    }
    const fx = state.audio.fx;
    const now = state.audio.ctx.currentTime;
    const peak = velNorm * pressGain;
    const sustain = Math.max(0, Math.min(1, fx.sustain));
    
    // Attack calculation with override
    const attackTime = (tempAttackOverride !== null) ? tempAttackOverride : fx.attack;

    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(peak, now + attackTime);
    gain.gain.linearRampToValueAtTime(peak * sustain, now + attackTime + fx.decay);

    filter.type = 'lowpass';
    filter.Q.value = fx.filterQ;
    const filterActive = state.audio.fxEnabled && fx.filterOn;
    const cutoff = filterActive ? Math.max(60, Math.min(20000, fx.filterCutoff)) : 20000;
    const envAmt = filterActive ? Math.max(0, fx.filterEnv) : 0;
    const envTarget = Math.min(20000, cutoff * (1 + envAmt));
    filter.frequency.cancelScheduledValues(now);
    filter.frequency.setValueAtTime(cutoff, now);
    filter.frequency.linearRampToValueAtTime(envTarget, now + attackTime);
    filter.frequency.linearRampToValueAtTime(cutoff, now + attackTime + fx.decay);
    if (sample && sampleGain) {
        const gainValue = Math.max(0, Math.min(5, state.audio.samplerGain * (sample.gain ?? 1)));
        sampleGain.gain.value = gainValue;
        source.connect(sampleGain);
        sampleGain.connect(filter);
    }
    if (osc && wtGain) {
        osc.setPeriodicWave(state.audio.wavetables[state.audio.wavetable.type]);
        osc.frequency.value = midiToFreq(note + pbSemis);
        wtGain.gain.value = state.audio.wavetable.mix;
        osc.connect(wtGain);
        wtGain.connect(filter);
    }
    filter.connect(gain);
    gain.connect(state.audio.dryGain);
    gain.connect(state.audio.fxSend);
    const key = `${chan}:${note}`;
    stopVoiceInternal(key);
    if (sample) {
        let offset = 0;
        if (state.audio.loopVariation > 0 && sample.buffer && sample.buffer.duration) {
            offset = Math.random() * (sample.buffer.duration * state.audio.loopVariation);
        }
        source.start(0, offset);
    }
    if (osc) osc.start();
    const voice = { 
        source: sample ? source : null, 
        gain, 
        filter, 
        sampleGain, 
        sampleGainValue: sample ? (sample.gain ?? 1) : null, 
        wtGain, 
        osc, 
        note, 
        chan, 
        sampleRoot: sample ? sample.root : null, 
        baseGain: initVel, 
        initVelocity: initVel, 
        startTime: state.audio.ctx.currentTime,
        bufferDuration: (sample && sample.buffer) ? sample.buffer.duration : null 
    };
    state.audio.voices.set(key, voice);
    if (source) {
        source.onended = () => {
            try {
                if (osc) osc.stop();
            } catch (err) {
                // Ignore stop errors for already-stopped oscillators.
            }
            // CRITICAL FIX: Only delete if THIS voice is still the active one for this key.
            // Avoids deleting a newer voice (Voice B) when an older overlapping voice (Voice A) ends.
            if (state.audio.voices.get(key) === voice) {
                state.audio.voices.delete(key);
            }
        };
    }
}

function noteOffInternal(note, chan) {
    releaseVoiceInternal(`${chan}:${note}`);
}

function updateChannelPitch(chan) {
    if (!state.audio.ctx) return;
    const pbSemis = getChannelPbSemis(chan);
    state.audio.voices.forEach(v => {
        if (v.chan !== chan) return;
        if (v.source && v.sampleRoot != null) {
            const rate = Math.pow(2, (v.note - v.sampleRoot + pbSemis) / 12);
            v.source.playbackRate.setValueAtTime(rate, state.audio.ctx.currentTime);
        }
        if (v.osc) {
            v.osc.frequency.setTargetAtTime(midiToFreq(v.note + pbSemis), state.audio.ctx.currentTime, 0.01);
        }
    });
}

function updateChannelPress(chan) {
    if (!state.audio.ctx) return;
    const press = state.audio.channelPress.get(chan) ?? 90;
    const pressNorm = Math.max(0, Math.min(1, press / 127));
    const useDynamicVel = state.audio.dynamicVelocity;
    const pressGain = useDynamicVel ? 1 : (0.2 + pressNorm * 0.8);
    state.audio.voices.forEach(v => {
        if (v.chan !== chan) return;
        const sustain = Math.max(0, Math.min(1, state.audio.fx.sustain));
        // FIX: In dynamic mode, volume must follow pressure exactly (allowing silence), 
        // passing through initVelocity would prevent fading to 0.
        const baseVel = useDynamicVel ? pressNorm : (v.baseGain ?? 0.02);
        // FIX: Allow silence (0) instead of clamping to 0.01
        const nextGain = Math.max(0, baseVel * pressGain * sustain);
        v.gain.gain.setTargetAtTime(nextGain, state.audio.ctx.currentTime, 0.02);
    });
}

function handleInternalMidi(data) {
    if (!state.audio.enabled) return;
    const status = data[0] & 0xF0;
    const chan = (data[0] & 0x0F) + 1;
    if (status === 0x90) {
        const note = data[1];
        const vel = data[2];
        if (vel === 0) noteOffInternal(note, chan);
        else noteOnInternal(note, vel, chan);
        return;
    }
    if (status === 0x80) {
        noteOffInternal(data[1], chan);
        return;
    }
    if (status === 0xE0) {
        const pbValue = data[1] | (data[2] << 7);
        state.audio.channelPb.set(chan, pbValue);
        updateChannelPitch(chan);
        return;
    }
    if (status === 0xD0) {
        const press = data[1];
        state.audio.channelPress.set(chan, press);
        updateChannelPress(chan);
        return;
    }
    if (status === 0xB0 && (data[1] === 120 || data[1] === 123)) {
        stopAllVoicesInternal();
    }
}

function refreshSampleSetSelect(activeName) {
    if (!els.sampleSetSelect) return;
    const sets = getSampleSetsState();
    ensureSampleSet('Default', sets);
    saveSampleSetsState(sets);
    clearChildren(els.sampleSetSelect);
    sets.names.forEach(name => appendOption(els.sampleSetSelect, name, name));
    const selected = activeName && sets.names.includes(activeName) ? activeName : sets.names[0];
    els.sampleSetSelect.value = selected;
}

async function loadSampleSet(name) {
    const setName = name.trim() || 'Default';
    if (els.midiStatus) els.midiStatus.innerText = `LOADING SET "${setName}"...`;
    setActiveSampleSetName(setName);
    refreshSampleSetSelect(setName);
    if (els.sampleSetName) els.sampleSetName.value = setName;
    stopAllVoicesInternal();
    const roots = loadSampleRootsForSet(setName);
    loadFxForSet(setName);
    state.audio.samples.forEach((sample, idx) => {
        sample.buffer = null;
        sample.name = '';
        sample.data = null;
        const root = roots[idx] ?? DEFAULT_SAMPLE_ROOTS[idx] ?? 60;
        sample.root = root;
        if (sampleRootEls[idx]) sampleRootEls[idx].value = midiToNoteName(root);
        const gains = loadSampleGainsForSet(setName);
        const gain = gains[idx] ?? DEFAULT_SAMPLE_GAINS[idx] ?? 1;
        sample.gain = gain;
        if (sampleGainEls[idx]) sampleGainEls[idx].value = gain.toFixed(2);
        updateSampleName(idx);
    });
    state.audio.samplerGain = loadSamplerGainForSet(setName);
    if (els.samplerGain) {
        els.samplerGain.value = state.audio.samplerGain.toFixed(2);
        updateRangeProgress(els.samplerGain);
    }
    if (sampleFileEls) sampleFileEls.forEach(input => { if (input) input.value = ''; });
    await loadSavedSamples(setName);
    updateAudioStatus();
    if (els.midiStatus) els.midiStatus.innerText = `SET "${setName}" LOADED`;
}

async function saveSampleSet(name) {
    const setName = name.trim() || 'Default';
    const sets = getSampleSetsState();
    ensureSampleSet(setName, sets);
    saveSampleSetsState(sets);
    setActiveSampleSetName(setName);
    refreshSampleSetSelect(setName);
    saveSampleRootsForSet(setName);
    saveSampleGainsForSet(setName);
    saveSamplerGainForSet(setName);
    saveFxForSet(setName);
    for (let i = 0; i < state.audio.samples.length; i++) {
        const sample = state.audio.samples[i];
        if (sample && sample.data) {
            await saveSampleToDB(i, {
                name: sample.name,
                root: sample.root,
                data: sample.data
            }, setName);
        } else {
            await deleteSampleFromDB(i, setName);
        }
    }
    updateAudioStatus();
    
}

async function deleteSampleSet(name) {
    const setName = name.trim() || 'Default';
    if (setName === 'Default') return;
    const sets = getSampleSetsState();
    sets.names = sets.names.filter(n => n !== setName);
    delete sets.rootsBySet[setName];
    delete sets.fxBySet[setName];
    delete sets.gainsBySet[setName];
    delete sets.samplerGainBySet[setName];
    saveSampleSetsState(sets);
    try {
        const db = await openSampleDB();
        const tx = db.transaction(SAMPLE_DB_STORE, 'readwrite');
        const store = tx.objectStore(SAMPLE_DB_STORE);
        const request = store.getAll();
        const entries = await new Promise(resolve => {
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => resolve([]);
        });
        entries.forEach(entry => {
            if (entry && entry.set === setName) store.delete(entry.key);
        });
    } catch (err) {
        
    }
    const next = sets.names[0] || 'Default';
    await loadSampleSet(next);
    
}

async function loadSampleFromFile(slotIndex, file) {
    initAudioContext();
    if (!state.audio.ctx) return;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = await state.audio.ctx.decodeAudioData(arrayBuffer.slice(0));
    state.audio.samples[slotIndex].buffer = buffer;
    state.audio.samples[slotIndex].name = file.name;
    state.audio.samples[slotIndex].data = arrayBuffer;
    // Use active set name (which may have been typed in sampleSetName field)
    const activeSetName = state.audio.activeSet || 'Default';
    saveSampleToDB(slotIndex, {
        name: file.name,
        root: state.audio.samples[slotIndex].root,
        data: arrayBuffer
    }, activeSetName);
    // Also save roots for this set
    saveSampleRootsForSet(activeSetName);
    updateAudioStatus();
    updateSampleName(slotIndex);
    
}

function clearSampleSlot(slotIndex) {
    state.audio.samples[slotIndex].buffer = null;
    state.audio.samples[slotIndex].name = '';
    state.audio.samples[slotIndex].data = null;
    stopAllVoicesInternal();
    deleteSampleFromDB(slotIndex);
    updateAudioStatus();
    updateSampleName(slotIndex);
    
}
state.arp = {
    enabled: false,
    rate: '1/16',
    gate: 0.6,
    sync: 'internal',
    bpm: 120,
    hold: false,
    latch: false,
    running: false,
    stepIndex: 0,
    notes: [],
    active: [],
    timer: null,
    clockTicks: 0,
    ticksPerStep: 6,
    lastClockTime: 0,
    tickMs: 0
};

const SCALES = {
    chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], major: [0, 2, 4, 5, 7, 9, 11],
    dorian: [0, 2, 3, 5, 7, 9, 10], phrygian: [0, 1, 3, 5, 7, 8, 10], lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10], minor: [0, 2, 3, 5, 7, 8, 10], locrian: [0, 1, 3, 5, 6, 8, 10],
    harmonicMinor: [0, 2, 3, 5, 7, 8, 11], melodicMinor: [0, 2, 3, 5, 7, 9, 11],
    pentatonicMaj: [0, 2, 4, 7, 9], pentatonicMin: [0, 3, 5, 7, 10], blues: [0, 3, 5, 6, 7, 10],
    hirajoshi: [0, 2, 3, 7, 8], bhairav: [0, 1, 4, 5, 7, 8, 11], arabic: [0, 1, 4, 5, 7, 8, 11],
    wholeTone: [0, 2, 4, 6, 8, 10], diminished: [0, 2, 3, 5, 6, 8, 9, 11]
};
const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const CHORDS = {
    off: [0],
    power: [0, 7],
    triad: [0, 4, 7],
    minTriad: [0, 3, 7],
    dimTriad: [0, 3, 6],
    augTriad: [0, 4, 8],
    sus2: [0, 2, 7],
    sus4: [0, 5, 7],
    add9: [0, 4, 7, 14],
    sixth: [0, 4, 7, 9],
    seventh: [0, 4, 7, 10],
    maj7: [0, 4, 7, 11],
    min7: [0, 3, 7, 10],
    halfDim7: [0, 3, 6, 10],
    dim7: [0, 3, 6, 9],
    dom9: [0, 4, 7, 10, 14],
    maj9: [0, 4, 7, 11, 14],
    min9: [0, 3, 7, 10, 14],
    eleventh: [0, 4, 7, 10, 14, 17],
    thirteenth: [0, 4, 7, 10, 14, 17, 21]
};

function setPitchBendRange(semitones) {
    if (!state.midi.output) return;
    for (let ch = 0; ch < 16; ch++) {
        state.midi.output.send([0xB0 + ch, 101, 0]);
        state.midi.output.send([0xB0 + ch, 100, 0]);
        state.midi.output.send([0xB0 + ch, 6, semitones]);
        state.midi.output.send([0xB0 + ch, 38, 0]);
        state.midi.output.send([0xB0 + ch, 101, 127]);
        state.midi.output.send([0xB0 + ch, 100, 127]);
    }
}

function releaseHeldNotes() {
    if (!state.midi.output) return;
    state.heldVoices.forEach(v => {
        sendMidi([0x80 + v.chan - 1, v.note, 0]);
        state.mpeChannels.push(v.chan);
    });
    state.heldVoices = [];
    state.mpeChannels.sort((a,b)=>a-b);
}

function allNotesOff() {
    if (!state.midi.output) return;
    for (let ch = 0; ch < 16; ch++) {
        state.midi.output.send([0xB0 + ch, 123, 0]);
        state.midi.output.send([0xB0 + ch, 120, 0]);
    }
    state.activeTouches.clear();
    state.physicalNotes.clear();
    state.mpeChannels.splice(0, state.mpeChannels.length, ...Array.from({length: 15}, (_, i) => i + 2));
    state.heldVoices = [];
    state.arpHoldTouches = [];
    state.arp.notes = [];
    stopAllArpNotes();
}

function applyChordVoicing(notes, inversion, spread) {
    const result = notes.slice(0);
    const inv = Math.min(inversion, Math.max(0, result.length - 1));
    for (let i = 0; i < inv; i++) {
        const n = result.shift();
        result.push(n + 12);
    }
    for (let i = 0; i < result.length; i++) {
        result[i] += i * spread;
    }
    return result;
}

function nextArpColor() {
    const hue = (state.arpColorIndex * 137.5) % 360;
    state.arpColorIndex = (state.arpColorIndex + 1) % 10000;
    return `hsl(${hue.toFixed(1)}, 85%, 55%)`;
}

function getPresetState() {
    return {
        rootNote: els.rootNote.value,
        scaleType: els.scaleType.value,
        scaleMode: els.scaleModeDiatonic.checked ? 'diatonic' : (els.scaleModeMicro.checked ? 'microtonal' : 'custom'),
        microScaleName: els.microScaleSelect.value,
        customScaleName: els.customScaleName.value,
        customScaleMode: els.customModeNotes.checked ? 'notes' : 'cents',
        customScaleNotes: els.customScaleNotes.value,
        customScaleCents: els.customScaleCents.value,
        microtonalizeIn: els.microtonalizeIn.checked,
        visibleOctaves: els.visibleOctaves.value,
        chordMode: els.chordMode.value,
        chordInversion: els.chordInversion.value,
        chordSpread: els.chordSpread.value,
        roundRate: els.roundRate.value,
        deadCenter: els.deadCenter.checked,
        deadCenterForce: els.deadCenterForce.value,
        midiOutId: els.midiOutSelect.value || "",
        midiInId: els.midiInSelect.value || "",
        linkPressToY: els.linkPressToY.checked,
        linkYToVelocity: els.linkYToVelocity.checked,
        smoothAmt: els.smoothAmt.value,
        curveType: els.curveType.value,
        yDeadzone: els.yDeadzone.value,
        touchSensitivity: els.touchSensitivity ? els.touchSensitivity.value : 75,
        quantizeRelease: els.quantizeRelease.checked,
        holdNotes: els.holdNotes.checked,
        pbRange: els.pbRange.value,
        midiThru: els.midiThru.checked,
        arpEnabled: els.arpEnabled.checked,
        arpRate: els.arpRate.value,
        arpGate: els.arpGate.value,
        arpSync: els.arpSync.value,
        arpBpm: els.arpBpm.value,
        arpLatch: els.arpLatch.checked,
        currentOctave: state.currentOctave,
        // Internal Synth settings
        audioEnabled: state.audio.enabled,
        wtMode: state.audio.wavetable.mode,
        wtType: state.audio.wavetable.type,
        wtMix: state.audio.wavetable.mix,
        // Sampler settings
        samplerGain: state.audio.samplerGain,
        samplerMaxVoices: state.audio.maxSamplerVoices,
        sampleLoop: state.audio.loopGlobal,
        // Fade settings
        fadeSeconds: els.fadeSeconds ? els.fadeSeconds.value : '3',
        // FX settings
        fx: { ...state.audio.fx },
        fxEnabled: state.audio.fxEnabled
    };
}

function applyPresetState(presetState) {
    if (!presetState) return;
    els.rootNote.value = presetState.rootNote;
    els.scaleType.value = presetState.scaleType;
    if (presetState.scaleMode === 'microtonal') {
        els.scaleModeMicro.checked = true;
    } else if (presetState.scaleMode === 'custom') {
        els.scaleModeCustom.checked = true;
    } else {
        els.scaleModeDiatonic.checked = true;
    }
    if (presetState.microScaleName && MICROTONAL_SCALES[presetState.microScaleName]) {
        els.microScaleSelect.value = presetState.microScaleName;
    }
    els.microtonalizeIn.checked = !!presetState.microtonalizeIn;
    if (presetState.customScaleName) {
        els.customScaleName.value = presetState.customScaleName;
        if (state.customScales[presetState.customScaleName]) {
            if (state.customScales[presetState.customScaleName].type === 'notes') {
                els.customModeNotes.checked = true;
                els.customScaleNotes.value = formatNotesList(state.customScales[presetState.customScaleName].degrees || []);
            } else {
                els.customModeCents.checked = true;
                els.customScaleCents.value = formatCentsList(state.customScales[presetState.customScaleName].cents || []);
            }
        }
    }
    if (presetState.customScaleMode === 'notes') {
        els.customModeNotes.checked = true;
        if (presetState.customScaleNotes) els.customScaleNotes.value = presetState.customScaleNotes;
    } else if (presetState.customScaleMode === 'cents') {
        els.customModeCents.checked = true;
        if (presetState.customScaleCents) els.customScaleCents.value = presetState.customScaleCents;
    }
    els.visibleOctaves.value = presetState.visibleOctaves;
    els.chordMode.value = presetState.chordMode;
    els.chordMode.dispatchEvent(new Event('change'));
    els.chordInversion.value = presetState.chordInversion;
    els.chordSpread.value = presetState.chordSpread;
    els.roundRate.value = presetState.roundRate;
    els.deadCenter.checked = presetState.deadCenter;
    els.deadCenterForce.value = presetState.deadCenterForce;
    if (state.midi.access) {
        if (presetState.midiOutId && state.midi.access.outputs.has(presetState.midiOutId)) {
            els.midiOutSelect.value = presetState.midiOutId;
            state.midi.hardwareOutput = state.midi.access.outputs.get(presetState.midiOutId);
            updateActiveOutput();
        }
        if (presetState.midiInId && state.midi.access.inputs.has(presetState.midiInId)) {
            els.midiInSelect.value = presetState.midiInId;
            if (state.midi.input) state.midi.input.onmidimessage = null;
            state.midi.input = state.midi.access.inputs.get(presetState.midiInId);
            if (state.midi.input) state.midi.input.onmidimessage = handleExternalMIDI;
        }
    }
    els.linkPressToY.checked = presetState.linkPressToY;
    els.linkYToVelocity.checked = presetState.linkYToVelocity ?? els.linkYToVelocity.checked;
    els.smoothAmt.value = presetState.smoothAmt ?? els.smoothAmt.value;
    els.curveType.value = presetState.curveType ?? els.curveType.value;
    els.yDeadzone.value = presetState.yDeadzone ?? els.yDeadzone.value;
    if (els.touchSensitivity) els.touchSensitivity.value = presetState.touchSensitivity ?? 75;
    els.quantizeRelease.checked = presetState.quantizeRelease ?? els.quantizeRelease.checked;
    els.holdNotes.checked = presetState.holdNotes;
    updateHoldButtonUI();
    els.pbRange.value = presetState.pbRange;
    els.midiThru.checked = presetState.midiThru;
    els.arpEnabled.checked = !!presetState.arpEnabled;
    els.arpRate.value = presetState.arpRate ?? els.arpRate.value;
    els.arpGate.value = presetState.arpGate ?? els.arpGate.value;
    els.arpSync.value = presetState.arpSync ?? els.arpSync.value;
    els.arpBpm.value = presetState.arpBpm ?? els.arpBpm.value;
    els.arpLatch.checked = !!presetState.arpLatch;
    state.currentOctave = presetState.currentOctave || 0;
    els.octVal.innerText = (state.currentOctave > 0 ? "+" : "") + state.currentOctave;
    setPitchBendRange(parseInt(presetState.pbRange, 10));
    if (!presetState.holdNotes) releaseHeldNotes();
    updateScaleNotes();
    syncArpFromUI();
    updateScaleModeUI();
    // Internal Synth settings
    if (presetState.audioEnabled !== undefined) {
        setAudioEnabled(presetState.audioEnabled);
    }
    if (presetState.wtMode !== undefined) {
        state.audio.wavetable.mode = presetState.wtMode;
        if (els.wtMode) els.wtMode.value = presetState.wtMode;
        if (els.wtMixBox) els.wtMixBox.style.display = presetState.wtMode === 'layer' ? '' : 'none';
    }
    if (presetState.wtType !== undefined) {
        state.audio.wavetable.type = presetState.wtType;
        if (els.wtSelect) els.wtSelect.value = presetState.wtType;
    }
    if (presetState.wtMix !== undefined) {
        state.audio.wavetable.mix = presetState.wtMix;
        if (els.wtMix) {
            els.wtMix.value = presetState.wtMix.toFixed(2);
            updateRangeProgress(els.wtMix);
        }
    }
    // Sampler settings
    if (presetState.samplerGain !== undefined) {
        state.audio.samplerGain = presetState.samplerGain;
        if (els.samplerGain) {
            els.samplerGain.value = presetState.samplerGain.toFixed(2);
            updateRangeProgress(els.samplerGain);
        }
    }
    if (presetState.samplerMaxVoices !== undefined) {
        state.audio.maxSamplerVoices = presetState.samplerMaxVoices;
        if (els.samplerMaxVoices) els.samplerMaxVoices.value = presetState.samplerMaxVoices;
    }
    if (presetState.sampleLoop !== undefined) {
        state.audio.loopGlobal = presetState.sampleLoop;
        if (els.sampleLoopBtn) els.sampleLoopBtn.classList.toggle('active', presetState.sampleLoop);
    }
    // Fade settings
    if (presetState.fadeSeconds !== undefined && els.fadeSeconds) {
        els.fadeSeconds.value = presetState.fadeSeconds;
    }
    // FX settings
    if (presetState.fx) {
        state.audio.fx = { ...DEFAULT_FX, ...presetState.fx };
        if (els.fxAttack) { els.fxAttack.value = state.audio.fx.attack; updateRangeProgress(els.fxAttack); }
        if (els.fxDecay) { els.fxDecay.value = state.audio.fx.decay; updateRangeProgress(els.fxDecay); }
        if (els.fxSustain) { els.fxSustain.value = state.audio.fx.sustain; updateRangeProgress(els.fxSustain); }
        if (els.fxRelease) { els.fxRelease.value = state.audio.fx.release; updateRangeProgress(els.fxRelease); }
        if (els.fxCutoff) { els.fxCutoff.value = state.audio.fx.filterCutoff; updateRangeProgress(els.fxCutoff); }
        if (els.fxResonance) { els.fxResonance.value = state.audio.fx.filterQ; updateRangeProgress(els.fxResonance); }
        if (els.fxFilterEnv) { els.fxFilterEnv.value = state.audio.fx.filterEnv; updateRangeProgress(els.fxFilterEnv); }
        if (els.fxFilterToggle) els.fxFilterToggle.classList.toggle('active', !!state.audio.fx.filterOn);
        if (els.fxChorusRate) { els.fxChorusRate.value = state.audio.fx.chorusRate; updateRangeProgress(els.fxChorusRate); }
        if (els.fxChorusDepth) { els.fxChorusDepth.value = state.audio.fx.chorusDepth; updateRangeProgress(els.fxChorusDepth); }
        if (els.fxChorusToggle) els.fxChorusToggle.classList.toggle('active', !!state.audio.fx.chorusOn);
        if (els.fxDelayTime) { els.fxDelayTime.value = state.audio.fx.delayTime; updateRangeProgress(els.fxDelayTime); }
        if (els.fxDelayFeedback) { els.fxDelayFeedback.value = state.audio.fx.delayFeedback; updateRangeProgress(els.fxDelayFeedback); }
        if (els.fxDelayDry) { els.fxDelayDry.value = state.audio.fx.delayDry; updateRangeProgress(els.fxDelayDry); }
        if (els.fxDelayWet) { els.fxDelayWet.value = state.audio.fx.delayWet; updateRangeProgress(els.fxDelayWet); }
        if (els.fxDelayReverse) { els.fxDelayReverse.value = state.audio.fx.delayReverseMix; updateRangeProgress(els.fxDelayReverse); }
        if (els.fxDelayToggle) els.fxDelayToggle.classList.toggle('active', !!state.audio.fx.delayOn);
        if (els.fxReverbDecay) { els.fxReverbDecay.value = state.audio.fx.reverbDecay; updateRangeProgress(els.fxReverbDecay); }
        if (els.fxReverbDry) { els.fxReverbDry.value = state.audio.fx.reverbDry; updateRangeProgress(els.fxReverbDry); }
        if (els.fxReverbWet) { els.fxReverbWet.value = state.audio.fx.reverbWet; updateRangeProgress(els.fxReverbWet); }
        if (els.fxReverbToggle) els.fxReverbToggle.classList.toggle('active', !!state.audio.fx.reverbOn);
        if (els.fxMix) { els.fxMix.value = state.audio.fx.fxMix; updateRangeProgress(els.fxMix); }
        // Apply FX to audio nodes if initialized
        if (state.audio.ctx) updateFxNodes();
    }
    if (presetState.fxEnabled !== undefined) {
        state.audio.fxEnabled = presetState.fxEnabled;
    }
    // Update range slider progress bars
    [els.chordSpread, els.roundRate, els.deadCenterForce, els.smoothAmt, els.yDeadzone, els.touchSensitivity, els.arpGate].forEach(input => {
        if (input) updateRangeProgress(input);
    });
}

function loadPresets() {
    const raw = localStorage.getItem(PRESET_KEY);
    return safeParseJson(raw, {});
}

function savePresets(presets) {
    localStorage.setItem(PRESET_KEY, JSON.stringify(presets));
}

function loadCustomScales() {
    const raw = localStorage.getItem(CUSTOM_SCALE_KEY);
    return safeParseJson(raw, {});
}

function saveCustomScales(scales) {
    localStorage.setItem(CUSTOM_SCALE_KEY, JSON.stringify(scales));
}

function parseCentsList(input) {
    if (!input) return [];
    const parts = input.split(/[\s,]+/).filter(Boolean);
    const cents = parts
        .map(p => Number(p))
        .filter(n => Number.isFinite(n))
        .map(n => Math.max(0, Math.min(1200, n)))
        .filter(n => n < 1200);
    const unique = Array.from(new Set(cents)).sort((a, b) => a - b);
    if (!unique.length || unique[0] !== 0) unique.unshift(0);
    return unique;
}

function formatCentsList(cents) {
    return cents.map(c => String(Math.round(c))).join(', ');
}

function makeEqualTemperament(steps) {
    const cents = [];
    for (let i = 0; i < steps; i++) {
        cents.push(Math.round((i * 1200) / steps));
    }
    return cents;
}

function parseNotesList(input) {
    if (!input) return [];
    const raw = input.split(/[\s,]+/).filter(Boolean);
    const map = {
        'C': 0, 'C#': 1, 'DB': 1,
        'D': 2, 'D#': 3, 'EB': 3,
        'E': 4, 'FB': 4, 'E#': 5,
        'F': 5, 'F#': 6, 'GB': 6,
        'G': 7, 'G#': 8, 'AB': 8,
        'A': 9, 'A#': 10, 'BB': 10,
        'B': 11, 'CB': 11, 'B#': 0
    };
    const degrees = [];
    raw.forEach(token => {
        const t = token.toUpperCase().replace(/\s+/g, '');
        if (map.hasOwnProperty(t)) {
            if (!degrees.includes(map[t])) degrees.push(map[t]);
        }
    });
    if (!degrees.length || degrees[0] !== 0) degrees.unshift(0);
    return degrees;
}

function formatNotesList(degrees) {
    return degrees.map(d => NOTE_NAMES[(d + 12) % 12]).join(', ');
}

function getMpePresetState() {
    return {
        pbRange: els.pbRange.value,
        roundRate: els.roundRate.value,
        deadCenter: els.deadCenter.checked,
        deadCenterForce: els.deadCenterForce.value,
        linkPressToY: els.linkPressToY.checked,
        linkYToVelocity: els.linkYToVelocity.checked,
        smoothAmt: els.smoothAmt.value,
        curveType: els.curveType.value,
        yDeadzone: els.yDeadzone.value,
        touchSensitivity: els.touchSensitivity ? els.touchSensitivity.value : 75,
        quantizeRelease: els.quantizeRelease.checked
    };
}

function applyMpePresetState(mpePresetState) {
    if (!mpePresetState) return;
    els.pbRange.value = mpePresetState.pbRange ?? els.pbRange.value;
    els.roundRate.value = mpePresetState.roundRate ?? els.roundRate.value;
    els.deadCenter.checked = !!mpePresetState.deadCenter;
    els.deadCenterForce.value = mpePresetState.deadCenterForce ?? els.deadCenterForce.value;
    els.linkPressToY.checked = mpePresetState.linkPressToY ?? els.linkPressToY.checked;
    els.linkYToVelocity.checked = mpePresetState.linkYToVelocity ?? els.linkYToVelocity.checked;
    els.smoothAmt.value = mpePresetState.smoothAmt ?? els.smoothAmt.value;
    els.curveType.value = mpePresetState.curveType ?? els.curveType.value;
    els.yDeadzone.value = mpePresetState.yDeadzone ?? els.yDeadzone.value;
    if (els.touchSensitivity) els.touchSensitivity.value = mpePresetState.touchSensitivity ?? 75;
    els.quantizeRelease.checked = mpePresetState.quantizeRelease ?? els.quantizeRelease.checked;
    setPitchBendRange(parseInt(els.pbRange.value, 10));
    // Update range slider progress bars
    [els.roundRate, els.deadCenterForce, els.smoothAmt, els.yDeadzone, els.touchSensitivity].forEach(input => {
        if (input) updateRangeProgress(input);
    });
}

function loadMpePresets() {
    const raw = localStorage.getItem(MPE_PRESET_KEY);
    return safeParseJson(raw, {});
}

function saveMpePresets(presets) {
    localStorage.setItem(MPE_PRESET_KEY, JSON.stringify(presets));
}

function safeParseJson(raw, fallback) {
    if (!raw) return fallback;
    try {
        const data = JSON.parse(raw);
        return data && typeof data === 'object' ? data : fallback;
    } catch {
        return fallback;
    }
}

function clearChildren(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
}

function appendOption(select, value, label) {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = label;
    select.appendChild(opt);
    return opt;
}

function fillSelectFromNames(select, names, emptyLabel) {
    clearChildren(select);
    if (emptyLabel != null) appendOption(select, '', emptyLabel);
    names.forEach(name => appendOption(select, name, name));
}

function fillDatalistFromNames(datalist, names) {
    clearChildren(datalist);
    names.forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        datalist.appendChild(opt);
    });
}

function refreshPresetSelect(presets, selected) {
    applyPresetState(state.presets.Init);
    const names = Object.keys(presets).sort();
    fillSelectFromNames(els.presetSelect, names);
    if (selected && names.includes(selected)) els.presetSelect.value = selected;
    updatePresetDescription(els.presetSelect.value);
}

function updatePresetDescription(name) {
    els.presetDesc.innerText = PRESET_DESCRIPTIONS[name] || 'Custom preset.';
}

function refreshMpePresetSelect(presets, selected) {
    const names = Object.keys(presets).sort();
    fillSelectFromNames(els.mpePresetSelect, names);
    if (selected && names.includes(selected)) els.mpePresetSelect.value = selected;
    updateMpePresetDescription(els.mpePresetSelect.value);
}

function updateMpePresetDescription(name) {
    els.mpePresetDesc.innerText = MPE_PRESET_DESCRIPTIONS[name] || 'Custom MPE preset.';
}

function updateArpControlsUI() {
    const isOn = !!els.arpEnabled.checked;
    els.arpWheel.classList.toggle('knob-on', isOn);
    els.arpWheel.classList.toggle('knob-off', !isOn);
    const rateValue = els.arpRate ? els.arpRate.value : '1/16';
    els.arpWheel.innerText = isOn ? rateValue : 'Off';
    // Sync the visible rate select with the hidden one
    if (els.arpRateSelect && els.arpRate) {
        els.arpRateSelect.value = els.arpRate.value;
    }
}

function updateHoldButtonUI() {
    const isOn = !!els.holdNotes.checked;
    els.holdBtn.classList.toggle('active', isOn);
    els.holdBtn.classList.toggle('toggle-on', isOn);
    els.holdBtn.classList.toggle('toggle-off', !isOn);
}

function updateLoopKnobUI() {
    const isOn = !!state.audio.loopGlobal;
    const variation = state.audio.loopVariation || 0;
    const wheel = els.loopWheel;
    if (wheel) {
        wheel.classList.toggle('loop-active', isOn);
        wheel.classList.toggle('knob-on', variation > 0);
        wheel.innerText = isOn ? (variation > 0 ? `Var ${Math.round(variation * 100)}%` : 'LOOP') : 'OFF';
        wheel.style.borderColor = isOn ? 'var(--green)' : 'var(--red)';
        wheel.style.color = isOn ? '#fff' : '#888';
    }
}

function updateArpParamsToggleLabel() {
    // ARP params moved to Advanced tab, this function kept for compatibility
    if (!els.arpParamsToggle || !els.arpParamsPanel) return;
    const label = els.arpParamsToggle.querySelector('.btn-text');
    const isOpen = !els.arpParamsPanel.classList.contains('hidden');
    if (label) label.textContent = isOpen ? 'X' : 'SET';
    els.arpParamsToggle.classList.toggle('toggle-on', isOpen);
    els.arpParamsToggle.classList.toggle('toggle-off', !isOpen);
}

function updateGroupShiftUI() {
    els.groupShiftBtn.classList.toggle('active', state.groupShiftEnabled);
}

function loadCustomScaleByName(name) {
    if (state.customScales[name]) {
        const entry = state.customScales[name];
        if (entry.type === 'notes') {
            els.customModeNotes.checked = true;
            els.customScaleNotes.value = formatNotesList(entry.degrees || []);
        } else {
            els.customModeCents.checked = true;
            els.customScaleCents.value = formatCentsList(entry.cents || []);
        }
        updateScaleModeUI();
    }
}

function populateMicrotonalSelect() {
    const names = Object.keys(MICROTONAL_SCALES).sort();
    fillSelectFromNames(els.microScaleSelect, names);
}

function refreshCustomScaleDatalist() {
    const names = Object.keys(state.customScales).sort();
    fillDatalistFromNames(els.customScaleNames, names);
    fillSelectFromNames(els.customScaleSaved, names, '(saved)');
}

function getScaleMode() {
    if (els.scaleModeMicro.checked) return 'microtonal';
    if (els.scaleModeCustom.checked) return 'custom';
    return 'diatonic';
}

function updateScaleModeUI() {
    const mode = getScaleMode();
    els.scaleDiatonicBox.classList.toggle('active', mode === 'diatonic');
    els.scaleMicroBox.classList.toggle('active', mode === 'microtonal');
    els.scaleCustomBox.classList.toggle('active', mode === 'custom');
    els.customScaleNotes.classList.toggle('hidden', !els.customModeNotes.checked);
    els.customScaleCents.classList.toggle('hidden', !els.customModeCents.checked);
    document.querySelectorAll('[data-scale-choice]').forEach(choice => {
        const isActive = choice.getAttribute('data-scale-choice') === mode;
        choice.classList.toggle('active', isActive);
    });
}

function getScaleDefinition() {
    const root = parseInt(els.rootNote.value, 10);
    const mode = getScaleMode();
    let def = null;
    if (mode === 'microtonal') {
        const name = els.microScaleSelect.value;
        const micro = MICROTONAL_SCALES[name];
        if (micro && Array.isArray(micro.cents) && micro.cents.length) {
            def = { root, name, mode, degrees: micro.cents.map(c => c / 100) };
        } else {
            def = { root, name: 'chromatic', mode, degrees: SCALES.chromatic.slice(0) };
        }
    } else if (mode === 'custom') {
        const name = els.customScaleName.value.trim();
        const custom = state.customScales[name];
        const useNotes = els.customModeNotes.checked;
        const degrees = useNotes
            ? (custom && custom.type === 'notes' ? custom.degrees : parseNotesList(els.customScaleNotes.value))
            : (custom && custom.type === 'cents' ? custom.cents.map(c => c / 100) : parseCentsList(els.customScaleCents.value).map(c => c / 100));
        if (degrees.length) {
            def = { root, name: name || 'custom', mode, degrees };
        } else {
            def = { root, name: 'chromatic', mode, degrees: SCALES.chromatic.slice(0) };
        }
    } else {
        const scaleType = els.scaleType.value;
        def = { root, name: scaleType, mode, degrees: SCALES[scaleType].slice(0) };
    }
    return def;
}

function getGridDegrees() {
    const def = getScaleDefinition();
    const degrees = def.degrees.slice(0);
    if (!degrees.some(d => Math.abs(d - 12) < 0.0001)) degrees.push(12);
    return { root: def.root, degrees, stepsPerOct: degrees.length, baseDegrees: def.degrees };
}

function getGridNoteAt(index, degrees, baseNote) {
    const stepsPerOct = degrees.length;
    const oct = Math.floor(index / stepsPerOct);
    const deg = degrees[index % stepsPerOct];
    return baseNote + (oct * 12) + deg;
}

function changeOctave(delta) {
    state.currentOctave = Math.max(-2, Math.min(2, state.currentOctave + delta));
    els.octVal.innerText = (state.currentOctave > 0 ? "+" : "") + state.currentOctave;
    requestDraw();
}

function setupMIDI() {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess({ sysex: false }).then(access => {
            state.midi.access = access;
            const outputs = Array.from(access.outputs.values());
            const inputs = Array.from(access.inputs.values());
            
            clearChildren(els.midiOutSelect);
            outputs.forEach(o => appendOption(els.midiOutSelect, o.id, o.name || o.id || 'MIDI OUT'));
            state.midi.hardwareOutput = outputs[0] || null;
            updateActiveOutput();
            els.midiOutSelect.onchange = () => {
                state.midi.hardwareOutput = access.outputs.get(els.midiOutSelect.value);
                updateActiveOutput();
                setPitchBendRange(parseInt(els.pbRange.value, 10));
            };
            updateMidiStatusBase();
            setPitchBendRange(parseInt(els.pbRange.value, 10));

            clearChildren(els.midiInSelect);
            appendOption(els.midiInSelect, '', 'Scegli Input...');
            inputs.forEach(i => appendOption(els.midiInSelect, i.id, i.name || i.id || 'MIDI IN'));
            if (inputs[0]) {
                els.midiInSelect.value = inputs[0].id;
                state.midi.input = inputs[0];
                state.midi.input.onmidimessage = handleExternalMIDI;
                els.midiStatus.innerText = 'MIDI IN READY';
            }
            els.midiInSelect.onchange = () => {
                if (state.midi.input) state.midi.input.onmidimessage = null;
                state.midi.input = access.inputs.get(els.midiInSelect.value);
                if (state.midi.input) state.midi.input.onmidimessage = handleExternalMIDI;
                els.midiStatus.innerText = state.midi.input ? 'MIDI IN READY' : 'NESSUN MIDI IN';
            };
            
            // Applica le impostazioni MIDI salvate nel preset Init dopo che i dropdown sono popolati
            if (state.presets.Init) {
                const preset = state.presets.Init;
                if (preset.midiOutId && access.outputs.has(preset.midiOutId)) {
                    els.midiOutSelect.value = preset.midiOutId;
                    state.midi.hardwareOutput = access.outputs.get(preset.midiOutId);
                    updateActiveOutput();
                }
                if (preset.midiInId && access.inputs.has(preset.midiInId)) {
                    els.midiInSelect.value = preset.midiInId;
                    if (state.midi.input) state.midi.input.onmidimessage = null;
                    state.midi.input = access.inputs.get(preset.midiInId);
                    if (state.midi.input) state.midi.input.onmidimessage = handleExternalMIDI;
                }
            }
        }).catch(() => {
            updateMidiStatusBase();
        });
    } else {
        updateMidiStatusBase();
    }
    
}

// GESTIONE NOTE DA CONTROLLER ESTERNO
function handleExternalMIDI(message) {
    const [status, data1, data2] = message.data;
    if (status >= 0xF8) {
        handleClockMessage(status);
        if (els.midiThru.checked && state.midi.output) state.midi.output.send(message.data);
        return;
    }
    requestDraw();
    const note = data1;
    const velocity = data2;
    const type = status & 0xf0;
    const srcChan = status & 0x0f;
    const microtonalize = els.scaleModeMicro.checked && els.microtonalizeIn.checked;
    if (type === 0x90 && velocity > 0 && isLocalNoteOn(note)) {
        return;
    }
    const thruOnly = els.midiThru.checked && !microtonalize;
    if (thruOnly) {
        if (state.midi.output) state.midi.output.send(message.data);
    }
    if (type === 0x90 && velocity > 0) {
        if (microtonalize) {
            const noteFloat = mapMidiNoteToScale(note);
            const voice = makeVoiceFromNote(noteFloat);
            const chan = state.mpeChannels.shift();
            if (!chan) {
                els.midiStatus.innerText = 'MPE CHANNELS FULL';
            }
            if (chan && state.midi.output) {
                const pb = clampPb(8192 + voice.basePb);
                state.midi.output.send([0xB0 + chan - 1, 74, 0]);
                state.midi.output.send([0xE0 + chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
                state.midi.output.send([0x90 + chan - 1, voice.note, velocity]);
            }
            const list = state.physicalNotes.get(voice.note) || [];
            list.push({ chan: chan || 0, note: voice.note, basePb: voice.basePb, velocity, grabbed: false, srcChan, srcNote: note, lastPb: 8192, lastSlide: 0, lastPress: 0, onTs: Date.now() });
            state.physicalNotes.set(voice.note, list);
            state.externalNoteMap.set(`${srcChan}:${note}`, { keyNote: voice.note, chan: chan || 0 });
        } else {
            const chan = thruOnly ? 0 : state.mpeChannels.shift();
            if (!thruOnly && !chan) {
                els.midiStatus.innerText = 'MPE CHANNELS FULL';
            }
            if (!thruOnly && chan && state.midi.output) {
                state.midi.output.send([0x90 + chan - 1, note, velocity]);
            }
            const list = state.physicalNotes.get(note) || [];
            list.push({ chan: chan || 0, velocity, grabbed: false, srcChan, lastPb: 8192, lastSlide: 0, lastPress: 0, onTs: Date.now() });
            state.physicalNotes.set(note, list);
        }
    } else if (type === 0x80 || (type === 0x90 && velocity === 0)) {
        if (microtonalize) {
            const key = state.externalNoteMap.get(`${srcChan}:${note}`);
            if (key) {
                const list = state.physicalNotes.get(key.keyNote);
                if (list && list.length) {
                    const idx = list.findIndex(d => d.srcChan === srcChan && d.srcNote === note);
                    const data = idx >= 0 ? list.splice(idx, 1)[0] : list.shift();
                    if (data && data.chan) {
                        if (state.midi.output) state.midi.output.send([0x80 + data.chan - 1, data.note || key.keyNote, 0]);
                        state.mpeChannels.push(data.chan);
                        state.mpeChannels.sort((a,b)=>a-b);
                    }
                    if (!list.length) state.physicalNotes.delete(key.keyNote);
                }
                state.externalNoteMap.delete(`${srcChan}:${note}`);
            }
        } else {
            const list = state.physicalNotes.get(note);
            if (list && list.length) {
                const idx = list.findIndex(d => d.srcChan === srcChan);
                const data = idx >= 0 ? list.splice(idx, 1)[0] : list.shift();
                if (data) {
                    if (data.chan) {
                        if (!thruOnly && state.midi.output) state.midi.output.send([0x80 + data.chan - 1, note, 0]);
                        state.mpeChannels.push(data.chan);
                        state.mpeChannels.sort((a,b)=>a-b);
                    }
                }
                if (!list.length) state.physicalNotes.delete(note);
            }
        }
    } else if (type === 0xE0 || type === 0xD0 || type === 0xB0) {
        const list = [];
        state.physicalNotes.forEach(arr => arr.forEach(v => { if (v.srcChan === srcChan) list.push(v); }));
        if (!list.length) return;
        if (type === 0xE0) {
            const pb = (message.data[2] << 7) | message.data[1];
            list.forEach(v => {
                v.lastPb = pb;
                if (!thruOnly && v.chan && !v.grabbed && state.midi.output) {
                    state.midi.output.send([0xE0 + v.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
                }
            });
        } else if (type === 0xD0) {
            const press = message.data[1];
            list.forEach(v => {
                v.lastPress = press;
                if (!thruOnly && v.chan && !v.grabbed && state.midi.output) {
                    state.midi.output.send([0xD0 + v.chan - 1, press]);
                }
            });
        } else if (type === 0xB0 && message.data[1] === 74) {
            const slide = message.data[2];
            list.forEach(v => {
                v.lastSlide = slide;
                if (!thruOnly && v.chan && !v.grabbed && state.midi.output) {
                    state.midi.output.send([0xB0 + v.chan - 1, 74, slide]);
                }
            });
        }
    }
}

function getCurveExponent() {
    const type = els.curveType.value;
    if (type === 'soft') return 0.6;
    if (type === 'hard') return 1.8;
    return 1.0;
}

function applyCurve(value) {
    const v = Math.max(0, Math.min(1, value));
    const exp = getCurveExponent();
    return Math.pow(v, exp);
}

function applySmoothing(touch, m) {
    const smoothAmt = parseInt(els.smoothAmt.value, 10) / 100;
    if (!smoothAmt) return m;
    const mix = 1 - smoothAmt;
    touch.smoothPb = touch.smoothPb == null ? m.pbValue : touch.smoothPb + (m.pbValue - touch.smoothPb) * mix;
    touch.smoothSlide = touch.smoothSlide == null ? m.slide : touch.smoothSlide + (m.slide - touch.smoothSlide) * mix;
    touch.smoothPress = touch.smoothPress == null ? m.press : touch.smoothPress + (m.press - touch.smoothPress) * mix;
    return {
        ...m,
        pbValue: Math.round(touch.smoothPb),
        slide: Math.round(touch.smoothSlide),
        press: Math.round(touch.smoothPress)
    };
}

function sendMidi(data) {
    if (!state.midi.output) return;
    state.midi.output.send(data);
}




function getRateFactor(rate) {
    if (rate === '1/4') return 1;
    if (rate === '1/8') return 0.5;
    if (rate === '1/8T') return 1 / 3;
    if (rate === '1/16') return 0.25;
    if (rate === '1/16T') return 1 / 6;
    if (rate === '1/32') return 0.125;
    return 0.25;
}

function updateArpTiming() {
    const factor = getRateFactor(state.arp.rate);
    state.arp.ticksPerStep = Math.max(1, Math.round(24 * factor));
}

function getStepMs() {
    const factor = getRateFactor(state.arp.rate);
    return (60 / Math.max(40, state.arp.bpm)) * 1000 * factor;
}

function stopAllArpNotes() {
    if (!state.midi.output) return;
    state.arp.active.forEach(entry => {
        if (entry.offTimer) {
            clearTimeout(entry.offTimer);
            entry.offTimer = null;
        }
        state.midi.output.send([0x80 + entry.chan - 1, entry.note, 0]);
        state.mpeChannels.push(entry.chan);
    });
    state.arp.active = [];
    state.mpeChannels.sort((a,b)=>a-b);
}

function stopArpActiveNote(note) {
    if (!state.midi.output || note == null) return;
    const remaining = [];
    state.arp.active.forEach(entry => {
        if (entry.note === note) {
            if (entry.offTimer) {
                clearTimeout(entry.offTimer);
                entry.offTimer = null;
            }
            state.midi.output.send([0x80 + entry.chan - 1, entry.note, 0]);
            state.mpeChannels.push(entry.chan);
        } else {
            remaining.push(entry);
        }
    });
    state.arp.active = remaining;
    state.mpeChannels.sort((a,b)=>a-b);
}

function stopArpActiveNotes(noteObjs) {
    if (!noteObjs || !noteObjs.length) return;
    noteObjs.forEach(n => stopArpActiveNote(n.note));
}

function arpNoteOn(noteObj, stepMs) {
    if (!state.midi.output) return;
    const chan = state.mpeChannels.shift();
    if (!chan) {
        els.midiStatus.innerText = 'MPE CHANNELS FULL';
        return;
    }
    const m = noteObj.lastM || { pbValue: 8192, slide: 0, press: 90 };
    const vel = Math.max(0, Math.min(127, Math.round(m.press ?? 90)));
    if (vel <= 0) {
        state.mpeChannels.push(chan);
        state.mpeChannels.sort((a,b)=>a-b);
        return;
    }
    const pb = getVoicePb(m, noteObj);
    sendMidi([0xB0 + chan - 1, 74, m.slide]);
    sendMidi([0xE0 + chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
    sendMidi([0xD0 + chan - 1, m.press]);
    sendMidi([0x90 + chan - 1, noteObj.note, vel]);
    markLocalNoteOn(noteObj.note);
    const entry = { chan, note: noteObj.note, color: noteObj.color, offTimer: null };
    state.arp.active.push(entry);
    const gateMs = Math.max(10, stepMs * state.arp.gate);
    entry.offTimer = setTimeout(() => {
        if (!state.arp.active.includes(entry)) return;
        sendMidi([0x80 + entry.chan - 1, entry.note, 0]);
        state.mpeChannels.push(entry.chan);
        state.mpeChannels.sort((a,b)=>a-b);
        state.arp.active = state.arp.active.filter(e => e !== entry);
    }, gateMs);
}

function arpStep(stepMsOverride) {
    if (!state.arp.enabled || !state.arp.notes.length) return;
    const stepMs = stepMsOverride || getStepMs();
    const noteObj = state.arp.notes[state.arp.stepIndex % state.arp.notes.length];
    state.arp.stepIndex++;
    arpNoteOn(noteObj, stepMs);
    requestDraw();
}

function restartInternalArp() {
    if (state.arp.timer) clearInterval(state.arp.timer);
    if (!state.arp.enabled || state.arp.sync !== 'internal') return;
    const stepMs = getStepMs();
    state.arp.running = true;
    state.arp.timer = setInterval(() => arpStep(stepMs), stepMs);
}

function stopInternalArp() {
    if (state.arp.timer) clearInterval(state.arp.timer);
    state.arp.timer = null;
}

function syncArpFromUI() {
    const wasEnabled = state.arp.enabled;
    state.arp.enabled = els.arpEnabled.checked;
    state.arp.rate = els.arpRate.value;
    state.arp.gate = parseInt(els.arpGate.value, 10) / 100;
    state.arp.sync = els.arpSync.value;
    state.arp.bpm = parseInt(els.arpBpm.value, 10) || 120;
    state.arp.latch = els.arpLatch.checked;
    updateArpTiming();
    updateArpControlsUI();
    if (!state.arp.enabled) {
        state.arp.running = false;
        stopInternalArp();
        stopAllArpNotes();
        state.arp.notes = [];
        state.arpHoldTouches = [];
        return;
    }
    if (!wasEnabled && els.holdNotes.checked && state.heldVoices.length) {
        convertHeldToArp();
    }
    if (state.arp.sync === 'internal') {
        restartInternalArp();
    } else {
        stopInternalArp();
    }
}


function handleClockMessage(status) {
    if (!state.arp.enabled || state.arp.sync !== 'midi') return;
    if (status === 0xFA) {
        state.arp.running = true;
        state.arp.stepIndex = 0;
        state.arp.clockTicks = 0;
        state.arp.lastClockTime = 0;
        stopAllArpNotes();
        return;
    }
    if (status === 0xFC) {
        state.arp.running = false;
        state.arp.lastClockTime = 0;
        stopAllArpNotes();
        return;
    }
    if (status === 0xFB) {
        state.arp.running = true;
        return;
    }
    if (status === 0xF8) {
        const now = performance.now();
        if (state.arp.lastClockTime) state.arp.tickMs = now - state.arp.lastClockTime;
        state.arp.lastClockTime = now;
        if (!state.arp.running) return;
        state.arp.clockTicks++;
        if (state.arp.clockTicks % state.arp.ticksPerStep === 0) {
            const stepMs = state.arp.tickMs ? state.arp.tickMs * state.arp.ticksPerStep : getStepMs();
            arpStep(stepMs);
        }
    }
}

function removeArpNotes(noteObjs) {
    if (!noteObjs || !noteObjs.length) return;
    state.arp.notes = state.arp.notes.filter(n => !noteObjs.includes(n));
    if (!state.arp.notes.length) state.arpHoldTouches = [];
}

function getMPEData(e, voice = null, forceSnap = false) {
    const numOct = parseInt(els.visibleOctaves.value, 10);
    let round = parseInt(els.roundRate.value, 10) / 100;
    let deadCenter = els.deadCenter.checked;
    const dcForce = parseInt(els.deadCenterForce.value, 10) / 100;
    if (els.quantizeRelease.checked && !forceSnap && voice) {
        round = 0;
        deadCenter = false;
    }
    const grid = getGridDegrees();
    const baseMIDI = 48 + (state.currentOctave * 12) + grid.root;
    const totalNotes = numOct * grid.stepsPerOct;
    const stepExact = ((e.clientX - state.canvasRect.left) / state.canvasRect.width) * totalNotes;
    const centerExact = stepExact - 0.5;
    const stepIdx = Math.max(0, Math.min(totalNotes - 1, Math.floor(centerExact)));
    const stepFrac = centerExact - stepIdx;
    const noteA = getGridNoteAt(stepIdx, grid.degrees, baseMIDI);
    const noteB = getGridNoteAt(Math.min(stepIdx + 1, totalNotes - 1), grid.degrees, baseMIDI);
    const currentExact = noteA + ((noteB - noteA) * stepFrac);
    
    let finalExact = currentExact;
    let detune = 0;
    if (voice) {
        const nearestNote = noteA;
        const distanceToNote = Math.abs(currentExact - nearestNote);
        const dcZone = round * (0.2 + (dcForce * 0.8));
        if (deadCenter && distanceToNote < dcZone) {
            const force = 1 - (distanceToNote / Math.max(0.0001, dcZone));
            finalExact = currentExact + (nearestNote - currentExact) * force;
        } else if (distanceToNote < round) {
            const force = 1 - (distanceToNote / round);
            finalExact = currentExact + (nearestNote - currentExact) * force;
        }
        detune = finalExact - voice.initialExact;
        voice.vibratoSpeed = Math.abs(e.clientX - voice.lastX) * 2.8;
        voice.lastX = e.clientX;
    }
    const pbRange = parseInt(els.pbRange.value, 10) || 12;
    let pbValue = Math.floor(8192 + (detune * (8192 / pbRange)));
    pbValue = Math.max(0, Math.min(16383, pbValue));
    const top = state.canvasRect.top;
    const bottom = getCanvasBottomY();
    const yRange = Math.max(1, bottom - top);
    const yClamped = Math.max(top, Math.min(e.clientY, bottom));
    const yNorm = Math.max(0, Math.min(1, 1 - ((yClamped - top) / yRange)));
    const dz = parseInt(els.yDeadzone.value, 10) / 100;
    let slideNorm = yNorm;
    if (dz > 0) {
        slideNorm = slideNorm < dz ? 0 : (slideNorm - dz) / (1 - dz);
    }
    slideNorm = applyCurve(slideNorm);
    const slide = Math.floor(slideNorm * 127);
    const useYForVelocity = els.linkPressToY.checked && els.linkYToVelocity.checked;
    const sens = parseInt(els.touchSensitivity ? els.touchSensitivity.value : 75, 10) || 75;
    let pressNorm = useYForVelocity ? slideNorm : Math.min(((e.width + e.height) / sens), 1.0);
    pressNorm = applyCurve(pressNorm);
    const press = Math.floor(pressNorm * 127);
    return { pbValue, slide, press, x: e.clientX, y: e.clientY, exact: finalExact };
}

function clampPb(value) {
    return Math.max(0, Math.min(16383, value));
}

function markLocalNoteOn(note) {
    state.localNoteOnTimes.set(note, Date.now());
}

function isLocalNoteOn(note) {
    const ts = state.localNoteOnTimes.get(note);
    if (!ts) return false;
    if (Date.now() - ts > LOCAL_SUPPRESS_MS) {
        state.localNoteOnTimes.delete(note);
        return false;
    }
    return true;
}

function makeVoiceFromNote(noteFloat) {
    const pbRange = parseInt(els.pbRange.value, 10) || 12;
    const midiNote = Math.max(0, Math.min(127, Math.round(noteFloat)));
    const detune = noteFloat - midiNote;
    const basePb = Math.round(detune * (8192 / pbRange));
    return { note: midiNote, basePb };
}

function getVoicePb(m, voice) {
    const base = voice.basePb || 0;
    return clampPb(m.pbValue + base);
}

function getVoiceNoteFloat(voice) {
    const pbRange = parseInt(els.pbRange.value, 10) || 12;
    const basePb = voice.basePb || 0;
    return (voice.note || 0) + (basePb * (pbRange / 8192));
}

function getNearestScaleNote(exact) {
    const root = parseInt(els.rootNote.value, 10);
    const def = getScaleDefinition();
    const scaleKey = `${def.mode}:${def.name}`;
    if (!state.scaleNotes.notes.length || state.scaleNotes.root !== root || state.scaleNotes.scale !== scaleKey) {
        updateScaleNotes();
    }
    if (!state.scaleNotes.notes.length) return exact;
    return state.scaleNotes.notes.reduce((prev, curr) => Math.abs(curr - exact) < Math.abs(prev - exact) ? curr : prev);
}

function snapHoldVoicesToScale(t) {
    if (!t || !t.voices || !t.voices.length) return;
    const exact = t.lastM?.exact ?? t.initialExact ?? 0;
    const rootNote = getNearestScaleNote(exact);
    const chordNotes = computeChordNotes(rootNote);
    const m = t.lastM ? { ...t.lastM, exact: rootNote } : { pbValue: 8192, slide: 0, press: 90, exact: rootNote, x: 0, y: 0 };
    const pbRange = parseInt(els.pbRange.value, 10) || 12;
    m.pbValue = 8192;
    t.lastM = m;
    t.initialExact = rootNote;
    for (let i = 0; i < t.voices.length; i++) {
        const v = t.voices[i];
        const noteFloat = chordNotes[i] ?? rootNote;
        const basePb = Math.round((noteFloat - (v.note || 0)) * (8192 / pbRange));
        v.basePb = Math.max(-8192, Math.min(8191, basePb));
        const pb = getVoicePb(m, v);
        if (v.chan) {
            sendMidi([0xB0 + v.chan - 1, 74, m.slide]);
            sendMidi([0xE0 + v.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
            sendMidi([0xD0 + v.chan - 1, m.press]);
        }
    }
}

function drawGridBaseToContext(gctx, width, height, grid, numOct, noteW, baseMIDI) {
    const mode = getScaleMode();
    gctx.clearRect(0, 0, width, height);
    for (let i = 0; i < (numOct * grid.stepsPerOct); i++) {
        const n = getGridNoteAt(i, grid.degrees, baseMIDI);
        const x = i * noteW;
        const isOctStart = (i % grid.stepsPerOct === 0);
        const nRound = Math.round(n);
        const isRoot = (nRound % 12 === grid.root);
        gctx.fillStyle = isRoot ? 'rgba(255, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.15)';
        gctx.fillRect(x, 0, noteW, height);
        gctx.strokeStyle = isOctStart ? '#ff3333' : (isRoot ? '#ff0000' : '#666');
        gctx.lineWidth = isOctStart ? 3 : (isRoot ? 3 : 1);
        gctx.beginPath(); gctx.moveTo(x, 0); gctx.lineTo(x, height); gctx.stroke();
        const degree = grid.degrees[i % grid.stepsPerOct];
        if (!(degree === 12 && i < (numOct * grid.stepsPerOct - 1))) {
            gctx.font = `bold ${Math.max(13, Math.floor(noteW * 0.5))}px ${CANVAS_FONT_FAMILY}`; gctx.textAlign = 'center';
            gctx.fillStyle = isRoot ? '#ff4444' : '#ffffff';
            gctx.strokeStyle = '#000'; gctx.lineWidth = 4;
            const noteY = Math.floor(height * 0.5);
            gctx.strokeText(NOTE_NAMES[nRound % 12], x + noteW/2, noteY);
            gctx.fillText(NOTE_NAMES[nRound % 12], x + noteW/2, noteY);
            if (mode !== 'diatonic' && noteW >= 48) {
                const cents = Math.round((degree % 12) * 100);
                gctx.font = `bold 9px ${CANVAS_FONT_FAMILY}`; gctx.textAlign = 'center';
                gctx.fillStyle = '#ffaa00';
                gctx.fillText(`${cents}c`, x + noteW/2, noteY + 16);
            }
        }
    }
}

function updateGridCache() {
    const numOct = parseInt(els.visibleOctaves.value, 10);
    const grid = getGridDegrees();
    const baseMIDI = 48 + (state.currentOctave * 12) + grid.root;
    const totalNotes = numOct * grid.stepsPerOct;
    const width = Math.floor(state.canvasRect.width);
    const height = Math.floor(state.canvasRect.height);
    const noteW = width / totalNotes;
    const key = [
        width, height, numOct, state.currentOctave, grid.root, grid.degrees.join(','),
        getScaleMode()
    ].join('|');
    const cols = [];
    for (let i = 0; i < totalNotes; i++) {
        const n = getGridNoteAt(i, grid.degrees, baseMIDI);
        cols.push({ note: n, x: (i * noteW) + (noteW / 2) });
    }
    const needBg = !state.gridCache || state.gridCache.key !== key;
    let bgCanvas = state.gridCache ? state.gridCache.bgCanvas : null;
    if (needBg) {
        if (!bgCanvas) bgCanvas = document.createElement('canvas');
        bgCanvas.width = width;
        bgCanvas.height = height;
        const gctx = bgCanvas.getContext('2d');
        drawGridBaseToContext(gctx, width, height, grid, numOct, noteW, baseMIDI);
    }
    state.gridCache = { cols, noteW, baseMIDI, grid, numOct, totalNotes, key, bgCanvas };
}

function getNearestNoteX(noteFloat) {
    if (!state.gridCache || !state.gridCache.cols.length) return null;
    let best = null;
    let bestDist = Infinity;
    for (let i = 0; i < state.gridCache.cols.length; i++) {
        const col = state.gridCache.cols[i];
        const dist = Math.abs(col.note - noteFloat);
        if (dist < bestDist) {
            bestDist = dist;
            best = col.x;
        }
    }
    return best;
}

function drawNoteBubble(x, y, radius, color, label) {
    ctx.shadowBlur = 20;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    if (label) {
        ctx.fillStyle = "#fff";
        ctx.font = `bold 12px ${CANVAS_FONT_FAMILY}`;
        ctx.textAlign = 'center';
        ctx.fillText(label, x, y - radius - 16);
    }
}

function getGroupDragKey(type, id) {
    return `${type}:${id}`;
}

function getActiveGroupTouches(key) {
    const list = [];
    state.activeTouches.forEach(t => {
        if (t.isGroupDrag && t.groupDragKey === key) list.push(t);
    });
    return list;
}

function startHoldGroupDrag(groupId) {
    if (!groupId) return null;
    const key = getGroupDragKey('hold', groupId);
    if (state.groupDragStates.has(key)) return state.groupDragStates.get(key);
    const voices = [];
    state.heldVoices.forEach(v => { if (v.group === groupId) voices.push(v); });
    state.activeTouches.forEach(t => {
        if (t.isHoldGrab && t.holdGroup === groupId && t.voices) {
            t.voices.forEach(v => voices.push(v));
        }
    });
    const pbRange = parseInt(els.pbRange.value, 10) || 12;
    const origBasePb = new Map();
    let sumExact = 0;
    voices.forEach(v => {
        origBasePb.set(v, v.basePb || 0);
        const noteFloat = (v.note || 0) + ((v.basePb || 0) * (pbRange / 8192));
        sumExact += noteFloat;
    });
    const anchorExact = voices.length ? sumExact / voices.length : 0;
    const dragState = { key, type: 'hold', groupId, voices, origBasePb, anchorExact, lastX: null };
    state.groupDragStates.set(key, dragState);
    return dragState;
}

function startArpGroupDrag(holdIdx) {
    const key = getGroupDragKey('arp', holdIdx);
    if (state.groupDragStates.has(key)) return state.groupDragStates.get(key);
    const hold = state.arpHoldTouches[holdIdx];
    if (!hold || !hold.noteObjs) return null;
    const noteObjs = hold.noteObjs.slice(0);
    let sumExact = 0;
    noteObjs.forEach(n => { sumExact += (n.noteFloat ?? n.note ?? 0); });
    const anchorExact = noteObjs.length ? sumExact / noteObjs.length : 0;
    const origNoteFloat = new Map();
    noteObjs.forEach(n => origNoteFloat.set(n, n.noteFloat ?? n.note ?? 0));
    const dragState = { key, type: 'arp', holdIdx, noteObjs, origNoteFloat, anchorExact, lastX: null };
    state.groupDragStates.set(key, dragState);
    return dragState;
}

function handleGroupDrag(t) {
    const dragState = state.groupDragStates.get(t.groupDragKey);
    if (!dragState) return;
    const touches = getActiveGroupTouches(dragState.key);
    if (!touches.length) return;
    const avgX = touches.reduce((s, item) => s + (item.lastX ?? 0), 0) / touches.length;
    const avgY = touches.reduce((s, item) => s + (item.lastM?.y ?? 0), 0) / touches.length;
    const fakeEvent = { clientX: avgX, clientY: avgY, width: 0, height: 0 };
    const voiceRef = { initialExact: dragState.anchorExact, lastX: dragState.lastX ?? avgX, vibratoSpeed: 0 };
    const m = getMPEData(fakeEvent, voiceRef);
    dragState.lastX = avgX;
    const pbRange = parseInt(els.pbRange.value, 10) || 12;
    const deltaExact = m.exact - dragState.anchorExact;
    const pbDelta = Math.round(deltaExact * (8192 / pbRange));
    if (dragState.type === 'hold') {
        dragState.voices.forEach(v => {
            const basePbOrig = dragState.origBasePb.get(v) || 0;
            const newBasePb = basePbOrig + pbDelta;
            v.basePb = newBasePb;
            v.lastM = { ...m, x: avgX, y: avgY, exact: (v.note || 0) + (newBasePb * (pbRange / 8192)) };
            const pb = clampPb(8192 + basePbOrig + pbDelta);
            if (v.chan) {
                sendMidi([0xE0 + v.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
                sendMidi([0xB0 + v.chan - 1, 74, m.slide]);
                sendMidi([0xD0 + v.chan - 1, m.press]);
            }
        });
    } else if (dragState.type === 'arp') {
        dragState.noteObjs.forEach(n => {
            const base = dragState.origNoteFloat.get(n) || 0;
            const noteFloat = base + deltaExact;
            const voice = makeVoiceFromNote(noteFloat);
            n.noteFloat = noteFloat;
            n.note = voice.note;
            n.basePb = voice.basePb;
            n.lastM = { ...m, x: avgX, y: avgY, exact: noteFloat };
        });
    }
}

function cleanupGroupDrag(key) {
    if (!key) return;
    const stillActive = Array.from(state.activeTouches.values()).some(t => t.isGroupDrag && t.groupDragKey === key);
    if (!stillActive) state.groupDragStates.delete(key);
}

function startGroupShiftDrag(e) {
    const holdHit = findHeldVoiceAt(e.clientX, e.clientY);
    if (holdHit) {
        const hv = state.heldVoices[holdHit.idx];
        const groupId = hv.group || 0;
        if (!groupId) return false;
        const key = getGroupDragKey('hold', groupId);
        startHoldGroupDrag(groupId);
        const tmpVoice = { initialExact: hv.rootNote ?? hv.note, lastX: e.clientX, vibratoSpeed: 0 };
        const m = getMPEData(e, tmpVoice);
        state.activeTouches.set(e.pointerId, {
            voices: [],
            isGroupDrag: true,
            groupDragKey: key,
            lastX: e.clientX,
            lastM: m,
            color: hv.color,
            phase: hv.phase || 0,
            initialExact: hv.rootNote ?? hv.note
        });
        return true;
    }
    const arpNoteHit = findArpHoldNoteAt(e.clientX, e.clientY);
    const arpHoldHit = arpNoteHit ? null : findArpHoldAt(e.clientX, e.clientY);
    const holdIdx = arpNoteHit ? arpNoteHit.holdIdx : (arpHoldHit ? arpHoldHit.idx : null);
    if (holdIdx != null) {
        const hold = state.arpHoldTouches[holdIdx];
        if (!hold) return false;
        const key = getGroupDragKey('arp', holdIdx);
        startArpGroupDrag(holdIdx);
        const baseExact = hold.lastM?.exact ?? 0;
        const tmpVoice = { initialExact: baseExact, lastX: e.clientX, vibratoSpeed: 0 };
        const m = getMPEData(e, tmpVoice);
        state.activeTouches.set(e.pointerId, {
            voices: [],
            isGroupDrag: true,
            groupDragKey: key,
            lastX: e.clientX,
            lastM: m,
            color: hold.color || '#ffaa00',
            phase: hold.phase || 0,
            initialExact: baseExact
        });
        return true;
    }
    return false;
}

function tryStartTwoFingerGroupDrag(e) {
    if (Array.from(state.activeTouches.values()).some(t => t.isGroupDrag)) return true;
    if (!state.activeTouches.size) return false;
    let holdEntry = null;
    let arpEntry = null;
    state.activeTouches.forEach((t, id) => {
        if (!holdEntry && t.isHoldGrab && t.holdGroup) holdEntry = { id, t };
        if (!arpEntry && t.isArpHoldGrab && Number.isInteger(t.holdIdx)) arpEntry = { id, t };
    });
    if (holdEntry) {
        const groupId = holdEntry.t.holdGroup;
        const key = getGroupDragKey('hold', groupId);
        startHoldGroupDrag(groupId);
        holdEntry.t.isGroupDrag = true;
        holdEntry.t.groupDragKey = key;
        state.activeTouches.set(e.pointerId, {
            voices: [],
            isGroupDrag: true,
            groupDragKey: key,
            lastX: e.clientX,
            lastM: { x: e.clientX, y: e.clientY, press: 0, slide: 0, pbValue: 8192, exact: holdEntry.t.initialExact ?? 0 },
            color: holdEntry.t.color,
            phase: holdEntry.t.phase || 0
        });
        return true;
    }
    if (arpEntry) {
        const key = getGroupDragKey('arp', arpEntry.t.holdIdx);
        startArpGroupDrag(arpEntry.t.holdIdx);
        arpEntry.t.isGroupDrag = true;
        arpEntry.t.groupDragKey = key;
        state.activeTouches.set(e.pointerId, {
            voices: [],
            isGroupDrag: true,
            groupDragKey: key,
            lastX: e.clientX,
            lastM: { x: e.clientX, y: e.clientY, press: 0, slide: 0, pbValue: 8192, exact: arpEntry.t.initialExact ?? 0 },
            color: arpEntry.t.color,
            phase: arpEntry.t.phase || 0
        });
        return true;
    }
    return false;
}

const DROP_DURATION_MS = 1000;
const DOUBLE_TAP_MS = 280;
const DOUBLE_TAP_PX = 24;
const heldTapState = new Map();

function isDoubleTap(obj, x, y) {
    if (!obj) return false;
    const now = performance.now();
    const last = obj._tapTime || 0;
    const dx = (obj._tapX ?? x) - x;
    const dy = (obj._tapY ?? y) - y;
    obj._tapTime = now;
    obj._tapX = x;
    obj._tapY = y;
    return (now - last) <= DOUBLE_TAP_MS && (dx * dx + dy * dy) <= (DOUBLE_TAP_PX * DOUBLE_TAP_PX);
}

function isDoubleTapKey(key, x, y) {
    if (!key) return false;
    const now = performance.now();
    const last = heldTapState.get(key) || { t: 0, x, y };
    const dx = last.x - x;
    const dy = last.y - y;
    heldTapState.set(key, { t: now, x, y });
    return (now - last.t) <= DOUBLE_TAP_MS && (dx * dx + dy * dy) <= (DOUBLE_TAP_PX * DOUBLE_TAP_PX);
}

function getCanvasBottomY() {
    return state.canvasRect.top + Math.max(1, state.canvasRect.height);
}

function getSlideFromY(y) {
    const top = state.canvasRect.top;
    const bottom = getCanvasBottomY();
    const yRange = Math.max(1, bottom - top);
    const yClamped = Math.max(top, Math.min(y, bottom));
    let yNorm = Math.max(0, Math.min(1, 1 - ((yClamped - top) / yRange)));
    const dz = parseInt(els.yDeadzone.value, 10) / 100;
    if (dz > 0) {
        yNorm = yNorm < dz ? 0 : (yNorm - dz) / (1 - dz);
    }
    yNorm = applyCurve(yNorm);
    return Math.floor(yNorm * 127);
}

function startHoldDrop(voice) {
    if (!voice || voice.dropActive) return;
    const m = voice.lastM || { x: 0, y: getCanvasBottomY(), press: 90, slide: 0 };
    voice.dropActive = true;
    const startY = m.y;
    const endY = getCanvasBottomY();
    const startPress = Number.isFinite(m.press) ? m.press : 90;
    const start = performance.now();

    function tick(now) {
        const t = Math.min(1, (now - start) / DROP_DURATION_MS);
        const y = startY + (endY - startY) * t;
        const press = Math.max(0, Math.round(startPress * (1 - t)));
        const slide = getSlideFromY(y);
        m.y = y;
        m.press = press;
        m.slide = slide;
        voice.lastM = m;
        if (voice.chan) {
            sendMidi([0xB0 + voice.chan - 1, 74, slide]);
            sendMidi([0xD0 + voice.chan - 1, press]);
        }
        if (t < 1) {
            voice.dropRaf = requestAnimationFrame(tick);
        } else {
            if (voice.chan) {
                sendMidi([0x80 + voice.chan - 1, voice.note, 0]);
                state.mpeChannels.push(voice.chan);
                state.mpeChannels.sort((a,b)=>a-b);
            }
            state.heldVoices = state.heldVoices.filter(v => v !== voice);
            voice.dropActive = false;
        }
    }
    voice.dropRaf = requestAnimationFrame(tick);
}

function startArpHoldDrop(hold, noteObj) {
    if (!hold || !noteObj || noteObj.dropActive) return;
    const baseM = noteObj.lastM || hold.lastM || { x: 0, y: getCanvasBottomY(), press: 90, slide: 0 };
    noteObj.dropActive = true;
    const startY = baseM.y;
    const endY = getCanvasBottomY();
    const startPress = Number.isFinite(baseM.press) ? baseM.press : 90;
    const start = performance.now();

    function tick(now) {
        const t = Math.min(1, (now - start) / DROP_DURATION_MS);
        const y = startY + (endY - startY) * t;
        const press = Math.max(0, Math.round(startPress * (1 - t)));
        const slide = getSlideFromY(y);
        baseM.y = y;
        baseM.press = press;
        baseM.slide = slide;
        noteObj.lastM = baseM;
        if (t < 1) {
            noteObj.dropRaf = requestAnimationFrame(tick);
        } else {
            stopArpActiveNote(noteObj.note);
            removeArpNotes([noteObj]);
            if (hold.noteObjs) {
                hold.noteObjs = hold.noteObjs.filter(n => n !== noteObj);
                if (!hold.noteObjs.length) {
                    state.arpHoldTouches = state.arpHoldTouches.filter(h => h !== hold);
                }
            }
            noteObj.dropActive = false;
        }
    }
    noteObj.dropRaf = requestAnimationFrame(tick);
}

function collectActiveChannels() {
    const set = new Set();
    state.activeTouches.forEach(t => {
        t.voices.forEach(v => { if (v.chan) set.add(v.chan); });
    });
    state.heldVoices.forEach(v => { if (v.chan) set.add(v.chan); });
    state.physicalNotes.forEach(arr => arr.forEach(v => { if (v.chan) set.add(v.chan); }));
    state.arp.active.forEach(v => { if (v.chan) set.add(v.chan); });
    return Array.from(set);
}

function collectFadeTargets() {
    const targets = new Map();
    function push(ch, slide, press) {
        if (!ch) return;
        const cur = targets.get(ch) || { slide: 0, press: 0 };
        const s = Number.isFinite(slide) ? slide : 0;
        const p = Number.isFinite(press) ? press : 0;
        targets.set(ch, { slide: Math.max(cur.slide, s), press: Math.max(cur.press, p) });
    }
    state.activeTouches.forEach(t => {
        t.voices.forEach(v => push(v.chan, t.lastM?.slide, t.lastM?.press));
    });
    state.heldVoices.forEach(v => push(v.chan, v.lastM?.slide, v.lastM?.press));
    state.physicalNotes.forEach(arr => arr.forEach(v => push(v.chan, v.lastSlide, v.lastPress)));
    state.arp.active.forEach(v => push(v.chan, 0, 80));
    return targets;
}

function collectActiveNotes() {
    const map = new Map();
    function addNote(chan, note, press) {
        if (!chan || note == null) return;
        const key = `${chan}:${note}`;
        const vel = Math.max(1, Math.min(127, Math.round(press || 80)));
        map.set(key, { chan, note, vel });
    }
    state.activeTouches.forEach(t => {
        t.voices.forEach(v => addNote(v.chan, v.note, t.lastM?.press));
    });
    state.heldVoices.forEach(v => addNote(v.chan, v.note, v.lastM?.press));
    state.physicalNotes.forEach(arr => arr.forEach(v => addNote(v.chan, v.note, v.lastPress)));
    state.arp.active.forEach(v => addNote(v.chan, v.note, 80));
    return Array.from(map.values());
}

function runEchoTail() {
    return 0;
}

function fadeOutAll() {
    if (!state.midi.output) return;
    if (state.fadeTimer) {
        clearInterval(state.fadeTimer);
        state.fadeTimer = null;
    }
    const seconds = Math.max(1, Math.min(20, parseFloat(els.fadeSeconds.value) || 4));
    const channels = collectActiveChannels();
    const targets = collectFadeTargets();
    if (!channels.length) return;
    const intervalMs = 30;
    const steps = Math.max(1, Math.floor((seconds * 1000) / intervalMs));
    let step = 0;
    state.fadeState = { active: true, start: Date.now(), durationMs: seconds * 1000 };
    requestDraw();
    state.fadeTimer = setInterval(() => {
        step += 1;
        channels.forEach(ch => {
            const t = targets.get(ch) || { slide: 0, press: 0 };
            const progress = Math.min(1, step / steps);
            const factor = Math.pow(1 - progress, FADE_EASE_POW);
            const slide = Math.max(0, Math.round(t.slide * factor));
            const press = Math.max(0, Math.round(t.press * factor));
            state.midi.output.send([0xB0 + ch - 1, 74, slide]);
            state.midi.output.send([0xD0 + ch - 1, press]);
        });
        if (step >= steps) {
            clearInterval(state.fadeTimer);
            state.fadeTimer = null;
            setTimeout(() => {
                state.fadeState = { active: false, start: 0, durationMs: 0 };
                allNotesOff();
                els.midiStatus.innerText = 'FADE OUT';
            }, FADE_TAIL_MS);
        }
    }, intervalMs);
}

function mapMidiNoteToScale(note) {
    const def = getScaleDefinition();
    const degrees = def.degrees;
    const rel = note - def.root;
    const oct = Math.floor(rel / 12);
    let best = null;
    let bestDist = Infinity;
    for (let o = oct - 1; o <= oct + 1; o++) {
        const base = def.root + (o * 12);
        degrees.forEach(d => {
            const cand = base + d;
            const dist = Math.abs(cand - note);
            if (dist < bestDist) {
                bestDist = dist;
                best = cand;
            }
        });
    }
    return best == null ? note : best;
}

function computeChordNotes(rootNote) {
    const chordMode = els.chordMode.value;
    const rootIdx = state.scaleNotes.notes.indexOf(rootNote);
    let chordNotes = [];
    if (chordMode === 'auto' || chordMode === 'auto7') {
        const diatonic = chordMode === 'auto7' ? [0, 2, 4, 6] : [0, 2, 4];
        if (rootIdx >= 0) {
            chordNotes = diatonic.map(step => state.scaleNotes.notes[rootIdx + step]).filter(n => n !== undefined);
        }
    } else {
        const chordSteps = CHORDS[chordMode] || CHORDS.off;
        chordNotes = chordSteps.map(step => rootNote + step);
    }
    if (chordNotes.length) {
        const snapped = chordNotes.map(note => mapMidiNoteToScale(note));
        const seen = new Set();
        chordNotes = snapped.filter(note => {
            const key = Number.isFinite(note) ? note.toFixed(4) : String(note);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }
    const inversion = parseInt(els.chordInversion.value, 10) || 0;
    const spread = parseInt(els.chordSpread.value, 10) || 0;
    return applyChordVoicing(chordNotes, inversion, spread);
}

function refreshArpNotes(noteObjs, m, rootNote) {
    const chordNotes = computeChordNotes(rootNote);
    if (noteObjs.length > chordNotes.length) {
        const extra = noteObjs.splice(chordNotes.length);
        removeArpNotes(extra);
    } else if (noteObjs.length < chordNotes.length) {
        const add = chordNotes.slice(noteObjs.length).map(noteFloat => ({
            noteFloat,
            ...makeVoiceFromNote(noteFloat),
            lastM: m,
            color: nextArpColor()
        }));
        noteObjs.push(...add);
        state.arp.notes.push(...add);
    }
    for (let i = 0; i < chordNotes.length && i < noteObjs.length; i++) {
        const noteFloat = chordNotes[i];
        const voice = makeVoiceFromNote(noteFloat);
        noteObjs[i].noteFloat = noteFloat;
        noteObjs[i].note = voice.note;
        noteObjs[i].basePb = voice.basePb;
        noteObjs[i].lastM = m;
    }
    return chordNotes;
}

function convertHeldToArp() {
    if (!state.heldVoices.length) return;
    const held = state.heldVoices.slice(0);
    const noteObjs = held.map(v => {
        const noteFloat = getVoiceNoteFloat(v);
        const voice = makeVoiceFromNote(noteFloat);
        return { noteFloat, ...voice, lastM: v.lastM, color: v.color || nextArpColor() };
    });
    const lastM = held[0].lastM;
    const color = held[0].color || '#ffaa00';
    releaseHeldNotes();
    state.arp.notes = noteObjs;
    state.arpHoldTouches = [{ lastM, color, phase: 0, noteObjs }];
    requestDraw();
}

function updateHeldChords() {
    if (!state.heldVoices.length || !state.midi.output) return;
    const groups = new Map();
    state.heldVoices.forEach(v => {
        const groupId = v.group || v.chan || 0;
        if (!groups.has(groupId)) groups.set(groupId, []);
        groups.get(groupId).push(v);
    });
    const nextHeld = [];
    groups.forEach(list => {
        const ref = list[0];
        const rootNote = ref.rootNote;
        if (rootNote == null) {
            nextHeld.push(...list);
            return;
        }
        list.forEach(v => {
            sendMidi([0x80 + v.chan - 1, v.note, 0]);
            state.mpeChannels.push(v.chan);
        });
        state.mpeChannels.sort((a,b)=>a-b);
        const m = ref.lastM || { pbValue: 8192, slide: 0, press: 90 };
        const chordNotes = computeChordNotes(rootNote);
        chordNotes.forEach(noteFloat => {
            const chan = state.mpeChannels.shift();
            if (!chan) return;
            const voice = makeVoiceFromNote(noteFloat);
            const pb = getVoicePb(m, voice);
            sendMidi([0xB0 + chan - 1, 74, m.slide]);
            sendMidi([0xE0 + chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
            sendMidi([0xD0 + chan - 1, m.press]);
            sendMidi([0x90 + chan - 1, voice.note, Math.max(1, Math.min(127, Math.round(m.press || 90)))]);
            nextHeld.push({
                chan,
                note: voice.note,
                basePb: voice.basePb,
                lastM: m,
                color: ref.color,
                phase: ref.phase,
                group: ref.group || 0,
                rootNote
            });
        });
    });
    state.heldVoices = nextHeld;
}

canvas.addEventListener('pointerdown', e => {
    e.preventDefault();
    requestDraw();
    // Add note-dragging class to prevent UI button interference
    document.body.classList.add('note-dragging');
    if (state.audio.enabled) resumeAudioContext().then(updateAudioStatus);
    const uiRect = els.ui.getBoundingClientRect();
    const inUi = els.ui.contains(e.target);
    if (!state.midi.output || (els.ui.classList.contains('active') && e.clientY < (uiRect.height + 5)) || inUi) {
        if (!state.midi.output) els.midiStatus.innerText = 'NESSUN MIDI OUT';
        document.body.classList.remove('note-dragging');
        return;
    }
    if (state.groupShiftEnabled) {
        startGroupShiftDrag(e);
        return;
    }
    if (tryStartTwoFingerGroupDrag(e)) return;

    // BOW FADER INTERACTION
    // Check if touch is in bottom 60px of canvas (Only if audio enabled/bow visible)
    const canvasY = e.clientY - state.canvasRect.top;
    const canvasH = state.canvasRect.height;
    if (state.audio.enabled && canvasY > canvasH - 60) {
        // Collect active notes to check against
        const targets = [];
        state.heldVoices.forEach(v => targets.push(v));
        state.activeTouches.forEach(t => { 
            if (t.voices) t.voices.forEach(v => targets.push(v)); 
        });

        const numOct = parseInt(els.visibleOctaves.value, 10);
        const grid = getGridDegrees();
        const noteW = state.canvasRect.width / (numOct * grid.stepsPerOct);
        const touchX = e.clientX - state.canvasRect.left;

        for (const v of targets) {
            const noteFloat = getVoiceNoteFloat(v);
            const nx = getNearestNoteX(noteFloat);
            if (nx != null) {
                // Check bounds: nx is center. width is noteW.
                const minX = nx - noteW/2;
                const maxX = nx + noteW/2;
                if (touchX >= minX && touchX <= maxX) {
                    // HIT FADER
                    const relative = (touchX - minX) / noteW; // 0..1
                    // INVERTED LOGIC: Left = Slow/Soft (4s), Right = Fast/Intense (0.01s)
                    const attack = Math.max(0.01, (1.0 - relative) * 4.0); 
                    triggerBow(v, attack);
                    return; // Eat event
                }
            }
        }
    }

    const holdHit = findHeldVoiceAt(e.clientX, e.clientY);
    if (holdHit) {
        const hv = state.heldVoices[holdHit.idx];
        if (state.audio.bowMode) {
            triggerBow(hv);
            return;
        }
        if (hv?.dropActive) return;
        const tapKey = `${hv.chan}:${hv.note}`;
        if (isDoubleTapKey(tapKey, e.clientX, e.clientY)) {
            startHoldDrop(hv);
            return;
        }
        const groupId = hv.group || 0;
        const grabbed = [hv];
        state.heldVoices = state.heldVoices.filter(v => !grabbed.includes(v));
        // FIX: Usa la nota effettiva del cerchio (incluso basePb) invece di rootNote
        // per evitare che la prima interazione su note slave produca un pitch sbagliato
        const voiceNoteFloat = getVoiceNoteFloat(hv);
        const tmpVoice = { initialExact: voiceNoteFloat, lastX: e.clientX, vibratoSpeed: 0 };
        const m = getMPEData(e, tmpVoice);
        grabbed.forEach(gv => {
            const pb = getVoicePb(m, gv);
            sendMidi([0xE0 + gv.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
            sendMidi([0xB0 + gv.chan - 1, 74, m.slide]);
            sendMidi([0xD0 + gv.chan - 1, m.press]);
        });
        state.activeTouches.set(e.pointerId, { 
            voices: grabbed.map(gv => ({ chan: gv.chan, note: gv.note, basePb: gv.basePb, group: gv.group })), 
            initialExact: voiceNoteFloat, lastX: e.clientX, isGrab: false, isHoldGrab: true, holdGroup: groupId,
            vibratoSpeed: 0, phase: hv.phase || 0, color: hv.color, lastM: m, rootNote: hv.rootNote
        });
        if (groupId) {
            const existingEntry = Array.from(state.activeTouches.entries()).find(([id, t]) => t.isHoldGrab && t.holdGroup === groupId && id !== e.pointerId);
            const existing = existingEntry ? existingEntry[1] : null;
            if (existing) {
                const key = getGroupDragKey('hold', groupId);
                startHoldGroupDrag(groupId);
                const cur = state.activeTouches.get(e.pointerId);
                existing.isGroupDrag = true;
                existing.groupDragKey = key;
                if (cur) {
                    cur.isGroupDrag = true;
                    cur.groupDragKey = key;
                }
            }
        }
        return;
    }
    const arpNoteHit = findArpHoldNoteAt(e.clientX, e.clientY);
    if (arpNoteHit) {
        const hold = state.arpHoldTouches[arpNoteHit.holdIdx];
        const noteObj = hold.noteObjs[arpNoteHit.noteIdx];
        if (noteObj?.dropActive) return;
        if (isDoubleTap(noteObj, e.clientX, e.clientY)) {
            startArpHoldDrop(hold, noteObj);
            return;
        }
        const tmpVoice = { initialExact: noteObj.noteFloat ?? noteObj.note, lastX: e.clientX, vibratoSpeed: 0 };
        const m = getMPEData(e, tmpVoice);
        state.activeTouches.set(e.pointerId, { 
            voices: [],
            initialExact: noteObj.noteFloat ?? noteObj.note,
            lastX: e.clientX,
            isGrab: false,
            isArpHoldGrab: true,
            holdIdx: arpNoteHit.holdIdx,
            arpNoteIdx: arpNoteHit.noteIdx,
            arpNoteObj: noteObj,
            vibratoSpeed: 0,
            phase: hold.phase || 0,
            color: noteObj.color || hold.color || '#ffaa00',
            lastM: m
        });
        const existingEntry = Array.from(state.activeTouches.entries()).find(([id, t]) => t.isArpHoldGrab && t.holdIdx === arpNoteHit.holdIdx && id !== e.pointerId);
        const existing = existingEntry ? existingEntry[1] : null;
        if (existing) {
            const key = getGroupDragKey('arp', arpNoteHit.holdIdx);
            startArpGroupDrag(arpNoteHit.holdIdx);
            const cur = state.activeTouches.get(e.pointerId);
            existing.isGroupDrag = true;
            existing.groupDragKey = key;
            if (cur) {
                cur.isGroupDrag = true;
                cur.groupDragKey = key;
            }
        }
        return;
    }
    const arpHoldHit = findArpHoldAt(e.clientX, e.clientY);
    if (arpHoldHit) {
        const hold = state.arpHoldTouches[arpHoldHit.idx];
        const tmpVoice = { initialExact: hold.lastM?.exact ?? 0, lastX: e.clientX, vibratoSpeed: 0 };
        const m = getMPEData(e, tmpVoice);
        state.activeTouches.set(e.pointerId, { 
            voices: [],
            initialExact: hold.lastM?.exact ?? 0,
            lastX: e.clientX,
            isGrab: false,
            isArpHoldGrab: true,
            holdIdx: arpHoldHit.idx,
            vibratoSpeed: 0,
            phase: hold.phase || 0,
            color: hold.color || '#ffaa00',
            lastM: m
        });
        return;
    }

    const touchState = { smoothPb: null, smoothSlide: null, smoothPress: null };
    const m = applySmoothing(touchState, getMPEData(e));

    // STANDALONE: Produzione suono diretta
    const root = parseInt(els.rootNote.value, 10);
    const def = getScaleDefinition();
    const scaleKey = `${def.mode}:${def.name}`;
    if (!state.scaleNotes.notes.length || state.scaleNotes.root !== root || state.scaleNotes.scale !== scaleKey) {
        updateScaleNotes();
    }
    const rootNote = state.scaleNotes.notes.reduce((prev, curr) => Math.abs(curr - m.exact) < Math.abs(prev - m.exact) ? curr : prev);
    const touchColor = `hsl(${(e.pointerId * 47) % 360}, 85%, 55%)`;

    // AUTO-GRAB: Se tocchi una nota gia' attiva fisicamente
    if (state.physicalNotes.has(rootNote)) {
        const list = state.physicalNotes.get(rootNote);
        const pNote = list.find(d => !d.grabbed);
        if (pNote) {
            pNote.grabbed = true;
            state.activeTouches.set(e.pointerId, { 
                voices: [{ chan: pNote.chan, note: rootNote }], 
                initialExact: rootNote, lastX: e.clientX, isGrab: true,
                vibratoSpeed: 0, phase: 0, color: '#00ff44', lastM: m 
            });
            return;
        }
    }

    let voices = [];
    let chordNotes = computeChordNotes(rootNote);
    if (!chordNotes.length) return;
    if (state.arp.enabled && !state.arp.latch) {
        const noteObjs = chordNotes.map(noteFloat => ({
            noteFloat,
            ...makeVoiceFromNote(noteFloat),
            lastM: m,
            color: nextArpColor()
        }));
        state.arp.notes.push(...noteObjs);
        state.activeTouches.set(e.pointerId, {
            voices: noteObjs.map(n => ({ chan: 0, note: n.note, basePb: n.basePb })),
            arpNotes: noteObjs,
            initialExact: rootNote,
            lastX: e.clientX,
            isGrab: false,
            isArp: true,
            vibratoSpeed: 0,
            phase: 0,
            color: touchColor,
            lastM: m,
            smoothPb: touchState.smoothPb,
            smoothSlide: touchState.smoothSlide,
            smoothPress: touchState.smoothPress
        });
        return;
    }
    for(let i=0; i<chordNotes.length; i++) {
        const chan = state.mpeChannels.shift();
        if(chan) {
            const voice = makeVoiceFromNote(chordNotes[i]);
            const pb = getVoicePb(m, voice);
            // FIX: Usa ?? 90 invece di || 90 per permettere velocity/pressure pari a 0
            const rawPress = m.press ?? 90;
            const vel = Math.max(1, Math.min(127, Math.round(rawPress)));
            
            sendMidi([0xB0 + chan - 1, 74, m.slide]);
            sendMidi([0xE0 + chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
            // FIX: Invia Channel Pressure PRIMA del NoteOn per inizializzare correttamente il volume del synth interno
            sendMidi([0xD0 + chan - 1, rawPress]);
            sendMidi([0x90 + chan - 1, voice.note, vel]);
            markLocalNoteOn(voice.note);
            voices.push({ chan, note: voice.note, basePb: voice.basePb });
        } else {
            els.midiStatus.innerText = 'MPE CHANNELS FULL';
        }
    }
    if (!voices.length) return;
    state.activeTouches.set(e.pointerId, { voices, initialExact: rootNote, lastX: e.clientX, isGrab: false, vibratoSpeed: 0, phase: 0, color: `hsl(${voices[0]?.chan * 25 || 0}, 85%, 55%)`, lastM: m, smoothPb: touchState.smoothPb, smoothSlide: touchState.smoothSlide, smoothPress: touchState.smoothPress });
});

canvas.addEventListener('pointermove', e => {
    const t = state.activeTouches.get(e.pointerId);
    if (!t || !state.midi.output) return;
    requestDraw();
    t.lastX = e.clientX;
    t.lastM = t.lastM ? { ...t.lastM, x: e.clientX, y: e.clientY } : { x: e.clientX, y: e.clientY, press: 0, slide: 0, pbValue: 8192, exact: t.initialExact ?? 0 };
    if (t.isGroupDrag) {
        handleGroupDrag(t);
        return;
    }
    const m = applySmoothing(t, getMPEData(e, t));
    t.lastM = m;
    if (t.isArpHoldGrab) {
        const hold = state.arpHoldTouches[t.holdIdx];
        if (hold) {
            if (t.arpNoteObj) {
                const root = parseInt(els.rootNote.value, 10);
                const def = getScaleDefinition();
                const scaleKey = `${def.mode}:${def.name}`;
                if (!state.scaleNotes.notes.length || state.scaleNotes.root !== root || state.scaleNotes.scale !== scaleKey) {
                    updateScaleNotes();
                }
                const rootNote = state.scaleNotes.notes.reduce((prev, curr) => Math.abs(curr - m.exact) < Math.abs(prev - m.exact) ? curr : prev);
                const voice = makeVoiceFromNote(rootNote);
                t.arpNoteObj.noteFloat = rootNote;
                t.arpNoteObj.note = voice.note;
                t.arpNoteObj.basePb = voice.basePb;
                t.arpNoteObj.lastM = m;
                t.initialExact = rootNote;
                if (m.press <= 0) stopArpActiveNote(t.arpNoteObj.note);
            } else {
                const root = parseInt(els.rootNote.value, 10);
                const def = getScaleDefinition();
                const scaleKey = `${def.mode}:${def.name}`;
                if (!state.scaleNotes.notes.length || state.scaleNotes.root !== root || state.scaleNotes.scale !== scaleKey) {
                    updateScaleNotes();
                }
                const rootNote = state.scaleNotes.notes.reduce((prev, curr) => Math.abs(curr - m.exact) < Math.abs(prev - m.exact) ? curr : prev);
                if (hold.noteObjs) {
                    refreshArpNotes(hold.noteObjs, m, rootNote);
                }
                const pbRange = parseInt(els.pbRange.value, 10) || 12;
                const detune = m.exact - rootNote;
                m.pbValue = clampPb(Math.round(8192 + (detune * (8192 / pbRange))));
                t.initialExact = rootNote;
                hold.lastM = m;
                hold.phase = t.phase;
                hold.color = hold.noteObjs?.[0]?.color || t.color;
                if (m.press <= 0) stopArpActiveNotes(hold.noteObjs);
            }
        }
        return;
    }
    if (t.isArp) {
        if (t.arpNotes) {
            const root = parseInt(els.rootNote.value, 10);
            const def = getScaleDefinition();
            const scaleKey = `${def.mode}:${def.name}`;
            if (!state.scaleNotes.notes.length || state.scaleNotes.root !== root || state.scaleNotes.scale !== scaleKey) {
                updateScaleNotes();
            }
            const rootNote = state.scaleNotes.notes.reduce((prev, curr) => Math.abs(curr - m.exact) < Math.abs(prev - m.exact) ? curr : prev);
            refreshArpNotes(t.arpNotes, m, rootNote);
            const pbRange = parseInt(els.pbRange.value, 10) || 12;
            const detune = m.exact - rootNote;
            m.pbValue = clampPb(Math.round(8192 + (detune * (8192 / pbRange))));
            t.initialExact = rootNote;
            if (m.press <= 0) stopArpActiveNotes(t.arpNotes);
        }
        return;
    }
    t.voices.forEach(v => {
        const pb = getVoicePb(m, v);
        sendMidi([0xE0 + v.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
        sendMidi([0xB0 + v.chan - 1, 74, m.slide]);
        sendMidi([0xD0 + v.chan - 1, m.press]);
    });
});

canvas.addEventListener('pointerup', e => {
    const t = state.activeTouches.get(e.pointerId);
    if (t) {
        requestDraw();
        const groupKey = t.groupDragKey;
        const hold = els.holdNotes.checked;
        if (t.isArpHoldGrab) {
            const item = state.arpHoldTouches[t.holdIdx];
            if (item) {
                if (t.arpNoteObj) {
                    t.arpNoteObj.lastM = t.lastM;
                } else {
                    item.lastM = t.lastM;
                }
                item.phase = t.phase;
                item.color = item.noteObjs?.[0]?.color || t.color;
            }
            state.activeTouches.delete(e.pointerId);
            cleanupGroupDrag(groupKey);
            return;
        }
        // FIX: Avoid double-quantization if Hold is active (snapHoldVoicesToScale handles it)
        if (!t.isGrab && !t.isArp && els.quantizeRelease.checked && !hold) {
            const snapM = getMPEData(e, t, true);
            t.lastM = snapM;
            t.voices.forEach(v => {
                const pb = getVoicePb(snapM, v);
                sendMidi([0xE0 + v.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
                sendMidi([0xB0 + v.chan - 1, 74, snapM.slide]);
                sendMidi([0xD0 + v.chan - 1, snapM.press]);
            });
        }
        if (t.isArp) {
            const keep = hold;
            if (!keep) {
                stopArpActiveNotes(t.arpNotes);
                removeArpNotes(t.arpNotes);
            } else {
                const holdColor = t.arpNotes?.[0]?.color || t.color;
                state.arpHoldTouches.push({ lastM: t.lastM, color: holdColor, phase: t.phase || 0, noteObjs: t.arpNotes });
            }
            state.activeTouches.delete(e.pointerId);
            cleanupGroupDrag(groupKey);
            return;
        }
        if (t.isHoldGrab) {
            if (hold) {
                snapHoldVoicesToScale(t);
                const groupId = t.holdGroup || state.holdGroupSeq++;
                t.voices.forEach(v => {
                    state.heldVoices.push({ chan: v.chan, note: v.note, basePb: v.basePb, lastM: t.lastM, color: t.color, phase: t.phase, group: groupId, rootNote: t.rootNote ?? t.initialExact });
                });
            } else {
                t.voices.forEach(v => {
                    sendMidi([0x80 + v.chan - 1, v.note, 0]);
                    state.mpeChannels.push(v.chan);
                });
            }
            state.mpeChannels.sort((a,b)=>a-b);
            state.activeTouches.delete(e.pointerId);
            cleanupGroupDrag(groupKey);
            return;
        }
        if (!t.isGrab && hold) {
            snapHoldVoicesToScale(t);
        }
        t.voices.forEach(v => {
            if(!t.isGrab) {
                if (hold) {
                    const groupId = t.holdGroup || state.holdGroupSeq++;
                    sendMidi([0xB0 + v.chan - 1, 74, t.lastM.slide]);
                    sendMidi([0xD0 + v.chan - 1, t.lastM.press]);
                    state.heldVoices.push({ chan: v.chan, note: v.note, basePb: v.basePb, lastM: t.lastM, color: t.color, phase: t.phase, group: groupId, rootNote: t.initialExact });
                    t.holdGroup = groupId;
                } else {
                    sendMidi([0x80 + v.chan - 1, v.note, 0]);
                    state.mpeChannels.push(v.chan);
                }
            } else {
                if (state.physicalNotes.has(v.note)) {
                    const list = state.physicalNotes.get(v.note);
                    const pNote = list.find(d => d.chan === v.chan);
                    if (pNote) {
                        pNote.grabbed = false;
                        const pb = pNote.lastPb || 8192;
                        sendMidi([0xE0 + v.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
                        sendMidi([0xB0 + v.chan - 1, 74, pNote.lastSlide || 0]);
                        sendMidi([0xD0 + v.chan - 1, pNote.lastPress || 0]);
                    }
                }
            }
        });
        if (!hold) state.mpeChannels.sort((a,b)=>a-b);
        state.activeTouches.delete(e.pointerId);
        cleanupGroupDrag(groupKey);
    }
    // Remove note-dragging class when no more active touches
    if (state.activeTouches.size === 0) {
        document.body.classList.remove('note-dragging');
    }
    if (state.audio.enabled && state.audio.wavetable.mode !== 'sampler' && state.activeTouches.size === 0 && !els.holdNotes.checked) {
        stopAllVoicesInternal();
    }
});

function cancelActivePointer(pointerId) {
    const t = state.activeTouches.get(pointerId);
    if (!t) return;
    const groupKey = t.groupDragKey;
    if (t.isArp) {
        const keep = els.holdNotes.checked;
        if (!keep) removeArpNotes(t.arpNotes);
        state.activeTouches.delete(pointerId);
        cleanupGroupDrag(groupKey);
        return;
    }
    if (!state.midi.output) {
        state.activeTouches.delete(pointerId);
        cleanupGroupDrag(groupKey);
        return;
    }
    t.voices.forEach(v => {
        sendMidi([0x80 + v.chan - 1, v.note, 0]);
        state.mpeChannels.push(v.chan);
    });
    state.mpeChannels.sort((a,b)=>a-b);
    state.activeTouches.delete(pointerId);
    cleanupGroupDrag(groupKey);
    // Remove note-dragging class when no more active touches
    if (state.activeTouches.size === 0) {
        document.body.classList.remove('note-dragging');
    }
    if (state.audio.enabled && state.audio.wavetable.mode !== 'sampler' && state.activeTouches.size === 0 && !els.holdNotes.checked) {
        stopAllVoicesInternal();
    }
}

canvas.addEventListener('pointercancel', e => cancelActivePointer(e.pointerId));
canvas.addEventListener('pointerleave', e => cancelActivePointer(e.pointerId));

const uiToggle = document.getElementById('uiToggle');
const perfToggle = document.getElementById('perfToggle');
 

function setupChordKnob() {
    const select = els.chordMode;
    const wheel = els.chordWheel;
    const options = Array.from(select.options);
    let currentIndex = Math.max(0, options.findIndex(o => o.value === select.value));
    let lastModeValue = select.value !== 'off' ? select.value : 'triad';
    let lastAngle = null;
    let angleAccum = 0;
    let didRotate = false;
    const stepAngle = 30;

    function applyIndex(idx) {
        currentIndex = Math.max(0, Math.min(options.length - 1, idx));
        select.selectedIndex = currentIndex;
        const isOn = select.value !== 'off';
        if (isOn) lastModeValue = select.value;
        wheel.innerText = options[currentIndex].text;
        wheel.classList.toggle('knob-on', isOn);
        wheel.classList.toggle('knob-off', !isOn);
    }

    select.addEventListener('change', () => {
        applyIndex(select.selectedIndex);
        updateHeldChords();
    });

    function toggleChord() {
        if (select.value === 'off') {
            const idx = Math.max(0, options.findIndex(o => o.value === lastModeValue));
            applyIndex(idx);
        } else {
            applyIndex(0);
        }
        updateHeldChords();
    }

    function angleFromEvent(e) {
        const rect = wheel.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        return Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    }

    function stepBy(delta) {
        let nextIdx = currentIndex + delta;
        if (nextIdx < 0) nextIdx = options.length - 1;
        if (nextIdx >= options.length) nextIdx = 0;
        if (options[nextIdx].value === 'off') {
            nextIdx = delta > 0 ? (nextIdx + 1) % options.length : (nextIdx - 1 + options.length) % options.length;
        }
        didRotate = true;
        applyIndex(nextIdx);
        updateHeldChords();
    }

    wheel.addEventListener('pointerdown', e => {
        e.preventDefault();
        requestDraw();
        wheel.setPointerCapture(e.pointerId);
        lastAngle = angleFromEvent(e);
        angleAccum = 0;
        didRotate = false;
        wheel.classList.add('active');
    });
    wheel.addEventListener('pointermove', e => {
        if (lastAngle == null) return;
        requestDraw();
        const ang = angleFromEvent(e);
        let delta = ang - lastAngle;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        angleAccum += delta;
        lastAngle = ang;
        while (angleAccum >= stepAngle) {
            stepBy(1);
            angleAccum -= stepAngle;
        }
        while (angleAccum <= -stepAngle) {
            stepBy(-1);
            angleAccum += stepAngle;
        }
    });
    wheel.addEventListener('pointerup', e => {
        wheel.releasePointerCapture(e.pointerId);
        lastAngle = null;
        angleAccum = 0;
        if (!didRotate) toggleChord();
        wheel.classList.toggle('knob-on', select.value !== 'off');
        wheel.classList.toggle('knob-off', select.value === 'off');
        requestDraw();
    });
    wheel.addEventListener('pointercancel', () => {
        lastAngle = null;
        angleAccum = 0;
        wheel.classList.toggle('knob-on', select.value !== 'off');
        wheel.classList.toggle('knob-off', select.value === 'off');
    });
    applyIndex(currentIndex);
}

function setupArpKnob() {
    const select = els.arpRate;
    const wheel = els.arpWheel;
    const options = Array.from(select.options);
    let currentIndex = Math.max(0, options.findIndex(o => o.value === select.value));
    let lastAngle = null;
    let angleAccum = 0;
    let didRotate = false;
    const stepAngle = 30;

    function applyIndex(idx) {
        currentIndex = Math.max(0, Math.min(options.length - 1, idx));
        select.selectedIndex = currentIndex;
        // Sync visible arpRateSelect
        if (els.arpRateSelect) els.arpRateSelect.value = select.value;
        updateArpControlsUI();
        syncArpFromUI();
    }

    select.addEventListener('change', () => {
        currentIndex = select.selectedIndex;
        // Sync visible arpRateSelect
        if (els.arpRateSelect) els.arpRateSelect.value = select.value;
        updateArpControlsUI();
    });

    function toggleArp() {
        els.arpEnabled.checked = !els.arpEnabled.checked;
        syncArpFromUI();
    }

    function angleFromEvent(e) {
        const rect = wheel.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        return Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    }

    function stepBy(delta) {
        let nextIdx = currentIndex + delta;
        if (nextIdx < 0) nextIdx = options.length - 1;
        if (nextIdx >= options.length) nextIdx = 0;
        didRotate = true;
        applyIndex(nextIdx);
    }

    wheel.addEventListener('pointerdown', e => {
        e.preventDefault();
        requestDraw();
        wheel.setPointerCapture(e.pointerId);
        lastAngle = angleFromEvent(e);
        angleAccum = 0;
        didRotate = false;
        wheel.classList.add('active');
    });
    wheel.addEventListener('pointermove', e => {
        if (lastAngle == null) return;
        requestDraw();
        const ang = angleFromEvent(e);
        let delta = ang - lastAngle;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        angleAccum += delta;
        lastAngle = ang;
        while (angleAccum >= stepAngle) {
            stepBy(1);
            angleAccum -= stepAngle;
        }
        while (angleAccum <= -stepAngle) {
            stepBy(-1);
            angleAccum += stepAngle;
        }
    });
    wheel.addEventListener('pointerup', e => {
        wheel.releasePointerCapture(e.pointerId);
        lastAngle = null;
        angleAccum = 0;
        if (!didRotate) toggleArp();
        wheel.classList.toggle('knob-on', els.arpEnabled.checked);
        wheel.classList.toggle('knob-off', !els.arpEnabled.checked);
        requestDraw();
    });
    wheel.addEventListener('pointercancel', () => {
        lastAngle = null;
        angleAccum = 0;
        wheel.classList.toggle('knob-on', els.arpEnabled.checked);
        wheel.classList.toggle('knob-off', !els.arpEnabled.checked);
    });
    updateArpControlsUI();
}

function setupLoopKnob() {
    const wheel = els.loopWheel;
    if (!wheel) return;
    let lastAngle = null;
    let angleAccum = 0;
    let didRotate = false;
    const stepAngle = 15; // More sensitive for percentage
    const stepVal = 0.05; // 5% per step

    function toggleLoop() {
        state.audio.loopGlobal = !state.audio.loopGlobal;
        if (state.audio.loopGlobal && state.audio.loopVariation === undefined) {
            state.audio.loopVariation = 0;
        }
        updateLoopKnobUI();
        state.audio.voices.forEach(v => {
            if (v.source) {
                let baseLoop = false;
                if (v.sampleRoot != null) {
                    const s = state.audio.samples.find(s => s.root === v.sampleRoot);
                    if (s) baseLoop = !!s.loop;
                }
                v.source.loop = baseLoop || state.audio.loopGlobal;
            }
        });
    }

    function stepBy(delta) {
        if (!state.audio.loopGlobal) return;
        let val = state.audio.loopVariation || 0;
        val = Math.max(0, Math.min(1, val + (delta * stepVal)));
        state.audio.loopVariation = val;
        didRotate = true;
        updateLoopKnobUI();
    }

    function angleFromEvent(e) {
        const rect = wheel.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        return Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    }

    wheel.addEventListener('pointerdown', e => {
        e.preventDefault();
        requestDraw();
        wheel.setPointerCapture(e.pointerId);
        lastAngle = angleFromEvent(e);
        angleAccum = 0;
        didRotate = false;
        wheel.classList.add('active');
    });

    wheel.addEventListener('pointermove', e => {
        if (lastAngle == null) return;
        requestDraw();
        const ang = angleFromEvent(e);
        let delta = ang - lastAngle;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        angleAccum += delta;
        lastAngle = ang;
        // Logic: if loop is OFF, ignore drag or use it to turn ON? 
        // Better: require logic that scrolling makes sense only if enabled or implicitly enables.
        // Let's say drag DOES nothing if off, forcing click first? 
        // Or drag enables it implicitly? The user said "Click: Toggle".
        if (state.audio.loopGlobal) {
            while (angleAccum >= stepAngle) {
                stepBy(1);
                angleAccum -= stepAngle;
            }
            while (angleAccum <= -stepAngle) {
                stepBy(-1);
                angleAccum += stepAngle;
            }
        }
    });

    wheel.addEventListener('pointerup', e => {
        wheel.releasePointerCapture(e.pointerId);
        lastAngle = null;
        angleAccum = 0;
        if (!didRotate) toggleLoop();
        wheel.classList.remove('active');
        requestDraw();
    });

    updateLoopKnobUI();
}

function findHeldVoiceAt(x, y) {
    for (let i = state.heldVoices.length - 1; i >= 0; i--) {
        const m = state.heldVoices[i].lastM;
        if (!m) continue;
        const radius = 12 + (m.press / 127) * 22;
        const noteFloat = getVoiceNoteFloat(state.heldVoices[i]);
        const px = getNearestNoteX(noteFloat) ?? m.x;
        const py = m.y;
        const dx = x - px;
        const dy = y - py;
        if ((dx * dx + dy * dy) <= ((radius + 10) * (radius + 10))) {
            return { idx: i };
        }
    }
    return null;
}

function findArpHoldNoteAt(x, y) {
    for (let i = state.arpHoldTouches.length - 1; i >= 0; i--) {
        const hold = state.arpHoldTouches[i];
        if (!hold || !hold.noteObjs) continue;
        for (let n = hold.noteObjs.length - 1; n >= 0; n--) {
            const noteObj = hold.noteObjs[n];
            const m = noteObj.lastM || hold.lastM;
            if (!m) continue;
            const radius = 10 + (m.press / 127) * 18;
            const px = getNearestNoteX(noteObj.noteFloat ?? noteObj.note) ?? m.x;
            const py = m.y;
            const dx = x - px;
            const dy = y - py;
            if ((dx * dx + dy * dy) <= ((radius + 10) * (radius + 10))) {
                return { holdIdx: i, noteIdx: n };
            }
        }
    }
    return null;
}

function findArpHoldAt(x, y) {
    for (let i = state.arpHoldTouches.length - 1; i >= 0; i--) {
        const m = state.arpHoldTouches[i].lastM;
        if (!m) continue;
        const radius = 10 + (m.press / 127) * 18;
        const dx = x - m.x;
        const dy = y - m.y;
        if ((dx * dx + dy * dy) <= ((radius + 10) * (radius + 10))) {
            return { idx: i };
        }
    }
    return null;
}

state.presets = loadPresets();
state.mpePresets = loadMpePresets();
state.customScales = loadCustomScales();
if (!Object.keys(state.presets).length) {
    const base = getPresetState();
    state.presets = {
        Init: base,
        Ableton: {
            ...base,
            arpSync: 'midi',
            smoothAmt: '20',
            curveType: 'soft',
            yDeadzone: '5',
            arpLatch: false,
            quantizeRelease: true
        },
        Expressive: {
            ...base,
            roundRate: '10',
            deadCenter: false,
            deadCenterForce: '30',
            smoothAmt: '10',
            curveType: 'linear',
            yDeadzone: '2',
            quantizeRelease: false
        },
        Tight: {
            ...base,
            roundRate: '80',
            deadCenter: true,
            deadCenterForce: '100',
            smoothAmt: '35',
            curveType: 'soft',
            yDeadzone: '8',
            quantizeRelease: true
        },
        Glide: {
            ...base,
            roundRate: '0',
            deadCenter: false,
            deadCenterForce: '0',
            smoothAmt: '5',
            curveType: 'linear',
            yDeadzone: '0',
            quantizeRelease: false
        }
    };
}
savePresets(state.presets);
refreshPresetSelect(state.presets, 'Init');
if (!Object.keys(state.mpePresets).length) {
    const mpeBase = getMpePresetState();
    state.mpePresets = {
        Expressive: { ...mpeBase, roundRate: '10', deadCenter: false, deadCenterForce: '30', smoothAmt: '10', curveType: 'linear', yDeadzone: '2', quantizeRelease: false },
        Tight: { ...mpeBase, roundRate: '80', deadCenter: true, deadCenterForce: '100', smoothAmt: '35', curveType: 'soft', yDeadzone: '8', quantizeRelease: true },
        Glide: { ...mpeBase, roundRate: '0', deadCenter: false, deadCenterForce: '0', smoothAmt: '5', curveType: 'linear', yDeadzone: '0', quantizeRelease: false }
    };
}
saveMpePresets(state.mpePresets);
refreshMpePresetSelect(state.mpePresets, 'Tight');
populateMicrotonalSelect();
state.customScales = { ...DEFAULT_CUSTOM_SCALES, ...state.customScales };
saveCustomScales(state.customScales);
const firstCustom = Object.keys(state.customScales)[0];
els.customScaleName.value = firstCustom || '';
loadCustomScaleByName(firstCustom);
refreshCustomScaleDatalist();
function bindUI() {
    els.presetSelect.onchange = e => {
        const presetState = state.presets[e.target.value];
        applyPresetState(presetState);
        updatePresetDescription(e.target.value);
    };
    els.presetSave.onclick = () => {
        const name = els.presetName.value.trim() || els.presetSelect.value || 'Preset';
        state.presets[name] = getPresetState();
        savePresets(state.presets);
        refreshPresetSelect(state.presets, name);
        updatePresetDescription(name);
    };
    els.presetDel.onclick = () => {
        const sel = els.presetSelect.value;
        if (sel && sel !== 'Init') {
            delete state.presets[sel];
            savePresets(state.presets);
            refreshPresetSelect(state.presets, 'Init');
            applyPresetState(state.presets.Init);
            updatePresetDescription('Init');
        }
    };
    els.mpePresetSelect.onchange = e => {
        const mpePresetState = state.mpePresets[e.target.value];
        applyMpePresetState(mpePresetState);
        updateMpePresetDescription(e.target.value);
    };
    els.mpePresetSave.onclick = () => {
        const name = els.mpePresetName.value.trim() || els.mpePresetSelect.value || 'MPE Preset';
        state.mpePresets[name] = getMpePresetState();
        saveMpePresets(state.mpePresets);
        refreshMpePresetSelect(state.mpePresets, name);
        updateMpePresetDescription(name);
    };
    els.mpePresetDel.onclick = () => {
        const sel = els.mpePresetSelect.value;
        if (sel) {
            delete state.mpePresets[sel];
            saveMpePresets(state.mpePresets);
            refreshMpePresetSelect(state.mpePresets, 'Tight');
        }
    };
    els.customScaleSave.onclick = () => {
        const name = els.customScaleName.value.trim();
        if (!name) return;
        if (els.customModeNotes.checked) {
            const degrees = parseNotesList(els.customScaleNotes.value);
            if (degrees.length < 2) return;
            state.customScales[name] = { type: 'notes', degrees };
        } else {
            const cents = parseCentsList(els.customScaleCents.value);
            if (cents.length < 2) return;
            state.customScales[name] = { type: 'cents', cents };
        }
        saveCustomScales(state.customScales);
        els.scaleModeCustom.checked = true;
        els.customScaleName.value = name;
        refreshCustomScaleDatalist();
        updateScaleModeUI();
        updateScaleNotes();
    };
    els.customScaleDel.onclick = () => {
        const sel = els.customScaleName.value.trim();
        if (sel) {
            delete state.customScales[sel];
            saveCustomScales(state.customScales);
            const next = Object.keys(state.customScales)[0] || '';
            els.customScaleName.value = next;
            if (next) loadCustomScaleByName(next);
            else els.customScaleCents.value = '';
            refreshCustomScaleDatalist();
            updateScaleNotes();
        }
    };
    if (uiToggle) {
        uiToggle.onclick = () => {
            els.ui.classList.toggle('active');
            refreshLayout();
        };
    }
    if (els.uiAdvancedToggle) {
        els.uiAdvancedToggle.onclick = () => {
            els.ui.classList.toggle('show-advanced');
            refreshLayout();
        };
    }
    perfToggle.onclick = () => {
        els.performance.classList.toggle('collapsed');
        refreshLayout();
    };
    els.fsBtn.onclick = () => {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
    };
    els.octDownBtn.onclick = () => changeOctave(-1);
    els.octUpBtn.onclick = () => changeOctave(1);
    els.holdBtn.onclick = () => {
        const hold = els.holdNotes;
        hold.checked = !hold.checked;
        updateHoldButtonUI();
        if (!hold.checked) {
            releaseHeldNotes();
            if (state.groupShiftEnabled) {
                state.groupShiftEnabled = false;
                updateGroupShiftUI();
            }
        }
    };
    els.pbRange.onchange = e => setPitchBendRange(parseInt(e.target.value, 10));
    els.holdNotes.onchange = e => {
        updateHoldButtonUI();
        if (!e.target.checked) {
            releaseHeldNotes();
            if (state.groupShiftEnabled) {
                state.groupShiftEnabled = false;
                updateGroupShiftUI();
            }
        }
    };
    els.panicBtn.onclick = () => {
        if (state.groupShiftEnabled) {
            state.groupShiftEnabled = false;
            updateGroupShiftUI();
        }
        allNotesOff();
        els.midiStatus.innerText = 'STOP';
    };
    els.fadeBtn.onclick = () => {
        if (state.groupShiftEnabled) {
            state.groupShiftEnabled = false;
            updateGroupShiftUI();
        }
        fadeOutAll();
    };
    els.arpEnabled.onchange = syncArpFromUI;
    els.arpRate.onchange = syncArpFromUI;
    // ARP Rate select dropdown (visible in performance bar)
    if (els.arpRateSelect) {
        els.arpRateSelect.onchange = () => {
            if (els.arpRate) els.arpRate.value = els.arpRateSelect.value;
            syncArpFromUI();
        };
    }
    els.arpGate.onchange = syncArpFromUI;
    els.arpSync.onchange = syncArpFromUI;
    els.arpBpm.onchange = syncArpFromUI;
    els.arpLatch.onchange = syncArpFromUI;
    if (els.arpParamsToggle && els.arpParamsPanel) {
        els.arpParamsToggle.onclick = () => {
            els.arpParamsPanel.classList.toggle('hidden');
            updateArpParamsToggleLabel();
        };
    }
    els.groupShiftBtn.onclick = () => {
        state.groupShiftEnabled = !state.groupShiftEnabled;
        updateGroupShiftUI();
    };
    els.rootNote.onchange = scheduleScaleUpdate;
    els.scaleType.onchange = () => {
        els.scaleModeDiatonic.checked = true;
        updateScaleModeUI();
        scheduleScaleUpdate();
    };
    els.microScaleSelect.onchange = () => {
        els.scaleModeMicro.checked = true;
        updateScaleModeUI();
        scheduleScaleUpdate();
    };
    els.customScaleCents.onchange = () => {
        els.scaleModeCustom.checked = true;
        updateScaleModeUI();
        scheduleScaleUpdate();
    };
    els.customModeNotes.onchange = () => { updateScaleModeUI(); scheduleScaleUpdate(); };
    els.customModeCents.onchange = () => { updateScaleModeUI(); scheduleScaleUpdate(); };
    els.customScaleNotes.onchange = () => {
        els.scaleModeCustom.checked = true;
        updateScaleModeUI();
        scheduleScaleUpdate();
    };
    els.customScaleName.onchange = () => {
        const name = els.customScaleName.value.trim();
        if (name && state.customScales[name]) {
            loadCustomScaleByName(name);
        }
        els.scaleModeCustom.checked = true;
        updateScaleModeUI();
        scheduleScaleUpdate();
    };
    els.customScaleSaved.onchange = () => {
        const name = els.customScaleSaved.value;
        if (name) {
            els.customScaleName.value = name;
            loadCustomScaleByName(name);
            els.scaleModeCustom.checked = true;
            updateScaleModeUI();
            scheduleScaleUpdate();
        }
    };
    els.scaleModeDiatonic.onchange = () => { updateScaleModeUI(); scheduleScaleUpdate(); };
    els.scaleModeMicro.onchange = () => { updateScaleModeUI(); scheduleScaleUpdate(); };
    els.scaleModeCustom.onchange = () => { updateScaleModeUI(); scheduleScaleUpdate(); };
    els.microtonalizeIn.onchange = () => { updateScaleModeUI(); scheduleScaleUpdate(); };
    document.querySelectorAll('[data-scale-choice]').forEach(choice => {
        choice.onclick = () => {
            const mode = choice.getAttribute('data-scale-choice');
            if (mode === 'microtonal') els.scaleModeMicro.checked = true;
            else if (mode === 'custom') els.scaleModeCustom.checked = true;
            else els.scaleModeDiatonic.checked = true;
            updateScaleModeUI();
            scheduleScaleUpdate();
        };
    });
    if (els.audioStart) {
        els.audioStart.onclick = async () => {
            if (state.audio.enabled) {
                setAudioEnabled(false);
                return;
            }
            setAudioEnabled(true);
            await resumeAudioContext();
            updateAudioStatus();
            // Reload samples from DB now that audio context is available
            // This ensures factory presets loaded previously get their buffers decoded
            const needsDecoding = state.audio.samples.some(s => s.data && !s.buffer);
            if (needsDecoding) {
                if (els.midiStatus) els.midiStatus.innerText = "DECODING SAMPLES...";
                await loadSavedSamples(state.audio.activeSet);
                if (els.midiStatus) els.midiStatus.innerText = "SAMPLES READY";
            }
        };
    }
    // Audio Recorder bindings
    if (els.recStartBtn) {
        els.recStartBtn.onclick = () => startRecording();
    }
    if (els.recStopBtn) {
        els.recStopBtn.onclick = () => stopRecording();
    }
    // Make recorder bar draggable
    if (els.recControls) {
        setupDraggableRecControls();
    }
    if (els.sampleSetSelect) {
        refreshSampleSetSelect(state.audio.activeSet);
        els.sampleSetSelect.onchange = () => loadSampleSet(els.sampleSetSelect.value);
    }
    if (els.sampleSetName) {
        els.sampleSetName.value = state.audio.activeSet;
        // When user types a new name, prepare to create a new set
        els.sampleSetName.oninput = () => {
            const newName = els.sampleSetName.value.trim();
            if (newName && newName !== state.audio.activeSet) {
                // Update active set name so new samples get saved to the new set
                setActiveSampleSetName(newName);
            }
        };
    }
    if (els.sampleSetNew) {
        els.sampleSetNew.onclick = () => {
            let name = (els.sampleSetName && els.sampleSetName.value.trim());
            if (!name) {
                name = prompt('Enter name for new sampler set:', 'New Instrument');
                if (!name || !name.trim()) return;
                name = name.trim();
            }
            // Clear all slots and create a new empty set
            stopAllVoicesInternal();
            for (let i = 0; i < SAMPLE_SLOT_COUNT; i++) {
                state.audio.samples[i].buffer = null;
                state.audio.samples[i].name = '';
                state.audio.samples[i].data = null;
                state.audio.samples[i].root = DEFAULT_SAMPLE_ROOTS[i] || 60;
                state.audio.samples[i].gain = 1;
                if (sampleFileEls[i]) sampleFileEls[i].value = '';
                if (sampleRootEls[i]) sampleRootEls[i].value = midiToNoteName(state.audio.samples[i].root);
                if (sampleGainEls[i]) sampleGainEls[i].value = '1';
                updateSampleName(i);
            }
            // Create the new set
            setActiveSampleSetName(name);
            const sets = getSampleSetsState();
            ensureSampleSet(name, sets);
            saveSampleSetsState(sets);
            refreshSampleSetSelect(name);
            if (els.sampleSetName) els.sampleSetName.value = name;
            if (els.midiStatus) els.midiStatus.innerText = `NEW SET "${name}" - Add samples then SAVE`;
        };
    }
    if (els.sampleSetSave) {
        els.sampleSetSave.onclick = async () => {
            let name = (els.sampleSetName && els.sampleSetName.value.trim());
            if (!name) {
                name = els.sampleSetSelect ? els.sampleSetSelect.value : 'Default';
            }
            if (!name || name === '') {
                name = prompt('Enter name for sampler set:', 'My Instrument');
                if (!name || !name.trim()) return;
                name = name.trim();
            }
            // Make sure this set name is registered
            setActiveSampleSetName(name);
            await saveSampleSet(name);
            // Update UI
            if (els.sampleSetName) els.sampleSetName.value = name;
            if (els.midiStatus) els.midiStatus.innerText = `SET "${name}" SAVED`;
        };
    }
    if (els.sampleSetDel) {
        els.sampleSetDel.onclick = () => {
            const name = (els.sampleSetName && els.sampleSetName.value.trim()) || els.sampleSetSelect.value || 'Default';
            deleteSampleSet(name);
        };
    }
    if (els.fxToggle && els.fxPanel) {
        els.fxToggle.onclick = () => {
            if (!state.audio.fxEnabled) {
                setFxEnabled(true);
                setFxGroup(state.audio.fxActiveGroup || 'filter');
                return;
            }
            setFxEnabled(false);
        };
    }
    if (els.fxClose && els.fxPanel) {
        els.fxClose.onclick = () => els.fxPanel.classList.add('hidden');
        els.fxPanel.onclick = e => {
            if (e.target === els.fxPanel) els.fxPanel.classList.add('hidden');
        };
    }
    if (els.fxPresetSelect || els.fxPresetQuick) {
        refreshFxPresetSelects();
    }
    if (els.fxPresetApply) {
        els.fxPresetApply.onclick = () => {
            const name = els.fxPresetSelect ? els.fxPresetSelect.value : 'Init';
            applyFxPreset(name);
        };
    }
    // Applica preset quando si cambia selezione nel pannello FX
    if (els.fxPresetSelect) {
        els.fxPresetSelect.onchange = () => applyFxPreset(els.fxPresetSelect.value);
    }
    if (els.fxPresetQuick) {
        els.fxPresetQuick.onchange = () => applyFxPreset(els.fxPresetQuick.value);
    }
    if (els.wtMode) {
        clearChildren(els.wtMode);
        appendOption(els.wtMode, 'sampler', 'Sampler only');
        appendOption(els.wtMode, 'wt', 'WT only');
        appendOption(els.wtMode, 'layer', 'Layer');
        els.wtMode.value = state.audio.wavetable.mode;
        els.wtMode.onchange = () => {
            state.audio.wavetable.mode = els.wtMode.value;
            updateWavetableUI();
        };
    }
    if (els.wtSelect) {
        clearChildren(els.wtSelect);
        Object.keys(WAVETABLES).forEach(name => appendOption(els.wtSelect, name, name));
        els.wtSelect.value = state.audio.wavetable.type;
        els.wtSelect.onchange = () => {
            state.audio.wavetable.type = els.wtSelect.value;
            updateWavetableUI();
        };
    }
    if (els.wtMix) {
        els.wtMix.oninput = () => {
            state.audio.wavetable.mix = Math.max(0, Math.min(1, parseFloat(els.wtMix.value) || 0));
            updateWavetableMix();
        };
    }
    if (els.fxFilterToggle) {
        els.fxFilterToggle.onclick = () => {
            state.audio.fx.filterOn = !state.audio.fx.filterOn;
            updateFxNodes();
            updateFxToggleButtons();
        };
    }
    if (els.fxChorusToggle) {
        els.fxChorusToggle.onclick = () => {
            state.audio.fx.chorusOn = !state.audio.fx.chorusOn;
            updateFxNodes();
            updateFxToggleButtons();
        };
    }
    if (els.fxDelayToggle) {
        els.fxDelayToggle.onclick = () => {
            state.audio.fx.delayOn = !state.audio.fx.delayOn;
            updateFxNodes();
            updateFxToggleButtons();
        };
    }
    if (els.fxReverbToggle) {
        els.fxReverbToggle.onclick = () => {
            state.audio.fx.reverbOn = !state.audio.fx.reverbOn;
            updateFxNodes();
            updateFxToggleButtons();
        };
    }
    const fxInputs = [
        els.fxAttack, els.fxDecay, els.fxSustain, els.fxRelease,
        els.fxCutoff, els.fxResonance, els.fxFilterEnv,
        els.fxChorusRate, els.fxChorusDepth,
        els.fxDelayTime, els.fxDelayFeedback, els.fxDelayDry, els.fxDelayWet, els.fxDelayReverse,
        els.fxReverbDecay, els.fxReverbDry, els.fxReverbWet, els.fxMix
    ];
    fxInputs.forEach(input => {
        if (!input) return;
        input.oninput = () => {
            readFxFromUI();
            updateFxNodes();
            rebuildReverbImpulse();
            updateFxValueDisplays();
        };
        input.onchange = input.oninput;
    });
    sampleRootEls.forEach((input, idx) => {
        if (!input) return;
        const storedRoot = state.audio.samples[idx]?.root ?? DEFAULT_SAMPLE_ROOTS[idx] ?? 60;
        const value = Math.max(0, Math.min(127, parseInt(storedRoot, 10) || DEFAULT_SAMPLE_ROOTS[idx] || 60));
        input.value = midiToNoteName(value);
        if (state.audio.samples[idx]) state.audio.samples[idx].root = value;
        input.onchange = () => {
            const parsed = parseNoteName(input.value);
            const fallback = state.audio.samples[idx]?.root ?? value;
            const next = parsed != null ? parsed : fallback;
            input.value = midiToNoteName(next);
            if (state.audio.samples[idx]) state.audio.samples[idx].root = next;
            saveSampleRootsForSet(state.audio.activeSet);
        };
    });
    sampleGainEls.forEach((input, idx) => {
        if (!input) return;
        const storedGain = state.audio.samples[idx]?.gain ?? DEFAULT_SAMPLE_GAINS[idx] ?? 1;
        const value = Math.max(0, Math.min(5, parseFloat(storedGain) || 1));
        input.value = value.toFixed(2);
        if (state.audio.samples[idx]) state.audio.samples[idx].gain = value;
        input.onchange = () => {
            const next = Math.max(0, Math.min(5, parseFloat(input.value) || 0));
            input.value = next.toFixed(2);
            if (state.audio.samples[idx]) state.audio.samples[idx].gain = next;
            saveSampleGainsForSet(state.audio.activeSet);
            updateSamplerGainNodes();
        };
    });
    if (els.samplerGain) {
        els.samplerGain.value = state.audio.samplerGain.toFixed(2);
        updateRangeProgress(els.samplerGain);
        els.samplerGain.oninput = () => {
            state.audio.samplerGain = Math.max(0, Math.min(5, parseFloat(els.samplerGain.value) || 0));
            saveSamplerGainForSet(state.audio.activeSet);
            updateSamplerGainNodes();
            updateRangeProgress(els.samplerGain);
        };
    }
    if (els.sampleLoopBtn) {
        els.sampleLoopBtn.onclick = () => {
             state.audio.loopGlobal = !state.audio.loopGlobal;
             els.sampleLoopBtn.className = `menu-btn ${state.audio.loopGlobal ? 'toggle-on' : 'toggle-off'}`;
             els.sampleLoopBtn.textContent = state.audio.loopGlobal ? 'LOOP ON' : 'LOOP OFF';
        };
    }
    if (els.samplerMaxVoices) {
        els.samplerMaxVoices.value = Math.max(1, Math.min(64, state.audio.maxSamplerVoices || 24));
        els.samplerMaxVoices.onchange = () => {
            const next = Math.max(1, Math.min(64, parseInt(els.samplerMaxVoices.value, 10) || 24));
            els.samplerMaxVoices.value = next;
            state.audio.maxSamplerVoices = next;
        };
    }
    sampleFileEls.forEach((input, idx) => {
        if (!input) return;
        input.onchange = async e => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            await loadSampleFromFile(idx, file);
            if (!state.audio.enabled) setAudioEnabled(true);
        };
    });
    sampleClearEls.forEach((btn, idx) => {
        if (!btn) return;
        btn.onclick = () => {
            if (sampleFileEls[idx]) sampleFileEls[idx].value = '';
            clearSampleSlot(idx);
        };
    });
    updateAudioStatus();
    updateAllSampleNames();
    loadFxForSet(state.audio.activeSet);
    loadSavedSamples(state.audio.activeSet);
    updateFxValueDisplays();
    setFxEnabled(state.audio.fxEnabled);
    updateWavetableUI();

    function updateMPEVisibility() {
        if (!els.deadCenter) return;
        const dc = els.deadCenter.checked;
        const dcBox = document.getElementById('boxDeadCenterForce');
        if (dcBox) dcBox.style.display = dc ? 'flex' : 'none';

        if (!els.linkPressToY || !els.linkYToVelocity) return;
        const areaUnused = els.linkPressToY.checked && els.linkYToVelocity.checked;
        const sBox = document.getElementById('boxTouchSens');
        if (sBox) sBox.style.display = areaUnused ? 'none' : 'flex';
    }
    if (els.deadCenter) els.deadCenter.addEventListener('change', updateMPEVisibility);
    if (els.linkPressToY) els.linkPressToY.addEventListener('change', updateMPEVisibility);
    if (els.linkYToVelocity) els.linkYToVelocity.addEventListener('change', updateMPEVisibility);
    updateMPEVisibility();
}

bindUI();
setupChordKnob();
setupArpKnob();
// setupBowButton();

// Applica Init all'avvio DOPO che bindUI() ha inizializzato tutto
if (state.presets.Init) {
    applyPresetState(state.presets.Init);
    updatePresetDescription('Init');
}

function scheduleScaleUpdate() {
    if (state.scaleUpdateRaf != null) return;
    state.scaleUpdateRaf = requestAnimationFrame(() => {
        state.scaleUpdateRaf = null;
        updateScaleNotes();
    });
}

function updateScaleNotes() {
    const def = getScaleDefinition();
    const notes = [];
    const degrees = def.degrees;
    for (let oct = -1; oct <= 11; oct++) {
        degrees.forEach(d => {
            const note = (oct * 12) + def.root + d;
            if (note >= 0 && note <= 127) notes.push(note);
        });
    }
    notes.sort((a, b) => a - b);
    state.scaleNotes = { notes, root: def.root, scale: `${def.mode}:${def.name}` };
    requestDraw();
}

function shouldAnimate() {
    return !document.hidden && (
        state.fadeState.active ||
        state.activeTouches.size ||
        state.heldVoices.length ||
        state.arpHoldTouches.length ||
        state.arp.active.length ||
        state.physicalNotes.size
    );
}

function requestDraw() {
    if (document.hidden) return;
    if (state.drawRaf == null) state.drawRaf = requestAnimationFrame(draw);
}

function getFadeState() {
    let fadeMul = 1;
    if (state.fadeState.active) {
        const elapsed = Date.now() - state.fadeState.start;
        const progress = Math.min(1, elapsed / Math.max(1, state.fadeState.durationMs));
        fadeMul = Math.max(0, Math.pow(1 - progress, FADE_EASE_POW));
    }
    return { fadeMul, fadeDrop: 1 - fadeMul };
}

function collectHighlightMaps() {
    const chordHighlightNotes = new Map();
    const chordDimNotes = new Set();
    const arpActiveNotes = new Map();
    
    // Helper to find note under finger visual position
    const getVisualNote = (x) => {
         const width = state.canvasRect.width; 
         const numOct = parseInt(els.visibleOctaves.value, 10);
         const grid = getGridDegrees();
         const totalSteps = numOct * grid.stepsPerOct;
         // x is relative to canvas
         const stepIndex = Math.floor((x / width) * totalSteps);
         if (stepIndex < 0 || stepIndex >= totalSteps) return null;
         const baseMIDI = 48 + (state.currentOctave * 12) + grid.root;
         return getGridNoteAt(stepIndex, grid.degrees, baseMIDI);
    };

    state.activeTouches.forEach(t => {
        if (t.isHoldGrab) {
            const target = mapMidiNoteToScale(t.lastM?.exact ?? 0);
            const source = mapMidiNoteToScale(t.initialExact ?? 0);
            if (Number.isFinite(source)) chordDimNotes.add(Math.round(source));
            if (Number.isFinite(target)) chordHighlightNotes.set(Math.round(target), t.color);
        }
        
        // VISUAL TRACE: Always highlight the key currently under the finger
        if (t.lastM?.x != null) {
            const visualNote = getVisualNote(t.lastM.x);
            if (visualNote != null) {
                chordHighlightNotes.set(Math.round(visualNote), t.color);
            }
        } else if (t.x != null) {
             // Fallback if lastM is not set (simple pointer logic)
             const visualNote = getVisualNote(t.x);
             if (visualNote != null) {
                chordHighlightNotes.set(Math.round(visualNote), t.color);
             }
        }

        if (t.isArp && t.arpNotes) {
            t.arpNotes.forEach(n => chordHighlightNotes.set(Math.round(n.note), t.color));
        } else {
            t.voices.forEach(v => {
                const noteFloat = getVoiceNoteFloat(v);
                chordHighlightNotes.set(Math.round(noteFloat), t.color);
            });
        }
    });
    state.heldVoices.forEach(v => {
        const noteFloat = getVoiceNoteFloat(v);
        chordHighlightNotes.set(Math.round(noteFloat), v.color);
    });
    state.arp.notes.forEach(n => chordHighlightNotes.set(Math.round(n.note), n.color));
    state.arp.active.forEach(entry => arpActiveNotes.set(entry.note, entry.color));
    return { chordHighlightNotes, chordDimNotes, arpActiveNotes };
}

function drawGridCells(width, height, grid, numOct, noteW, baseMIDI, fadeMul, fadeDrop, time, maps) {
    const { chordHighlightNotes, chordDimNotes, arpActiveNotes } = maps;
    if (state.gridCache?.bgCanvas) ctx.drawImage(state.gridCache.bgCanvas, 0, 0);
    for (let i = 0; i < (numOct * grid.stepsPerOct); i++) {
        const n = getGridNoteAt(i, grid.degrees, baseMIDI);
        const x = i * noteW;
        const nRound = Math.round(n);
        if (chordDimNotes.has(nRound)) {
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = '#000';
            ctx.fillRect(x, 0, noteW, height);
            ctx.globalAlpha = 1;
        }
        if (chordHighlightNotes.has(nRound)) {
            const color = chordHighlightNotes.get(nRound) || '#ffaa00';
            ctx.globalAlpha = 0.25;
            ctx.fillStyle = color;
            ctx.fillRect(x, 0, noteW, height);
            ctx.globalAlpha = 1;
        }
        if (arpActiveNotes.has(nRound)) {
            const color = arpActiveNotes.get(nRound) || '#00ff77';
            ctx.globalAlpha = 0.45;
            ctx.fillStyle = color;
            ctx.fillRect(x, 0, noteW, height);
            ctx.globalAlpha = 1;
        }
        const pList = state.physicalNotes.get(nRound);
        const pData = pList ? pList.find(d => !d.grabbed && d.onTs && (time - d.onTs) <= GHOST_NOTE_MS) : null;
        if (pData) {
            const rad = 20 + Math.sin(time/200)*5;
            const yBase = height / 2;
            const y = yBase + ((height - yBase) * fadeDrop);
            ctx.globalAlpha = fadeMul;
            ctx.beginPath(); ctx.strokeStyle = '#00ff44'; ctx.lineWidth = 3;
            ctx.arc(x + noteW/2, y, rad, 0, Math.PI*2); ctx.stroke();
            ctx.fillStyle = 'rgba(0,255,70,0.2)'; ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
}

function getClampedVisualY(y, radius, height) {
    if (!state.audio.enabled) return y; // No clamping if Bow Fader is hidden
    const faderH = 60; 
    // Prevent note from overlapping the fader area
    // height - faderH is the top of the fader
    // y + radius is the bottom of the note
    // We want y + radius < height - faderH - 2
    const safeBottom = height - faderH - 4; 
    const maxY = safeBottom - radius;
    return Math.min(y, maxY);
}

function drawHeldVoices(fadeMul, fadeDrop, height) {
    if (!state.heldVoices.length) return;
    const now = state.audio.ctx ? state.audio.ctx.currentTime : 0;
    state.heldVoices.forEach((v, i) => {
        const m = v.lastM;
        let flash = 0;
        if (v.bowFlash > 0) {
            flash = v.bowFlash;
            v.bowFlash -= 0.05;
        }

        const radius = (12 + (m.press / 127) * 22) + (flash * 10);
        v.phase = (v.phase || 0) + 0.2;
        const noteFloat = getVoiceNoteFloat(v);
        const x = getNearestNoteX(noteFloat) ?? m.x;
        let y = m.y + ((height - m.y) * fadeDrop);
        y = getClampedVisualY(y, radius, height);

        
        // --- CALCOLO SFUMATURA DEL SAMPLE ---
        let sampleOpacity = 1.0;
        const key = `${v.chan}:${v.note}`;
        const audioVoice = state.audio.voices.get(key);

        if (state.audio.enabled && v.note != null) { 
            if (audioVoice && audioVoice.bufferDuration) {
                const elapsed = now - audioVoice.startTime;
                if (elapsed >= audioVoice.bufferDuration) {
                    sampleOpacity = 0.2; 
                } else {
                    const progress = elapsed / audioVoice.bufferDuration;
                    sampleOpacity = 0.2 + (0.8 * Math.max(0, 1 - Math.pow(progress, 3)));
                }
            } else if (!audioVoice) {
                sampleOpacity = 0.2; 
            }
        }
        if (flash > 0) sampleOpacity = 1.0;
        const finalAlpha = fadeMul * sampleOpacity;
        
        ctx.globalAlpha = finalAlpha;
        
        ctx.beginPath(); ctx.strokeStyle = flash > 0 ? '#ffffff' : v.color; ctx.lineWidth = 3 + (flash * 4);
        for (let ox = -50; ox <= 50; ox += 2) {
            const oy = Math.sin(ox * 0.15 + v.phase) * 3;
            if (ox === -50) ctx.moveTo(x + ox, y + oy);
            else ctx.lineTo(x + ox, y + oy);
        }
        ctx.stroke();

        const bubbleColor = flash > 0 ? '#ffffff' : v.color;
        drawNoteBubble(x, y, radius, bubbleColor, i === 0 ? "HOLD" : null);
        ctx.globalAlpha = 1;
    });
}

function drawArpHoldTouches(fadeMul, fadeDrop, height) {
    if (!state.arpHoldTouches.length) return;
    state.arpHoldTouches.forEach(t => {
        const list = t.noteObjs || [];
        list.forEach((n, idx) => {
            const m = n.lastM || t.lastM;
            if (!m) return;
            const radius = 10 + (m.press / 127) * 18;
            t.phase = (t.phase || 0) + 0.2;
            const x = getNearestNoteX(n.noteFloat ?? n.note) ?? m.x;
            let y = m.y + ((height - m.y) * fadeDrop);
            y = getClampedVisualY(y, radius, height);
            const glow = n.color || t.color || '#ffaa00';
            ctx.globalAlpha = fadeMul;
            drawNoteBubble(x, y, radius, glow, idx === 0 ? "ARP HOLD" : null);
            ctx.globalAlpha = 1;
        });
    });
}

function drawActiveTouches(fadeMul, fadeDrop, height) {
    state.activeTouches.forEach(t => {
        const radius = 12 + (t.lastM.press / 127) * 22;
        t.phase += 0.2 + (t.vibratoSpeed * 0.06);
        let y = t.lastM.y + ((height - t.lastM.y) * fadeDrop);
        y = getClampedVisualY(y, radius, height);
        ctx.globalAlpha = fadeMul;
        ctx.beginPath(); ctx.strokeStyle = t.color; ctx.lineWidth = 3;
        for (let ox = -50; ox <= 50; ox += 2) {
            const oy = Math.sin(ox * 0.15 + t.phase) * (4 + t.vibratoSpeed);
            if (ox === -50) ctx.moveTo(t.lastM.x + ox, y + oy);
            else ctx.lineTo(t.lastM.x + ox, y + oy);
        }
        ctx.stroke();
        const label = t.isGrab
            ? "GRAB"
            : (t.isGroupDrag ? "GROUP" : (t.isArpHoldGrab ? "ARP HOLD" : (t.isArp ? "ARP" : `CH${t.voices[0].chan}`)));
        drawNoteBubble(t.lastM.x, y, radius, t.color, label);
        if (t.isArp && t.arpNotes) {
            t.arpNotes.forEach(n => {
                const noteFloat = n.noteFloat ?? n.note;
                const nx = getNearestNoteX(noteFloat) ?? t.lastM.x;
                drawNoteBubble(nx, y, Math.max(8, radius * 0.7), n.color || t.color, null);
            });
        } else if (t.voices && t.voices.length > 1) {
            t.voices.forEach(v => {
                const noteFloat = getVoiceNoteFloat(v);
                const nx = getNearestNoteX(noteFloat) ?? t.lastM.x;
                drawNoteBubble(nx, y, Math.max(8, radius * 0.7), t.color, null);
            });
        }
        ctx.globalAlpha = 1;
    });
}

function drawBowFaders(height, noteW) {
    // Hidden if internal audio is disabled (User Request: "togli bow se si usa midi out (audio internal OFF)")
    if (!state.audio.enabled) return;
    if (!state.audio.ctx) return;
    const faderH = 60;
    const yTop = height - faderH;
    
    // Helper to draw specific fader (Triangle Pad)
    const drawFader = (x, color, label) => {
        if (x == null) return;
        const padW = noteW - 4;
        const left = x - noteW/2 + 2;
        const bottom = yTop + faderH - 2;
        const top = yTop + 2;
        const right = left + padW;

        // Rectangular Border (Touch Area)
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        ctx.strokeRect(left, top, padW, faderH - 4);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(left, top, padW, faderH - 4);

        // Draw Triangle: Bottom-Left -> Bottom-Right -> Top-Right
        const grad = ctx.createLinearGradient(left, top, right, top);
        grad.addColorStop(0, '#444');  // Darker/Faded at start (Left)
        grad.addColorStop(1, color);   // Bright/Intense at end (Right)
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(left, bottom);
        ctx.lineTo(right, bottom);
        ctx.lineTo(right, top);
        ctx.closePath();
        ctx.fill();

        // Outline for triangle
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Optional: Label
        if (noteW > 30) {
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'right';
            ctx.fillText("BOW", right - 5, bottom - 5);
        }
    };

    // 1. Held Voices
    state.heldVoices.forEach(v => {
        const noteFloat = getVoiceNoteFloat(v);
        const x = getNearestNoteX(noteFloat);
        drawFader(x, v.color || '#ffaa00', "BOW");
    });

    // 2. Active Touches
    state.activeTouches.forEach(t => {
        if (t.isGrab || t.isGroupDrag || t.isArpHoldGrab) return; 
        if (!t.voices || !t.voices.length) return;
        t.voices.forEach(v => {
            const noteFloat = getVoiceNoteFloat(v);
            const x = getNearestNoteX(noteFloat);
            drawFader(x, t.color || '#00ff44', "BOW");
        });
    });
}

function draw() {
    state.drawRaf = null;
    const width = Math.floor(state.canvasRect.width);
    const height = Math.floor(state.canvasRect.height);
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, width, height);
    const { fadeMul, fadeDrop } = getFadeState();
    const numOct = parseInt(els.visibleOctaves.value, 10);
    const grid = getGridDegrees();
    const noteW = width / (numOct * grid.stepsPerOct);
    const baseMIDI = 48 + (state.currentOctave * 12) + grid.root;
    updateGridCache();
    const time = Date.now();
    const maps = collectHighlightMaps();
    drawGridCells(width, height, grid, numOct, noteW, baseMIDI, fadeMul, fadeDrop, time, maps);
    drawHeldVoices(fadeMul, fadeDrop, height);
    drawArpHoldTouches(fadeMul, fadeDrop, height);
    drawActiveTouches(fadeMul, fadeDrop, height);
    drawBowFaders(height, noteW);
    if (shouldAnimate()) requestDraw();
}

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    state.canvasRect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(state.canvasRect.width * dpr);
    canvas.height = Math.floor(state.canvasRect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function updateLayoutVars() {
    const uiRect = els.ui.getBoundingClientRect();
    const perfRect = els.performance.getBoundingClientRect();
    const isActive = els.ui.classList.contains('active');
    const isPerfCollapsed = els.performance.classList.contains('collapsed');
    const uiH = isActive ? uiRect.height : 0;
    const perfH = isPerfCollapsed ? 0 : perfRect.height;
    state.perfHeight = perfH;
    document.documentElement.style.setProperty('--ui-h', `${uiH}px`);
    document.documentElement.style.setProperty('--perf-h', `${perfH}px`);
}

function refreshLayout() {
    updateLayoutVars();
    resizeCanvas();
    updateToggleLabels();
    requestDraw();
}

window.onresize = refreshLayout;
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) requestDraw();
});
els.ui.addEventListener('transitionend', refreshLayout);
els.performance.addEventListener('transitionend', refreshLayout);
refreshLayout(); updateScaleModeUI(); updateScaleNotes(); syncArpFromUI(); updateHoldButtonUI(); updateArpParamsToggleLabel(); updateGroupShiftUI(); setupMIDI(); draw();

function updateToggleLabels() {
    const uiLabel = uiToggle ? uiToggle.querySelector('.btn-text') : null;
    const advLabel = els.uiAdvancedToggle?.querySelector('.btn-text');
    if (uiLabel) uiLabel.textContent = els.ui.classList.contains('active') ? 'X' : '';
    // Update perfToggle style based on panel state
    if (perfToggle) {
        const isCollapsed = els.performance.classList.contains('collapsed');
        perfToggle.classList.toggle('panel-closed', isCollapsed);
    }
    if (advLabel) advLabel.textContent = els.ui.classList.contains('show-advanced') ? 'X' : 'Sampler Set';
}
