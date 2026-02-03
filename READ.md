# GENCA MPE Ultra Continuum: Hybrid Edition

ITA
===

Panoramica
----------
Questa web app e una superficie MPE basata su griglia isomorfica scalare.
Ogni blocco di ottava mostra solo le note della scala scelta.
La superficie invia note MPE, pitch bend (X), slide CC74 (Y) e pressure (Z).

Requisiti
---------
- Browser con Web MIDI (Chrome/Edge consigliati).
- Un synth MPE o un host MIDI che accetti MPE.
- Permesso MIDI nel browser.

Avvio rapido
------------
1) Apri `Index.html` nel browser.
2) Seleziona MIDI Out e (opzionale) MIDI In.
3) Scegli scala e root.
4) Suona sulla superficie.
5) Usa la barra performance per Transpose, Chords, Hold, Panic.

Come si suona
-------------
- X = pitch bend orizzontale nella cella.
- Y = slide (CC74). Se Link YZ attivo, Y controlla anche pressure.
- Z = pressure (Channel Pressure) da area del tocco.

Mappatura griglia
-----------------
- La larghezza e divisa per (numero ottave * gradi della scala + ottava).
- Il centro della cella corrisponde alla nota intonata.

Barra performance (sempre visibile)
-----------------------------------
- Transpose: freccia sinistra/ destra per cambiare ottava.
- Chords: manopola per scegliere l accordo + toggle ON/OFF.
- Hold: mantiene le note e i parametri MPE; il LED si illumina.
- Panic: all notes off.

Pannello opzioni (menu a scomparsa)
-----------------------------------
- MIDI In/Out: selezione device.
- Scala & Root: tipo scala e fondamentale.
- Ottave: numero di ottave visibili.
- Inversion/Spread: voicing accordi.
- PB Range: ampiezza pitch bend (+/- 2, 12, 24, 48).
- Thru: inoltra MIDI In direttamente a Out.
- Snap: forza di aggancio intonazione.
- Dead-Center + DC Force: aggancio forte al centro della cella.
- Link YZ: lega pressure a Y.
- Preset: salva/carica configurazioni.
- Full: fullscreen.

Accordi
-------
- Modalita cromatiche: intervalli in semitoni (Maj, Min, Dom, Dim, Aug, 9, 11, 13, ecc).
- Auto (Diatonic / 7th): accordi in scala.
- ON/OFF: OFF spegne gli accordi, ON ripristina l ultimo accordo.

Hold avanzato
-------------
- Con Hold attivo, le note restano con i parametri MPE correnti.
- I cerchi restano nella posizione originale.
- Puoi grabbare un cerchio in Hold e trascinarlo per modificare il suono.
- Se l accordo e in Hold, trascini l intero gruppo.

Preset
------
I preset sono salvati in `localStorage` (chiave `genca_presets_v1`).
Ora includono anche MIDI In/Out, se i device sono disponibili.

FAQ
---
Q: Perche vedo due "C" vicini?
A: La griglia include la nota di ottava. Puoi nascondere l etichetta se vuoi.

Q: Perche il tuner non e perfettamente intonato?
A: Ora il centro della cella e intonato. Se serve, attiva Dead-Center.

Q: Con Thru attivo non sento MPE.
A: Thru fa pass-through e disattiva la gestione MPE interna.

Glossario funzioni
------------------
- MPE: MIDI Polyphonic Expression, note su canali separati.
- PB Range: range pitch bend in semitoni.
- Snap: zona di aggancio all intonazione.
- Dead-Center: aggancio forte al centro della cella.
- Slide (CC74): controllo timbrico su asse Y.
- Pressure: aftertouch/pressure su asse Z.
- Hold: mantiene note e parametri MPE.
- Panic: all notes off.
- Thru: inoltra MIDI In a MIDI Out.
- Inversion: ruota le note dell accordo.
- Spread: apre il voicing distanziando le note.


ENG
===

Overview
--------
This web app is a scale-based isomorphic MPE surface.
Each octave block shows only the notes in the selected scale.
The surface sends MPE notes, pitch bend (X), slide CC74 (Y) and pressure (Z).

Requirements
------------
- Browser with Web MIDI (Chrome/Edge recommended).
- An MPE-capable synth or MIDI host.
- MIDI permission in the browser.

Quick start
-----------
1) Open `Index.html` in the browser.
2) Select MIDI Out and (optional) MIDI In.
3) Choose scale and root.
4) Play on the surface.
5) Use the performance bar for Transpose, Chords, Hold, Panic.

How to play
-----------
- X = horizontal pitch bend inside the cell.
- Y = slide (CC74). With Link YZ on, Y also controls pressure.
- Z = pressure (Channel Pressure) from touch area.

Grid mapping
------------
- Width is divided by (octaves * scale degrees + octave).
- The center of each cell is perfectly in tune.

Performance bar (always visible)
--------------------------------
- Transpose: left/right arrows shift octave.
- Chords: knob selection + ON/OFF toggle.
- Hold: keeps notes and MPE parameters; LED lights up.
- Panic: all notes off.

Options panel (hide/show menu)
------------------------------
- MIDI In/Out: device selection.
- Scale & Root: scale type and root note.
- Octaves: visible octaves.
- Inversion/Spread: chord voicing.
- PB Range: pitch bend range (+/- 2, 12, 24, 48).
- Thru: pass MIDI In directly to Out.
- Snap: tuning attraction zone.
- Dead-Center + DC Force: stronger center locking.
- Link YZ: link pressure to Y.
- Preset: save/load configurations.
- Full: fullscreen.

Chords
------
- Chromatic modes: semitone intervals (Maj, Min, Dom, Dim, Aug, 9, 11, 13, etc).
- Auto (Diatonic / 7th): scale-based chords.
- ON/OFF: OFF disables chords, ON restores last chord.

Advanced Hold
-------------
- With Hold on, notes keep their current MPE parameters.
- Circles stay at the original position.
- You can grab a held circle and move it to change the sound.
- If a chord is held, dragging moves the held note.

Presets
-------
Presets are saved in `localStorage` (`genca_presets_v1`).
They also store MIDI In/Out when available.

FAQ
---
Q: Why do I see two "C" notes?
A: The grid includes the octave note. You can hide the label if needed.

Q: Why is the tuner slightly off?
A: The cell center is now in tune. Use Dead-Center for stronger lock.

Q: With Thru on I do not hear MPE.
A: Thru is pass-through and disables internal MPE handling.

Glossary
--------
- MPE: MIDI Polyphonic Expression (notes on separate channels).
- PB Range: pitch bend range in semitones.
- Snap: tuning attraction zone.
- Dead-Center: strong center lock in each cell.
- Slide (CC74): timbre control on Y axis.
- Pressure: aftertouch/pressure on Z axis.
- Hold: keeps notes and MPE parameters.
- Panic: all notes off.
- Thru: forwards MIDI In to MIDI Out.
- Inversion: rotates chord notes.
- Spread: opens voicing by spacing notes.
