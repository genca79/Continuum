# GENCA MPE Ultra Continuum: Hybrid Edition
User Manual (English)

## 0. Basic Interaction Modes
- Touch-only mode: Play directly on the surface with no external MIDI input. GENCA generates notes/MPE and sends them to the selected MIDI Out (hardware synth or virtual port). If no MIDI Out is selected, no sound is produced.
- DAW mode / Hybrid mode: Use GENCA as the performance controller and route MIDI Out to a DAW instrument. In Hybrid mode you can additionally sync the arpeggiator to MIDI clock (ARP Sync = MIDI) or combine internal touch control with external devices while still monitoring everything through the DAW.
- Touch + external MIDI devices + DAW: Play on the surface while also receiving external MIDI input. Incoming MIDI can be passed through (Thru) or microtonally remapped, and both touch and external input are routed to the DAW via MIDI Out.

## 1. Overview
GENCA MPE Ultra Continuum is a touch-based performance surface for expressive MIDI and MPE control. It supports diatonic, microtonal, and custom scales; chord generation; arpeggiation; and deep MPE shaping (pitch, slide, and pressure). The interface is split into a Setup UI at the top, a Performance Panel at the bottom, and a central playing surface.

## 2. Interface Description

### 2.1 Setup UI (Top Panel)
Open/close with the SET button in the top-right corner.

#### MIDI
- MIDI In: Select external MIDI input device.
- MIDI Out: Select output device.
- Thru: Pass incoming MIDI straight to output (disabled for remapped microtonal input).

#### Scale
- Root: Scale root note (C through B).
- Scale Set: Choose Diatonic, Microtonal, or Custom mode.
- Octaves: Visible octaves on the surface (1 to 4).

Diatonic Scales:
- Choose a standard scale (Major, Minor, Dorian, etc.).

Microtonal Scales:
- Select a built-in microtonal scale.
- Microtonalize MIDI In (MPE): Remaps external MIDI to the microtonal scale using per-note pitch bend.

Custom Scales:
- Saved: Select a stored custom scale.
- Name: Create or rename a custom scale.
- Save / Del: Store or delete a custom scale.
- Mode: Notes or Cents.
- Notes list: Example "C, D#, F".
- Cents list: Example "0, 240, 480".

#### Chord
- Inversion: Root, 1st, 2nd, or 3rd inversion.
- Spread: Expands chord notes across octaves.

#### MPE
- PB Range: Pitch bend range per note (in semitones).
- Snap: Quantization strength toward scale notes.
- Dead-Center: Adds a magnetic center for each pitch lane.
- DC Force: Strength of dead-center pull.
- Link YZ: Pressure follows Y position (slide) instead of touch size.
- Smooth: Smoothing for pitch/slide/pressure.
- Curve: Response curve (Linear, Soft, Hard).
- Y Deadzone: Bottom dead-zone for slide.
- Q Release: Quantize on release.

#### MPE Preset
Save and recall MPE-only settings.

#### Global Preset
Save and recall full configuration, including scale, chord, MPE, and arp.

#### System
- Full: Toggle fullscreen mode.

### 2.2 Performance Panel (Bottom Panel)
Open/close with the PLAY button in the bottom-right corner.

- Transpose:
  - Oct - and Oct + shift the octave (-2 to +2).
- Group:
  - GROUP enables group-shift behavior for held notes or arp groups.
- Chords:
  - Chord Wheel: Rotate to change chord type; tap to toggle on/off.
- Hold:
  - Latches played notes and chords.
- Stop:
  - Immediate all-notes-off and MPE reset.
- Fade:
  - Smoothly fades out active notes.
  - Fade time in seconds (1 to 20).
- Arp:
  - Arp Wheel: Rotate to change rate; tap to toggle arp on/off.
  - SET ARP opens arp parameters:
    - Gate: Note length as a percentage.
    - Sync: Internal or MIDI clock.
    - BPM: Internal tempo when Sync is Internal.

### 2.3 Performance Surface (Canvas)
The central playing surface displays:
- Vertical lanes for scale degrees.
- Emphasis for root and octave lines.
- Note labels and cents (for microtonal/custom when there is space).
- Animated note bubbles for touches, held notes, and arp notes.
- Green ghost rings for recent external MIDI note-on events.

## 3. Core Interaction Model

### 3.1 Touch and MPE
Each touch generates:
- Pitch: Horizontal position.
- Slide (CC74): Vertical position.
- Pressure (channel pressure): Touch size or linked to Y when Link YZ is enabled.

### 3.2 Scale Quantization
Pitch can be quantized to the active scale. Snap and Dead-Center controls affect how strongly pitch centers on notes.

### 3.3 Chords
If a chord mode is active, each touch triggers multiple notes based on the selected chord type, inversion, and spread. Auto modes build diatonic chords from the current scale.

### 3.4 Arpeggiator
When ARP is on, chord tones are sequenced according to the selected rate.
- Internal sync uses the BPM value.
- MIDI sync follows external MIDI clock messages.

### 3.5 Hold
When Hold is enabled, releasing a touch keeps the notes playing. Held notes are shown as animated bubbles.

### 3.6 Group Shift
With GROUP active, multiple held notes can be dragged together to shift pitch as a group. Two-finger group dragging is supported.

### 3.7 Removing Held Notes
Double-tap a held note to drop and fade it out. For arp holds, double-tap removes individual arp notes.

## 4. External MIDI Input

### 4.1 MIDI Thru
If Thru is enabled, incoming MIDI is sent directly to the output.

### 4.2 Microtonalize MIDI In
When Microtonalize MIDI In is enabled, incoming notes are mapped to the microtonal scale and transmitted as MPE (per-note pitch bend).

### 4.3 Ghost Indicators
External note-on events produce brief green rings on the grid, indicating incoming MIDI activity.

## 5. Presets

### 5.1 Global Presets
Store and recall the full state:
- Scale settings
- Chord mode, inversion, spread
- MPE settings
- Arp settings
- Hold state and octave offset

### 5.2 MPE Presets
Store and recall only MPE parameters:
- PB Range, Snap, Dead-Center, DC Force
- Link YZ, Smooth, Curve, Y Deadzone, Q Release

## 6. Visual Feedback Summary
- Highlighted columns show chord and arp activity.
- Colored bubbles show active touches and held notes.
- Ghost rings mark external MIDI note-on events.

## 7. Safety and Recovery
- STOP sends all-notes-off immediately and resets channels.
- FADE reduces slide and pressure before releasing notes to avoid abrupt stops.

## 8. Typical Workflows

### 8.1 Basic Chord Performance
1. Set Root and Scale.
2. Enable a chord mode with the Chord Wheel.
3. Play the surface; adjust inversion/spread if needed.

### 8.2 Arp With MIDI Sync
1. Enable ARP.
2. Set Sync to MIDI.
3. Start external MIDI clock to drive the arp.

### 8.3 Microtonal Performance
1. Select a microtonal scale.
2. Enable Microtonalize MIDI In if using external input.
3. Play the surface for expressive pitch glide within the microtonal scale.

