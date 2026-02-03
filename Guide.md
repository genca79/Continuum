GENCA MPE ULTRA CONTINUUM: MANUALE UTENTE (ITA)
INTRODUZIONE: IL SENSO MUSICALE
La musica digitale è stata a lungo limitata dalla natura statica delle tastiere standard: una volta premuto un tasto, il timbro e l'intonazione rimangono invariati. GENCA MPE nasce per rompere questa barriera, portando la fluidità e l'emotività degli strumenti acustici (come il violino, la chitarra o la voce umana) nel dominio dei sintetizzatori digitali.

Il senso profondo di questo controller risiede in due concetti chiave:

Scolpire il Suono: La possibilità di modellare l'evoluzione di una nota dopo il suo attacco, permettendo vibrati, glissati e morphing timbrici dinamici.

Intenzione vs Tecnica: Attraverso la griglia diatonica a 8 note e il motore armonico, lo strumento riduce la possibilità di errore formale, permettendo all'esecutore di concentrarsi esclusivamente sull'espressione.

1. CONFIGURAZIONE E ROUTING MIDI
Collegamento Hardware
Collegare il dispositivo touch al computer via USB (impostare il dispositivo in modalità "MIDI").

Collegare una tastiera MIDI esterna (opzionale per la modalità ibrida) al computer.

Routing della DAW
Traccia Ponte (Bridge): Creare una traccia MIDI che riceve segnale dalla tastiera fisica e lo invia al dispositivo touch. Monitor impostato su "IN".

Traccia Strumento: Creare una traccia con un plugin compatibile MPE. Impostare l'ingresso MIDI proveniente dal dispositivo touch. È fondamentale abilitare la modalità MPE all'interno del plugin per interpretare correttamente i dati XYZ.

2. MODALITÀ DI ESECUZIONE IBRIDA
Il controller è stato progettato per operare in due modi distinti ma complementari:

A. Modalità Standalone (Solo Touch)
In questo scenario, il dispositivo touch è lo strumento principale.

Esecuzione: Ogni tocco sulla griglia genera una nuova nota (o un accordo, se attivato).

Dinamica (Y-Velocity): La forza dell'attacco è determinata dalla posizione verticale iniziale del dito. Il sistema usa una curva logaritmica: toccare la parte alta del tasto produce note forti, la parte bassa note piano.

Feedback: Sullo schermo appaiono cerchi colorati che indicano il canale MPE attivo (2-16).

B. Modalità Ibrida (Tastiera Fisica + Touch)
Questa modalità fonde la risposta tattile dei tasti meccanici con l'espressività millimetrica della superficie touch.

Trigger Esterno: Quando suoni una nota sulla tastiera fisica, la Web App riceve l'informazione ma non genera un nuovo suono.

Il Cerchio Fantasma (Auto-Grab): Sullo schermo appare un cerchio verde pulsante in corrispondenza della nota premuta fisicamente.

L'Aggancio (Grab): Appoggiando il dito sul cerchio verde, l'utente "afferra" la nota. Da quel momento, il controllo XYZ passa al touch: puoi eseguire un vibrato o uno slide su una nota che hai innescato con la tastiera fisica.

3. L'INTERFACCIA E IL MOTORE MPE
Controllo XYZ
X (Orizzontale): Pitch Bend continuo per glissati e vibrati.

Y (Verticale): MIDI CC74 (Slide). Solitamente mappato alla frequenza di taglio del filtro o alla variazione del timbro.

Z (Pressione): Aftertouch polifonico simulato tramite l'area di contatto del dito sullo schermo.

Griglia Diatonica a 8 Note
La superficie è divisa in ottave "intelligenti": ogni ottava visiva contiene esattamente 8 tasti della scala selezionata. Questo garantisce che la distanza fisica tra due note (es. dalla fondamentale all'ottava) sia sempre costante, facilitando la memoria muscolare.

Chord Engine & Performance Bar
Chord Mode: Genera strutture armoniche (Triadi, 7th, 9th, Wide Pad) con un solo tocco.

Inversion & Spread: Permette di ribaltare o allargare gli accordi per una sonorità più orchestrale.

Hold: Mantiene le note attive, permettendo di manipolare il suono senza dover mantenere la pressione costante.

Panic: Interruttore di emergenza per azzerare istantaneamente tutti i segnali MIDI.

USER MANUAL: GENCA MPE ULTRA CONTINUUM (ENG)
INTRODUCTION: THE MUSICAL PURPOSE
Digital music has long been restricted by the static nature of standard keyboards: once a key is pressed, the timbre and pitch remain unchanged. GENCA MPE was born to break this barrier, bringing the fluidity and emotionality of acoustic instruments (such as violin, guitar, or human voice) into the digital synthesizer domain.

The core purpose of this controller lies in two key concepts:

Sculpting the Sound: The ability to shape the evolution of a note after its attack, allowing for dynamic vibrato, glissandi, and timbral morphing.

Intent vs. Technique: Through the 8-note diatonic grid and harmonic engine, the instrument reduces the possibility of formal error, allowing the performer to focus purely on expression.

1. MIDI SETUP AND ROUTING
Hardware Connection
Connect the touch device to the computer via USB (set the device to "MIDI mode").

Connect an external MIDI keyboard (optional for hybrid mode) to the computer.

DAW Routing
Bridge Track: Create a MIDI track that receives signal from the physical keyboard and sends it to the touch device. Set Monitor to "IN."

Instrument Track: Create a track with an MPE-compatible plugin. Set the MIDI input to come from the touch device. It is essential to enable MPE mode within the plugin to correctly interpret XYZ data.

2. HYBRID PERFORMANCE MODES
The controller is designed to operate in two distinct yet complementary ways:

A. Standalone Mode (Touch Only)
In this scenario, the touch device is the primary instrument.

Performance: Each touch on the grid generates a new note (or a chord, if activated).

Dynamics (Y-Velocity): The attack strength is determined by the initial vertical position of the finger. The system uses a logarithmic curve: touching the top of the key produces loud notes, the bottom produces soft notes.

Feedback: Colored circles appear on the screen indicating the active MPE channel (2-16).

B. Hybrid Mode (Physical Keyboard + Touch)
This mode merges the tactile response of mechanical keys with the micro-precision expressiveness of the touch surface.

External Trigger: When you play a note on the physical keyboard, the Web App receives the data but does not trigger a new sound.

The Phantom Circle (Auto-Grab): A pulsing green circle appears on the screen corresponding to the physically pressed note.

The Grab: By placing a finger on the green circle, the user "grabs" the note. From that moment, XYZ control is handed over to the touch surface: you can perform vibrato or slides on a note you triggered with the physical keyboard.

3. INTERFACE AND MPE ENGINE
XYZ Control
X (Horizontal): Continuous Pitch Bend for glissandi and vibrato.

Y (Vertical): MIDI CC74 (Slide). Usually mapped to filter cutoff or timbre variation.

Z (Pressure): Polyphonic Aftertouch simulated by the finger's contact area on the screen.

8-Note Diatonic Grid
The surface is divided into "smart" octaves: each visual octave contains exactly 8 keys of the selected scale. This ensures that the physical distance between two notes (e.g., from root to octave) is always constant, aiding muscle memory.

Chord Engine & Performance Bar
Chord Mode: Generates harmonic structures (Triads, 7ths, 9ths, Wide Pad) with a single touch.

Inversion & Spread: Allows for flipping or widening chords for a more orchestral or cinematic sound.

Hold: Keeps notes active, allowing sound manipulation without having to maintain constant pressure.

Panic: Emergency switch to instantly reset all MIDI signals.