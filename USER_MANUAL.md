This is the definitive **Operating Manual** for the **GENCA MPE Ultra Continuum (Hybrid Edition)**. This document integrates all technical features, from its hybrid sound engine to its advanced MPE mapping and standalone capabilities.

---

# GENCA MPE Ultra Continuum - Master Operating Manual

The **GENCA MPE Ultra Continuum** is a high-performance, browser-based hybrid instrument. It combines **Wavetable Synthesis** with a **Multi-Sample Engine**, all controlled via a sophisticated **MPE (MIDI Polyphonic Expression)** logic. It functions both as a standalone synthesizer and a powerful MIDI transformer for external hardware and DAWs.

---

## 1. System Setup & Connectivity

### Browser Requirements

* **Engine:** Built on Web Audio and Web MIDI APIs.
* **Compatibility:** Optimized for **Google Chrome** and **Microsoft Edge**.
* **Setup:** Connect MIDI devices *before* launching the app.

### MIDI Routing (MIDI & SYNTH Tab)

* **MIDI In:** Select your external controller. Standard MIDI keyboards are automatically upgraded to "Hybrid MPE" via the on-screen interface.
* **MIDI Out/Thru:** Routes processed MIDI data (chords, scales, MPE modulations) to other software or hardware.
* **Internal Synth:** Toggle **ON** to use the built-in sound engine.

---

## 2. The Hybrid Sound Engine

Continuum uses a dual-engine architecture to blend synthetic and organic textures.

### A. Wavetable Synthesizer

* **WT Type:** Choose from various digital wavetables.
* **WT Mix:** Morphs between different waveforms within the table for dynamic timbral changes.

### B. Advanced Multi-Slot Sampler

The sampler features **7 independent slots**, allowing for complex multi-sampling or drum kits.

* **Note Mapping:** Each slot can be assigned to a specific **Root Pitch**.
* *Multi-Sampling:* Assign different samples of the same instrument to different keys for realistic pitch shifting.
* *Drum Kits:* Assign a Kick to C2, Snare to D2, etc., to play a full kit.


* **Loop Mode:** Toggle **LOOP ON** for infinite pads or **OFF** for one-shot samples.
* **Sampler Gain:** Independent volume control for the sampling layer.
* **Factory vs. User:** Load pre-built sets or drag-and-drop your own **.wav** files.

---

## 3. Performance & Expression (MPE Logic)

The central interface represents a "fretless" expressive surface.

### The "Ghost Circles"

When a note is triggered (via MIDI or QWERTY keyboard), a **Green Ghost Circle** appears.

* **X-Axis (Horizontal):** Drag to perform per-note **Pitch Slides**.
* **Y-Axis (Vertical):** Drag to modulate the **Filter Cutoff** or **Wavetable Position**.
* **Hybrid Control:** You can play notes on a physical keyboard and simultaneously use your mouse/touchscreen to move the circles, adding expression that standard keyboards cannot produce.

### Advanced Expressive Settings

* **Snap Rate:** Sets how quickly a note "snaps" back to the perfect pitch of the scale after a slide.
* **Dead-Center & Force:** Creates a pitch-stable zone in the center of the note to prevent accidental detuning.
* **PB Range:** Adjust between +/- 2 and +/- 48 semitones. **Crucial:** Match this setting with your DAW/Plugin for accurate bending.

---

## 4. Harmonic Engine: Scales & Chords

Transform simple input into professional arrangements.

### Scale & Microtonal Tab

* **Scale Presets:** Over 20 scales including Diatonic, Arabic, and Pentatonic.
* **Microtonal Editor:** Adjust the tuning of individual notes in **Cents** (1/100th of a semitone). Perfect for non-Western tunings or Just Intonation.
* **Custom Scale:** Activate/Deactivate specific notes on the grid and save your layout.

### Chord Generator

* **Auto (Diatonic):** Automatically plays the correct chord for the selected scale (e.g., plays a Minor 7th if that fits the current key).
* **Fixed Structures:** Forces every note to play a specific chord type (Sus4, Add9, 13th, etc.).
* **Inversion & Spread:** Adjust the "voicing" of the chords. **Spread** widens the chord across multiple octaves for cinematic depth.

---

## 5. Signal Processing & FX

The internal audio path includes a studio-grade FX chain.

* **Filter:** Resonant low-pass filter with a dedicated **ADSR Envelope** (Attack, Decay, Sustain, Release).
* **Chorus:** Adds stereo width and thickness.
* **Delay:** Includes a **D Rev** (Reverse) mode for psychedelic, ambient echoes.
* **Reverb:** High-quality spatial processor with adjustable **Decay** and **Dry/Wet** mix.
* **Arpeggiator (ARP):** Syncs to internal BPM or external MIDI Clock. Includes various rhythmic rates and a **Gate** control for note length.

---

## 6. Recording & Export

Continuum allows you to capture your performance without external software.

1. **Record:** Click the **●** icon in the transport bar.
2. **Edit:** After stopping (**■**), the **Recording Editor** opens.
3. **Trim:** Use the visual waveform to select the best part of your take.
4. **Export:** Save as a high-quality **.wav** file directly to your device.

---

## 7. Operational Modes Summary

| Mode | Use Case | Key Configuration |
| --- | --- | --- |
| **Standalone** | Sound Design / Live Jam | Internal Synth ON + Sampler ON. |
| **MIDI Processor** | Playing other VSTs | MIDI Out to Virtual Cable -> DAW. |
| **MPE Bridge** | Using MPE Controllers | Advanced Tab: Match PB Range + Link Y to Pressure. |
| **Hybrid Performer** | Keyboard + Mouse | Play MIDI Keyboard + Drag Ghost Circles on screen. |

---

### **Quick Troubleshooting**

* **No Sound?** Ensure "Internal Synth" is ON and your browser tab isn't muted.
* **No MIDI?** Check "MIDI In" selection. Refresh the page if you connected the keyboard after opening the browser.
* **Stuck Notes?** Click the **STOP** button in the transport bar to kill all active voices.

Would you like me to generate a **Mapping Guide** for specific MIDI CC controllers to automate the FX knobs from your hardware?
