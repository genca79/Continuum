
const canvas = document.getElementById('surface');
const ctx = canvas.getContext('2d');
const CANVAS_FONT_FAMILY = "'Segoe UI', Roboto, sans-serif";
const els = {
    ui: document.getElementById('ui'),
    performance: document.getElementById('performance'),
    overlayToggle: document.getElementById('overlayToggle'),
    gestureOverlay: document.getElementById('gestureOverlay'),
    overlayModeToggle: document.getElementById('overlayModeToggle'),
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
    midiInMpe: document.getElementById('midiInMpe'),
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
    fadeTime: document.getElementById('fadeTime'),
    fadeSeconds: document.getElementById('fadeSeconds'),
    chordWheel: document.getElementById('chordWheel'),
    arpWheel: document.getElementById('arpWheel'),
    arpParamsToggle: document.getElementById('arpParamsToggle'),
    arpParamsPanel: document.getElementById('arpParamsPanel'),
    keepBtn: document.getElementById('keepBtn'),
    midiStatus: document.getElementById('midiStatus'),
    audioStart: document.getElementById('audioStart'),
    audioStatus: document.getElementById('audioStatus'),
    sampleSetSelect: document.getElementById('sampleSetSelect'),
    sampleSetSelectMini: document.getElementById('sampleSetSelectMini'),
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
    fxPresetName: document.getElementById('fxPresetName'),
    fxPresetSave: document.getElementById('fxPresetSave'),
    fxPresetDel: document.getElementById('fxPresetDel'),
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
    matrixToggle: document.getElementById('matrixToggle'),
    matrixSceneSelect: document.getElementById('matrixSceneSelect'),
    matrixSceneDesc: document.getElementById('matrixSceneDesc'),
    amTone: document.getElementById('amTone'),
    amBias: document.getElementById('amBias'),
    melodyToggle: document.getElementById('melodyToggle'),
    melodyLatchPerf: document.getElementById('melodyLatchPerf'),    melodyPerfToggle: document.getElementById('melodyPerfToggle'),
    melodyVolumePerf: document.getElementById('melodyVolumePerf'),
    melodyStateBadge: document.getElementById('melodyStateBadge'),
    melodyStateDesc: document.getElementById('melodyStateDesc'),
    melodyStatusLog: document.getElementById('melodyStatusLog'),
    melodyStatusLogInline: document.getElementById('melodyStatusLogInline'),
    melodyActiveIndicator: document.getElementById('melodyActiveIndicator'),
    melodyStyle: document.getElementById('melodyStyle'),
    melodyLength: document.getElementById('melodyLength'),
    melodyRate: document.getElementById('melodyRate'),
    melodyDensity: document.getElementById('melodyDensity'),
    melodyRange: document.getElementById('melodyRange'),
    melodySeed: document.getElementById('melodySeed'),
    melodyCadence: document.getElementById('melodyCadence'),
    melodyRebuild: document.getElementById('melodyRebuild'),
    melodyKeepImported: document.getElementById('melodyKeepImported'),
    melodyPreview: document.getElementById('melodyPreview'),
    melodyRuleSelect: document.getElementById('melodyRuleSelect'),
    melodyRhythmMode: document.getElementById('melodyRhythmMode'),
    melodyRhythmPattern: document.getElementById('melodyRhythmPattern'),
    melodyRuleSummary: document.getElementById('melodyRuleSummary'),
    melodyHumanizeAmount: document.getElementById('melodyHumanizeAmount'),
    melodyHumanTiming: document.getElementById('melodyHumanTiming'),
    melodyHumanVelocity: document.getElementById('melodyHumanVelocity'),
    melodyHumanSwing: document.getElementById('melodyHumanSwing'),
    melodyHumanLegato: document.getElementById('melodyHumanLegato'),
    melodyHumanOrnament: document.getElementById('melodyHumanOrnament'),
    melodyHumanPress: document.getElementById('melodyHumanPress'),
    melodyHumanTimbre: document.getElementById('melodyHumanTimbre'),
    melodyHumanPitch: document.getElementById('melodyHumanPitch'),
    melodyHumanYMotion: document.getElementById('melodyHumanYMotion'),
    melodyHumanYMotionToggle: document.getElementById('melodyHumanYMotionToggle'),
    melodyHumanTimingEff: document.getElementById('melodyHumanTimingEff'),
    melodyHumanVelocityEff: document.getElementById('melodyHumanVelocityEff'),
    melodyHumanSwingEff: document.getElementById('melodyHumanSwingEff'),
    melodyHumanLegatoEff: document.getElementById('melodyHumanLegatoEff'),
    melodyHumanOrnamentEff: document.getElementById('melodyHumanOrnamentEff'),
    melodyHumanPressEff: document.getElementById('melodyHumanPressEff'),
    melodyHumanTimbreEff: document.getElementById('melodyHumanTimbreEff'),
    melodyHumanPitchEff: document.getElementById('melodyHumanPitchEff'),
    melodyHumanYMotionEff: document.getElementById('melodyHumanYMotionEff'),
    melodyHumanYMotionToggleEff: document.getElementById('melodyHumanYMotionToggleEff'),
    melodyMpePerNote: document.getElementById('melodyMpePerNote'),
    melodyImportFile: document.getElementById('melodyImportFile'),
    melodyImportBtn: document.getElementById('melodyImportBtn'),
    melodyImportSnap: document.getElementById('melodyImportSnap'),
    melodyImportStatus: document.getElementById('melodyImportStatus'),
    melodyImportAdvancedBtn: document.getElementById('melodyImportAdvancedBtn'),
    melodyImportAdvancedStatus: document.getElementById('melodyImportAdvancedStatus'),
    melodyContinueBtn: document.getElementById('melodyContinueBtn'),
    melodyContinueSteps: document.getElementById('melodyContinueSteps'),
    melodyContinueTemp: document.getElementById('melodyContinueTemp'),
    melodyContinueRhythm: document.getElementById('melodyContinueRhythm'),
   // melodyContinueAuto: document.getElementById('melodyContinueAuto'),
    melodyContinueScale: document.getElementById('melodyContinueScale'),
    melodyContinueStatus: document.getElementById('melodyContinueStatus'),
    melodyContinueReset: document.getElementById('melodyContinueReset'),
    melodyLayerToggle: document.getElementById('melodyLayerToggle'),
    melodyLayerMode: document.getElementById('melodyLayerMode'),
    melodyLayerLevel: document.getElementById('melodyLayerLevel'),
    melodySeqEditor: document.getElementById('melodySeqEditor'),
    melodyRollCanvas: document.getElementById('melodyRollCanvas'),
    melodyRollLabels: document.getElementById('melodyRollLabels'),
    melodyRollZoomH: document.getElementById('melodyRollZoomH'),
    melodyRollZoom: document.getElementById('melodyRollZoom'),
    melodyRollScroll: document.getElementById('melodyRollScroll'),
    melodyRollScrollWrap: document.getElementById('melodyRollScrollWrap'),
    melodyEditStatus: document.getElementById('melodyEditStatus'),
    melodyEditHint: document.getElementById('melodyEditHint'),
    melodyRatePerf: document.getElementById('melodyRatePerf'),
    melodyLayerPerf: document.getElementById('melodyLayerPerf'),
    melodySeedPerfDown: document.getElementById('melodySeedPerfDown'),
    melodySeedPerfUp: document.getElementById('melodySeedPerfUp'),
    melodySeedPerfVal: document.getElementById('melodySeedPerfVal'),
    melodyCadencePerf: document.getElementById('melodyCadencePerf'),
    melodySaveName: document.getElementById('melodySaveName'),
    melodySaveBtn: document.getElementById('melodySaveBtn'),
    melodySaveSelect: document.getElementById('melodySaveSelect'),
    // Audio Recorder elements
    recStartBtn: document.getElementById('recStartBtn'),
    recStopBtn: document.getElementById('recStopBtn'),
    recTimer: document.getElementById('recTimer'),
    recControls: document.getElementById('recControls'),
    // Recording Editor elements
    recEditorModal: document.getElementById('recEditorModal'),
    recEditorClose: document.getElementById('recEditorClose'),
    recWaveformCanvas: document.getElementById('recWaveformCanvas'),
    recSelection: document.getElementById('recSelection'),
    recPlayhead: document.getElementById('recPlayhead'),
    recDuration: document.getElementById('recDuration'),
    recSelectionInfo: document.getElementById('recSelectionInfo'),
    recPlayBtn: document.getElementById('recPlayBtn'),
    recStopPlayBtn: document.getElementById('recStopPlayBtn'),
    recClearSelBtn: document.getElementById('recClearSelBtn'),
    recFileName: document.getElementById('recFileName'),
    recSaveBtn: document.getElementById('recSaveBtn'),
    recDiscardBtn: document.getElementById('recDiscardBtn')
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
    // Main tabs (MIDI, SAMPLER, SCALE, MELODY, ADVANCED)
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
            if (target === 'melody') resizeMelodyRollCanvas();
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

    // Sub-tabs inside MELODY
    const melodySubTabs = document.querySelectorAll('#melodySubTabs .ui-tab');
    const melodySubContents = document.querySelectorAll('#tabMelody .ui-subtab-content');

    melodySubTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.subtab;
            melodySubTabs.forEach(t => t.classList.remove('active'));
            melodySubContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const content = document.querySelector(`[data-subtab-content="${target}"]`);
            if (content) content.classList.add('active');
            if (target === 'melody-main') resizeMelodyRollCanvas();
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
            if (activeVoice.oscA) activeVoice.oscA.stop(now + 0.03);
            if (activeVoice.oscB) activeVoice.oscB.stop(now + 0.03);
        } catch(e) {}
    }
    // Delete voice immediately so the new one starts fresh
    state.audio.voices.delete(key);
    
    const m = voiceObj.lastM || { press: 90 };
    const press = m.press || 90;
    // Restart with override - creates new voice with fresh startTime
    noteOnInternal(voiceObj.note, press, voiceObj.chan, attackTime);
}
const PRESET_KEY = 'genca_presets_v1';
const MPE_PRESET_KEY = 'genca_mpe_presets_v1';
const MELODY_SAVE_KEY = 'genca_melody_saves_v1';
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
const FX_USER_PRESETS_KEY = 'genca_fx_presets_v1';
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
const WAVETABLE_HARMONICS = 128;
const MORPH_GRID_STEPS = 64;
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
    },
    'Ghost Reverse': {
        ...DEFAULT_FX,
        attack: 0.4,
        decay: 0.8,
        sustain: 0.85,
        release: 2.0,
        filterCutoff: 5000,
        filterEnv: 0.2,
        delayTime: 0.8,
        delayFeedback: 0.7,
        delayDry: 0.35,
        delayWet: 0.55,
        delayReverseMix: 0.85,
        reverbDecay: 7.5,
        reverbDry: 0.7,
        reverbWet: 0.4,
        fxMix: 0.8
    }
};
const LOCAL_SUPPRESS_MS = 140;
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
    keepEnabled: false,
    presets: {},
    mpePresets: {},
    customScales: {},
    fxUserPresets: {},
    scaleNotes: { notes: [], root: 0, scale: '' },
    gridCache: null,
    overlay: { active: false, side: 'right' },
    fadeState: { active: false, start: 0, durationMs: 0 },
    drawRaf: null,
    scaleUpdateRaf: null,
    fadeTimer: null,
    pointerIds: new Set(),
    heldVoices: [],
    arpHoldTouches: [],
    arpColorIndex: 0,
    melody: {
        enabled: false,
        running: false,
        timer: null,
        offTimer: null,
        stepIndex: 0,
        currentStep: 0,
        notes: [],
        lastNote: null,
        lastNotes: [],
        activeLabel: { note: null, until: 0 },
        seed: 1,
        style: 'balanced',
        length: 16,
        rate: '1/16',
        density: 0.8,
        range: 14,
        cadence: 'tonic',
        chan: 1,
        mpePerNote: true,
        lastVoices: [],
        voiceKeys: new Set(),
        virtualPhase: null,
        lastVirtualY: null,
        imported: false,
        importedFeatures: null,
        latchEnabled: false,
        latchScale: null,
        volume: 1,
        latchPrevChan: null,
        latchPrevMpePerNote: null,
        layer: {
            enabled: false,
            mode: 'triad',
            level: 70
        },
        edit: {
            enabled: true,
            step: 0
        },
        rules: {
            stepwise: false,
            motif: false,
            rhythm: false,
            leaps: false
        },
        roll: {
            zoom: 1,
            offset: 0,
            stepPx: 20,
            selection: new Set(), // Per memorizzare gli step selezionati
            dragging: false       // Stato del trascinamento
        },
        humanize: {
            timing: 8,
            velocity: 30,
            swing: 60,
            legato: 100,
            ornament: 10,
            press: 40,
            timbre: 80,
            pitch: 10,
            yMotion: 100,
            yMotionEnabled: true
        },
        pendingTimers: [],
        saves: {}
    },
    holdGroupSeq: 1,
    audio: {
        enabled: true,
        activeSet: 'Default',
        loopGlobal: false,
        ctx: null,
        master: null,
        dryGain: null,
        melodyGain: null,
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
        wavetableCoeffs: null,
        wavetableMorphGrid: null,
        wavetable: {
            mode: 'layer',
            type: 'Saw',
            mix: 0.35
        },
        macro: {
            morph: 0.5,
            texture: 0
        },
        crossMod: {
            mode: 'fm',
            depth: 0,
            amTone: 5000,
            amBias: 0.15
        },
        dynamicVelocity: true,
        samplerGain: 1,
        maxSamplerVoices: 24,
        samples: [],
        voices: new Map(),
        channelPb: new Map(),
        channelPress: new Map(),
        channelTimbre: new Map(),
        bowMode: false,
        fx: { ...DEFAULT_FX },
        fxActiveGroup: 'filter',
        fxEnabled: false,
        matrix: {
            enabled: false,
            scene: 'Aether',
            macros: { a: 0, b: 0, c: 0, d: 0 },
            snapshot: null
        }
    },
    // Audio Recorder state
    recorder: {
        isRecording: false,
        workletNode: null,
        silentSink: null,
        startTime: 0,
        timerInterval: null,
        maxDurationSec: 300, // 5 minutes max to prevent memory issues
        // Editor state
        buffers: null,
        sampleRate: 44100,
        leftData: null,
        rightData: null,
        selectionStart: 0,
        selectionEnd: 1,
        isPlaying: false,
        playbackSource: null,
        playheadInterval: null,
        playStartTime: 0
    }
};
const FADE_TAIL_MS = 200;
const FADE_EASE_POW = 2.2;
const ECHO_TAIL_STEPS = 7;
const ECHO_INTERVAL_MS = 140;
const ECHO_NOTE_MS = 90;
const ECHO_DECAY = 0.75;
const FADE_ECHO_ENABLED = true;
const WAVETABLE_ORDER = ['Saw', 'Square', 'Triangle', 'PWM', 'Formant'];
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
const MATRIX_SCENES = {
    Aether: {
        desc: 'Airy shimmer with smooth morphing.',
        base: { wtmix: 0.55, morph: 0.2, mod: 0.15, space: 0.45, cutoff: 12000 },
        weights: {
            a: { morph: 0.5, cutoff: 0.2 },
            b: { wtmix: 0.4, space: 0.2 },
            c: { mod: 0.6, morph: -0.15 },
            d: { space: 0.6, cutoff: -0.3 }
        }
    },
    Metal: {
        desc: 'Metallic growl and tight edge.',
        base: { wtmix: 0.7, morph: 0.65, mod: 0.35, space: 0.2, cutoff: 8000 },
        weights: {
            a: { mod: 0.7, morph: 0.2 },
            b: { morph: 0.45, cutoff: -0.25 },
            c: { wtmix: 0.3, mod: 0.35 },
            d: { space: 0.4, cutoff: -0.2 }
        }
    },
    Bloom: {
        desc: 'Wide, evolving pad textures.',
        base: { wtmix: 0.5, morph: 0.35, mod: 0.2, space: 0.6, cutoff: 14000 },
        weights: {
            a: { space: 0.5, cutoff: 0.2 },
            b: { morph: 0.4, wtmix: 0.2 },
            c: { mod: 0.5, morph: -0.1 },
            d: { space: 0.4, wtmix: -0.2 }
        }
    }
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
        if (!state.audio.ctx) await initAudioContext();
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
            await initAudioContext();
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

async function initAudioContext() {
    if (state.audio.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    state.audio.ctx = new AudioCtx();
    state.audio.master = state.audio.ctx.createGain();
    state.audio.dryGain = state.audio.ctx.createGain();
    state.audio.melodyGain = state.audio.ctx.createGain();
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
    state.audio.reverseDelay = await createReverseDelayNode(state.audio.ctx);
    state.audio.reverseWetGain = state.audio.ctx.createGain();
    state.audio.reverbInput = state.audio.ctx.createGain();
    state.audio.convolver = state.audio.ctx.createConvolver();
    state.audio.reverbWetGain = state.audio.ctx.createGain();
    state.audio.reverbDryGain = state.audio.ctx.createGain();
    state.audio.master.gain.value = 0.8;
    state.audio.melodyGain.gain.value = Math.max(0, Math.min(1, Number.isFinite(state.melody?.volume) ? state.melody.volume : 1));
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
    state.audio.melodyGain.connect(state.audio.dryGain);
    state.audio.melodyGain.connect(state.audio.fxSend);
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
    state.audio.wavetableCoeffs = buildWavetableCoeffs();
    state.audio.wavetableMorphGrid = buildWavetableMorphGrid(
        state.audio.ctx,
        state.audio.wavetableCoeffs,
        WAVETABLE_ORDER,
        MORPH_GRID_STEPS
    );
    state.audio.chorusLfo.start();
}

async function resumeAudioContext() {
    await initAudioContext();
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
        
        // Connect master output to recorder WITHOUT connecting worklet to destination
        // This avoids double audio path (master already connects to destination)
        // Worklet only captures audio, doesn't need to output anything
        state.audio.master.connect(state.recorder.workletNode);
        // Create a silent sink (gain=0) to keep the worklet processing without adding volume
        state.recorder.silentSink = state.audio.ctx.createGain();
        state.recorder.silentSink.gain.value = 0;
        state.recorder.workletNode.connect(state.recorder.silentSink);
        state.recorder.silentSink.connect(state.audio.ctx.destination);
        
        // Handle messages from worklet
        state.recorder.workletNode.port.onmessage = (event) => {
            if (event.data.command === 'buffers') {
                // Open editor instead of direct export
                openRecordingEditor(event.data.buffers, event.data.sampleRate);
            }
        };
        
        return true;
    } catch (err) {
        console.error('Failed to init recorder worklet:', err);
        return false;
    }
}

async function startRecording() {
    // Initialize audio context if needed (even if enabled flag is true)
    if (!state.audio.ctx || !state.audio.master) {
        await initAudioContext();
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
    
    // Auto-stop if max duration reached
    if (elapsed >= state.recorder.maxDurationSec) {
        console.log('Recording auto-stopped: max duration reached');
        stopRecording();
    }
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

// === RECORDING EDITOR FUNCTIONS ===

function openRecordingEditor(buffers, sampleRate) {
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
    
    // Store merged data only (don't keep original chunks to save memory)
    state.recorder.buffers = null; // Clear chunks - we have merged data now
    state.recorder.sampleRate = sampleRate || 44100;
    state.recorder.leftData = leftData;
    state.recorder.rightData = rightData;
    state.recorder.selectionStart = 0;
    state.recorder.selectionEnd = 1;
    
    // Set default filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    if (els.recFileName) els.recFileName.value = `GENCA_Recording_${timestamp}`;
    
    // Show modal
    if (els.recEditorModal) {
        els.recEditorModal.classList.add('active');
    }
    
    // Draw waveform
    drawWaveform();
    updateSelectionUI();
    
    // Update duration display
    const duration = totalSamples / state.recorder.sampleRate;
    if (els.recDuration) {
        els.recDuration.textContent = `Duration: ${formatTime(duration)}`;
    }
}

function closeRecordingEditor() {
    stopRecordingPlayback();
    if (els.recEditorModal) {
        els.recEditorModal.classList.remove('active');
    }
    // Clear buffers
    state.recorder.buffers = null;
    state.recorder.leftData = null;
    state.recorder.rightData = null;
}

function drawWaveform() {
    const canvas = els.recWaveformCanvas;
    if (!canvas || !state.recorder.leftData) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    
    // Set canvas resolution
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Clear
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, width, height);
    
    // Draw center line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    
    // Draw waveform (mono mix for display)
    const left = state.recorder.leftData;
    const right = state.recorder.rightData;
    const samples = left.length;
    const samplesPerPixel = Math.ceil(samples / width);
    
    ctx.strokeStyle = '#00f2ff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    
    for (let x = 0; x < width; x++) {
        const startSample = Math.floor(x * samples / width);
        const endSample = Math.min(startSample + samplesPerPixel, samples);
        
        let min = 1, max = -1;
        for (let i = startSample; i < endSample; i++) {
            const mono = (left[i] + right[i]) / 2;
            if (mono < min) min = mono;
            if (mono > max) max = mono;
        }
        
        const yMin = ((1 - max) / 2) * height;
        const yMax = ((1 - min) / 2) * height;
        
        if (x === 0) {
            ctx.moveTo(x, yMin);
        }
        ctx.lineTo(x, yMin);
        ctx.lineTo(x, yMax);
    }
    
    ctx.stroke();
}

function updateSelectionUI() {
    const canvas = els.recWaveformCanvas;
    const selection = els.recSelection;
    const info = els.recSelectionInfo;
    
    if (!canvas || !selection) return;
    
    const width = canvas.offsetWidth;
    const start = state.recorder.selectionStart;
    const end = state.recorder.selectionEnd;
    
    if (start === 0 && end === 1) {
        // Full selection - hide selection div
        selection.classList.remove('active');
        if (info) info.textContent = 'Selection: Full';
    } else {
        selection.classList.add('active');
        selection.style.left = (start * width) + 'px';
        selection.style.width = ((end - start) * width) + 'px';
        
        if (info && state.recorder.leftData) {
            const totalDuration = state.recorder.leftData.length / state.recorder.sampleRate;
            const selStart = start * totalDuration;
            const selEnd = end * totalDuration;
            info.textContent = `Selection: ${formatTime(selStart)} - ${formatTime(selEnd)} (${formatTime(selEnd - selStart)})`;
        }
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(1);
    return `${mins}:${secs.padStart(4, '0')}`;
}

function startRecordingPlayback() {
    if (!state.recorder.leftData || !state.audio.ctx) return;
    
    stopRecordingPlayback();
    
    const left = state.recorder.leftData;
    const right = state.recorder.rightData;
    const sr = state.recorder.sampleRate;
    
    // Calculate selection range
    const startSample = Math.floor(state.recorder.selectionStart * left.length);
    const endSample = Math.floor(state.recorder.selectionEnd * left.length);
    const numSamples = endSample - startSample;
    
    if (numSamples <= 0) return;
    
    // Create audio buffer
    const buffer = state.audio.ctx.createBuffer(2, numSamples, sr);
    const leftCh = buffer.getChannelData(0);
    const rightCh = buffer.getChannelData(1);
    
    for (let i = 0; i < numSamples; i++) {
        leftCh[i] = left[startSample + i];
        rightCh[i] = right[startSample + i];
    }
    
    // Create source
    const source = state.audio.ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(state.audio.ctx.destination);
    
    source.onended = () => {
        stopRecordingPlayback();
    };
    
    state.recorder.playbackSource = source;
    state.recorder.isPlaying = true;
    state.recorder.playStartTime = state.audio.ctx.currentTime;
    
    // Update button states
    if (els.recPlayBtn) els.recPlayBtn.disabled = true;
    if (els.recStopPlayBtn) els.recStopPlayBtn.disabled = false;
    
    // Start playhead animation
    updatePlayhead();
    state.recorder.playheadInterval = setInterval(updatePlayhead, 50);
    
    source.start();
}

function stopRecordingPlayback() {
    if (state.recorder.playbackSource) {
        try {
            state.recorder.playbackSource.stop();
        } catch (e) {}
        state.recorder.playbackSource = null;
    }
    
    state.recorder.isPlaying = false;
    
    if (state.recorder.playheadInterval) {
        clearInterval(state.recorder.playheadInterval);
        state.recorder.playheadInterval = null;
    }
    
    // Update button states
    if (els.recPlayBtn) els.recPlayBtn.disabled = false;
    if (els.recStopPlayBtn) els.recStopPlayBtn.disabled = true;
    
    // Hide playhead
    if (els.recPlayhead) {
        els.recPlayhead.classList.remove('active');
    }
}

function updatePlayhead() {
    if (!state.recorder.isPlaying || !state.audio.ctx || !els.recPlayhead || !els.recWaveformCanvas) return;
    
    const elapsed = state.audio.ctx.currentTime - state.recorder.playStartTime;
    const left = state.recorder.leftData;
    const sr = state.recorder.sampleRate;
    
    const startSample = Math.floor(state.recorder.selectionStart * left.length);
    const endSample = Math.floor(state.recorder.selectionEnd * left.length);
    const selectionDuration = (endSample - startSample) / sr;
    
    if (elapsed >= selectionDuration) {
        stopRecordingPlayback();
        return;
    }
    
    const progress = elapsed / selectionDuration;
    const canvasWidth = els.recWaveformCanvas.offsetWidth;
    const selectionWidth = (state.recorder.selectionEnd - state.recorder.selectionStart) * canvasWidth;
    const selectionLeft = state.recorder.selectionStart * canvasWidth;
    
    els.recPlayhead.classList.add('active');
    els.recPlayhead.style.left = (selectionLeft + progress * selectionWidth) + 'px';
}

function clearRecordingSelection() {
    state.recorder.selectionStart = 0;
    state.recorder.selectionEnd = 1;
    updateSelectionUI();
}

function saveRecordingFromEditor() {
    if (!state.recorder.leftData || !state.recorder.rightData) return;
    
    const left = state.recorder.leftData;
    const right = state.recorder.rightData;
    const sr = state.recorder.sampleRate;
    
    // Get selection range
    const startSample = Math.floor(state.recorder.selectionStart * left.length);
    const endSample = Math.floor(state.recorder.selectionEnd * left.length);
    const numSamples = endSample - startSample;
    
    if (numSamples <= 0) return;
    
    // Extract selected portion
    const selectedLeft = left.slice(startSample, endSample);
    const selectedRight = right.slice(startSample, endSample);
    
    // Create WAV
    const wavBuffer = createWavBuffer(selectedLeft, selectedRight, sr);
    
    // Get filename
    let filename = els.recFileName ? els.recFileName.value.trim() : '';
    if (!filename) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        filename = `GENCA_Recording_${timestamp}`;
    }
    // Ensure .wav extension
    if (!filename.toLowerCase().endsWith('.wav')) {
        filename += '.wav';
    }
    
    // Download
    const blob = new Blob([wavBuffer], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    
    // Close editor
    closeRecordingEditor();
}

function setupRecordingEditorEvents() {
    // Close button
    if (els.recEditorClose) {
        els.recEditorClose.onclick = closeRecordingEditor;
    }
    
    // Playback controls
    if (els.recPlayBtn) {
        els.recPlayBtn.onclick = startRecordingPlayback;
    }
    if (els.recStopPlayBtn) {
        els.recStopPlayBtn.onclick = stopRecordingPlayback;
        els.recStopPlayBtn.disabled = true;
    }
    
    // Clear selection
    if (els.recClearSelBtn) {
        els.recClearSelBtn.onclick = clearRecordingSelection;
    }
    
    // Save/Discard
    if (els.recSaveBtn) {
        els.recSaveBtn.onclick = saveRecordingFromEditor;
    }
    if (els.recDiscardBtn) {
        els.recDiscardBtn.onclick = closeRecordingEditor;
    }
    
    // Waveform selection (click and drag)
    const canvas = els.recWaveformCanvas;
    if (canvas) {
        let isDragging = false;
        let dragStart = 0;
        
        canvas.addEventListener('pointerdown', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            isDragging = true;
            dragStart = Math.max(0, Math.min(1, x));
            state.recorder.selectionStart = dragStart;
            state.recorder.selectionEnd = dragStart;
            canvas.setPointerCapture(e.pointerId);
        });
        
        canvas.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const rect = canvas.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            
            if (x < dragStart) {
                state.recorder.selectionStart = x;
                state.recorder.selectionEnd = dragStart;
            } else {
                state.recorder.selectionStart = dragStart;
                state.recorder.selectionEnd = x;
            }
            updateSelectionUI();
        });
        
        canvas.addEventListener('pointerup', (e) => {
            isDragging = false;
            canvas.releasePointerCapture(e.pointerId);
            
            // If very small selection, treat as full selection
            if (Math.abs(state.recorder.selectionEnd - state.recorder.selectionStart) < 0.01) {
                state.recorder.selectionStart = 0;
                state.recorder.selectionEnd = 1;
                updateSelectionUI();
            }
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (els.recEditorModal && els.recEditorModal.classList.contains('active')) {
            drawWaveform();
            updateSelectionUI();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && els.recEditorModal && els.recEditorModal.classList.contains('active')) {
            closeRecordingEditor();
        }
    });
}

// === END RECORDING EDITOR FUNCTIONS ===

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
    const names = [...Object.keys(FX_PRESETS), ...Object.keys(state.fxUserPresets || {})];
    [els.fxPresetSelect, els.fxPresetQuick].forEach(select => {
        if (!select) return;
        clearChildren(select);
        names.forEach(name => appendOption(select, name, name));
        select.value = names.includes(select.value) ? select.value : 'Init';
    });
}

function applyFxPreset(name) {
    const preset = (state.fxUserPresets && state.fxUserPresets[name]) || FX_PRESETS[name] || FX_PRESETS.Init;
    state.audio.fx = { ...DEFAULT_FX, ...preset };
    applyFxToUI();
    readFxFromUI();
    updateFxNodes();
    rebuildReverbImpulse();
    updateFxToggleButtons();
    updateFxValueDisplays();
    if (els.fxPresetSelect) els.fxPresetSelect.value = name;
    if (els.fxPresetQuick) els.fxPresetQuick.value = name;
    if (els.fxPresetName && state.fxUserPresets && state.fxUserPresets[name]) {
        els.fxPresetName.value = name;
    }
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
    if (enabled) {
        rebuildReverbImpulse();
    } else {
        resetFxBuffers();
    }
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

function setWavetableMode(mode) {
    const next = mode === 'layer' ? 'layer' : (mode === 'wt' ? 'wt' : 'sampler');
    state.audio.wavetable.mode = next;
    if (els.wtMode) els.wtMode.value = next;
    if (els.wtMixBox) els.wtMixBox.style.display = next === 'layer' ? '' : 'none';
    updateSamplerGainNodes();
    updateWavetableMix();
    if (state.audio.enabled) restartInternalFromActiveNotes();
}

function clamp01(value) {
    return Math.max(0, Math.min(1, value));
}

function getWavetableOrder() {
    const available = WAVETABLE_ORDER.filter(name => state.audio.wavetables && state.audio.wavetables[name]);
    if (available.length) return available;
    const fallback = Object.keys(state.audio.wavetables || {});
    return fallback.length ? fallback : Object.keys(WAVETABLES);
}

function getLayerWavetableMix() {
    return clamp01(state.audio.wavetable.mix);
}

function getMacroSamplerBlend() {
    return state.audio.wavetable.mode === 'layer' ? (1 - getLayerWavetableMix()) : 1;
}

function getMacroWavetableBlend() {
    return state.audio.wavetable.mode === 'layer' ? getLayerWavetableMix() : 1;
}

function getEffectiveWavetableMix() {
    return Math.max(0, Math.min(1, getMacroWavetableBlend()));
}

function getWavetableMorphState() {
    const order = getWavetableOrder();
    if (!order.length) return null;
    if (order.length === 1) {
        return { aType: order[0], bType: order[0], aGain: getEffectiveWavetableMix(), bGain: 0 };
    }
    const morph = clamp01(state.audio.macro.morph);
    const pos = morph * (order.length - 1);
    const idx = Math.floor(pos);
    const frac = pos - idx;
    const aType = order[idx];
    const bType = order[Math.min(order.length - 1, idx + 1)];
    const mix = getEffectiveWavetableMix();
    return { aType, bType, aGain: mix * (1 - frac), bGain: mix * frac };
}

function applyWavetableMorphToVoice(voice) {
    if (!voice || !voice.oscA || !voice.oscB || !voice.wtGainA || !voice.wtGainB || !state.audio.ctx) return;
    const order = getWavetableOrder();
    if (!order.length) return;
    const morph = clamp01(state.audio.macro.morph);
    const mix = getEffectiveWavetableMix();
    if (order.length === 1) {
        const wave = state.audio.wavetables[order[0]];
        if (wave) {
            voice.oscA.setPeriodicWave(wave);
            voice.oscB.setPeriodicWave(wave);
        }
        voice.wtGainA.gain.setTargetAtTime(mix, state.audio.ctx.currentTime, 0.02);
        voice.wtGainB.gain.setTargetAtTime(0, state.audio.ctx.currentTime, 0.02);
        return;
    }

    const grid = state.audio.wavetableMorphGrid;
    if (!grid || !grid.length) {
        const pos = morph * (order.length - 1);
        const idx = Math.floor(pos);
        const frac = pos - idx;
        const nextIdx = Math.min(order.length - 1, idx + 1);
        const lowType = order[idx];
        const highType = order[nextIdx];
        const lowWave = state.audio.wavetables[lowType];
        const highWave = state.audio.wavetables[highType];
        if (!voice.morphState) {
            voice.morphState = { lowIdx: idx, highIdx: nextIdx, lowOsc: 'A' };
            if (lowWave) voice.oscA.setPeriodicWave(lowWave);
            if (highWave) voice.oscB.setPeriodicWave(highWave);
        } else if (voice.morphState.lowIdx === idx && voice.morphState.highIdx === nextIdx) {
            // same segment, no reassignment
        } else if (idx === voice.morphState.highIdx) {
            // moving forward
            const newLowOsc = voice.morphState.lowOsc === 'A' ? 'B' : 'A';
            const otherOsc = newLowOsc === 'A' ? voice.oscB : voice.oscA;
            if (highWave) otherOsc.setPeriodicWave(highWave);
            voice.morphState = { lowIdx: idx, highIdx: nextIdx, lowOsc: newLowOsc };
        } else if (nextIdx === voice.morphState.lowIdx) {
            // moving backward
            const newLowOsc = voice.morphState.lowOsc === 'A' ? 'B' : 'A';
            const otherOsc = newLowOsc === 'A' ? voice.oscB : voice.oscA;
            if (lowWave) otherOsc.setPeriodicWave(lowWave);
            voice.morphState = { lowIdx: idx, highIdx: nextIdx, lowOsc: newLowOsc };
        } else {
            // jump: reset assignment
            voice.morphState = { lowIdx: idx, highIdx: nextIdx, lowOsc: 'A' };
            if (lowWave) voice.oscA.setPeriodicWave(lowWave);
            if (highWave) voice.oscB.setPeriodicWave(highWave);
        }
        const lowGain = mix * (1 - frac);
        const highGain = mix * frac;
        if (voice.morphState.lowOsc === 'A') {
            voice.wtGainA.gain.setTargetAtTime(lowGain, state.audio.ctx.currentTime, 0.02);
            voice.wtGainB.gain.setTargetAtTime(highGain, state.audio.ctx.currentTime, 0.02);
        } else {
            voice.wtGainA.gain.setTargetAtTime(highGain, state.audio.ctx.currentTime, 0.02);
            voice.wtGainB.gain.setTargetAtTime(lowGain, state.audio.ctx.currentTime, 0.02);
        }
        return;
    }

    const pos = morph * (order.length - 1);
    const segIdx = Math.min(grid.length - 1, Math.floor(pos));
    const seg = grid[segIdx];
    const segFrac = pos - segIdx;
    const stepPos = segFrac * MORPH_GRID_STEPS;
    const stepIdx = Math.floor(stepPos);
    const stepFrac = stepPos - stepIdx;
    const stepNext = Math.min(MORPH_GRID_STEPS, stepIdx + 1);
    const waveA = seg[stepIdx] || seg[0];
    const waveB = seg[stepNext] || waveA;
    if (!voice.morphGridState || voice.morphGridState.seg !== segIdx || voice.morphGridState.stepA !== stepIdx || voice.morphGridState.stepB !== stepNext) {
        if (waveA) voice.oscA.setPeriodicWave(waveA);
        if (waveB) voice.oscB.setPeriodicWave(waveB);
        voice.morphGridState = { seg: segIdx, stepA: stepIdx, stepB: stepNext };
    }
    const lowGain = mix * (1 - stepFrac);
    const highGain = mix * stepFrac;
    voice.wtGainA.gain.setTargetAtTime(lowGain, state.audio.ctx.currentTime, 0.02);
    voice.wtGainB.gain.setTargetAtTime(highGain, state.audio.ctx.currentTime, 0.02);
}

function updateWavetableMix() {
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => {
        applyWavetableMorphToVoice(v);
    });
}

function updateSamplerGainNodes() {
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => {
        if (!v.sampleGain || v.sampleGainValue == null) return;
        const blend = getMacroSamplerBlend();
        const next = Math.max(0, Math.min(5, state.audio.samplerGain * v.sampleGainValue * blend));
        v.sampleGain.gain.setTargetAtTime(next, state.audio.ctx.currentTime, 0.02);
    });
}

function getModDepthHz(value) {
    const norm = clamp01(value);
    const maxHz = 4000;
    const scaled = (Math.pow(10, norm * 2) - 1) / (Math.pow(10, 2) - 1);
    return scaled * maxHz;
}

function applyVoiceModRouting(voice) {
    if (!state.audio.ctx || !voice || !voice.ringGain) return;
    const now = state.audio.ctx.currentTime;
    const mode = state.audio.crossMod.mode;
    const depth = clamp01(state.audio.crossMod.depth);
    const depthScaled = depth;
    const amBias = clamp01(state.audio.crossMod.amBias);
    const hasModSource = !!voice.modSourceGain && !!voice.modGain;

    if (voice.modSourceGain) {
        try { voice.modSourceGain.disconnect(); } catch (err) {}
    }
    if (voice.modFilterLP) {
        try { voice.modFilterLP.disconnect(); } catch (err) {}
    }
    if (voice.modFilterHP) {
        try { voice.modFilterHP.disconnect(); } catch (err) {}
    }
    if (voice.modGain) {
        try { voice.modGain.disconnect(); } catch (err) {}
    }

    if (!hasModSource) {
        if (voice.ringGain) voice.ringGain.gain.setTargetAtTime(1, now, 0.02);
        return;
    }

    if (mode === 'fm') {
        if (depthScaled <= 0) {
            voice.ringGain.gain.setTargetAtTime(1, now, 0.02);
            return;
        }
        voice.modSourceGain.connect(voice.modFilterLP);
        voice.modFilterLP.connect(voice.modGain);
        voice.modGain.gain.setTargetAtTime(getModDepthHz(depthScaled), now, 0.02);
        if (voice.oscA) voice.modGain.connect(voice.oscA.frequency);
        if (voice.oscB) voice.modGain.connect(voice.oscB.frequency);
        voice.ringGain.gain.setTargetAtTime(1, now, 0.02);
    } else {
        if (depthScaled <= 0 && amBias <= 0) {
            voice.ringGain.gain.setTargetAtTime(1, now, 0.02);
            return;
        }
        voice.modSourceGain.connect(voice.modFilterHP);
        if (voice.modFilterLP) {
            voice.modFilterLP.type = 'lowpass';
            voice.modFilterLP.frequency.setTargetAtTime(state.audio.crossMod.amTone, now, 0.02);
            voice.modFilterHP.connect(voice.modFilterLP);
            voice.modFilterLP.connect(voice.modGain);
        } else {
            voice.modFilterHP.connect(voice.modGain);
        }
        const effectiveDepth = amBias + (1 - amBias) * depthScaled;
        voice.modGain.gain.setTargetAtTime(effectiveDepth, now, 0.02);
        voice.modGain.connect(voice.ringGain.gain);
        voice.ringGain.gain.setTargetAtTime(0, now, 0.02);
    }
}

function updateCrossModDepth() {
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => applyVoiceModRouting(v));
}

function updateOverlayFaderValue(name, value, force = false) {
    if (!els.gestureOverlay) return;
    if (!force && state.audio.matrix.enabled && ['wtmix', 'morph', 'depth', 'texture'].includes(name)) return;
    const faderEl = els.gestureOverlay.querySelector(`.overlay-fader[data-fader="${name}"]`);
    if (!faderEl) return;
    faderEl.style.setProperty('--fader-value', clamp01(value).toFixed(3));
}

function updateOverlayModeButton() {
    if (!els.overlayModeToggle) return;
    els.overlayModeToggle.dataset.mode = state.audio.crossMod.mode;
    els.overlayModeToggle.textContent = state.audio.crossMod.mode.toUpperCase();
}

function setMacroMorph(value) {
    state.audio.macro.morph = clamp01(value);
    const morphState = getWavetableMorphState();
    if (morphState) {
        state.audio.wavetable.type = morphState.aType;
        if (els.wtSelect) els.wtSelect.value = morphState.aType;
    }
    updateWavetableMix();
    if (!state.audio.matrix.enabled) {
        updateOverlayFaderValue('morph', state.audio.macro.morph);
    }
}

function setWavetableMix(value) {
    state.audio.wavetable.mix = clamp01(value);
    if (els.wtMix) {
        els.wtMix.value = state.audio.wavetable.mix.toFixed(2);
        updateRangeProgress(els.wtMix);
    }
    updateSamplerGainNodes();
    updateWavetableMix();
    if (!state.audio.matrix.enabled) {
        updateOverlayFaderValue('wtmix', state.audio.wavetable.mix);
    }
}

function setCrossModDepth(value) {
    state.audio.crossMod.depth = clamp01(value);
    updateCrossModDepth();
    if (!state.audio.matrix.enabled) {
        updateOverlayFaderValue('depth', state.audio.crossMod.depth);
    }
}

function setMacroTexture(value) {
    state.audio.macro.texture = clamp01(value);
    updateFxNodes();
    if (!state.audio.matrix.enabled) {
        updateOverlayFaderValue('texture', state.audio.macro.texture);
    }
}

function setCrossModMode(mode) {
    state.audio.crossMod.mode = mode === 'am' ? 'am' : 'fm';
    updateCrossModDepth();
    updateOverlayModeButton();
}

function setMatrixMacro(key, value) {
    const name = String(key || '').toLowerCase();
    if (!state.audio.matrix.macros.hasOwnProperty(name)) return;
    state.audio.matrix.macros[name] = clamp01(value);
    const faderMap = { a: 'wtmix', b: 'morph', c: 'depth', d: 'texture' };
    updateOverlayFaderValue(faderMap[name], state.audio.matrix.macros[name], true);
    applyMatrix();
}

function updateOverlayLabelsForMatrix(enabled) {
    if (!els.gestureOverlay) return;
    const labels = els.gestureOverlay.querySelectorAll('.overlay-fader .fader-label');
    if (labels.length < 4) return;
    if (enabled) {
        labels[0].textContent = 'MAC A';
        labels[1].textContent = 'MAC B';
        labels[2].textContent = 'MAC C';
        labels[3].textContent = 'MAC D';
    } else {
        labels[0].textContent = 'MIX';
        labels[1].textContent = 'MORPH';
        labels[2].textContent = 'MOD';
        labels[3].textContent = 'SPACE';
    }
}

function applyMatrix() {
    if (!state.audio.matrix.enabled) return;
    const scene = MATRIX_SCENES[state.audio.matrix.scene] || MATRIX_SCENES.Aether;
    const macros = state.audio.matrix.macros;
    Object.keys(MATRIX_DESTS).forEach(dest => {
        const def = MATRIX_DESTS[dest];
        const base = scene.base && scene.base[dest] != null ? scene.base[dest] : def.get();
        const span = def.max - def.min;
        let value = base;
        const weights = scene.weights || {};
        ['a', 'b', 'c', 'd'].forEach(key => {
            const weight = (weights[key] && weights[key][dest]) ? weights[key][dest] : 0;
            const macroVal = macros[key] ?? 0;
            value += weight * macroVal * span;
        });
        value = Math.max(def.min, Math.min(def.max, value));
        def.set(value);
    });
}

function setMatrixEnabled(isEnabled) {
    const enabled = !!isEnabled;
    if (state.audio.matrix.enabled === enabled) return;
    state.audio.matrix.enabled = enabled;
    if (enabled) {
        if (state.audio.wavetable.mode !== 'layer') {
            setWavetableMode('layer');
        }
        state.audio.matrix.snapshot = {
            wtmix: state.audio.wavetable.mix,
            morph: state.audio.macro.morph,
            mod: state.audio.crossMod.depth,
            space: state.audio.macro.texture,
            cutoff: state.audio.fx.filterCutoff
        };
        applyMatrix();
        setMatrixMacro('a', state.audio.matrix.macros.a);
        setMatrixMacro('b', state.audio.matrix.macros.b);
        setMatrixMacro('c', state.audio.matrix.macros.c);
        setMatrixMacro('d', state.audio.matrix.macros.d);
    } else if (state.audio.matrix.snapshot) {
        setWavetableMix(state.audio.matrix.snapshot.wtmix);
        setMacroMorph(state.audio.matrix.snapshot.morph);
        setCrossModDepth(state.audio.matrix.snapshot.mod);
        setMacroTexture(state.audio.matrix.snapshot.space);
        MATRIX_DESTS.cutoff.set(state.audio.matrix.snapshot.cutoff);
    }
    updateOverlayLabelsForMatrix(enabled);
    if (els.matrixToggle) {
        els.matrixToggle.classList.toggle('toggle-on', enabled);
        els.matrixToggle.classList.toggle('toggle-off', !enabled);
        els.matrixToggle.textContent = enabled ? 'MATRIX ON' : 'MATRIX OFF';
    }
}

function setMatrixScene(name) {
    const next = MATRIX_SCENES[name] ? name : 'Aether';
    state.audio.matrix.scene = next;
    if (els.matrixSceneSelect) els.matrixSceneSelect.value = next;
    if (els.matrixSceneDesc) els.matrixSceneDesc.textContent = MATRIX_SCENES[next].desc || '';
    if (state.audio.matrix.enabled) applyMatrix();
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
    if (state.audio.delayDryGain) {
        state.audio.delayDryGain.gain.value = state.audio.fxEnabled ? ((fx.delayOn ? fx.delayDry : 1)) : 0;
    }
    if (state.audio.reverseWetGain) state.audio.reverseWetGain.gain.value = (state.audio.fxEnabled && fx.delayOn) ? revWet : 0;
    const reverbWet = getEffectiveReverbWet();
    if (state.audio.reverbWetGain) state.audio.reverbWetGain.gain.value = (state.audio.fxEnabled && fx.reverbOn) ? reverbWet : 0;
    if (state.audio.reverbDryGain) {
        state.audio.reverbDryGain.gain.value = state.audio.fxEnabled ? ((fx.reverbOn ? fx.reverbDry : 1)) : 0;
    }
    if (state.audio.chorusLfo) state.audio.chorusLfo.frequency.value = fx.chorusRate;
    if (state.audio.chorusLfoGain) state.audio.chorusLfoGain.gain.value = (state.audio.fxEnabled && fx.chorusOn) ? fx.chorusDepth : 0;
    updateActiveFilters();
}

function resetFxBuffers() {
    if (!state.audio.ctx) return;
    const ctx = state.audio.ctx;

    if (state.audio.convolver) {
        state.audio.convolver.buffer = ctx.createBuffer(2, 1, ctx.sampleRate);
    }

    if (state.audio.reverseDelay && state.audio.reverseDelay._setDelaySamples) {
        const samples = Math.max(1, Math.floor(ctx.sampleRate * state.audio.fx.delayTime));
        state.audio.reverseDelay._setDelaySamples(samples);
    }

    if (state.audio.delay && state.audio.chorusDelay) {
        const oldDelay = state.audio.delay;
        try { state.audio.chorusDelay.disconnect(oldDelay); } catch (err) {}
        try { oldDelay.disconnect(); } catch (err) {}
        if (state.audio.delayFeedback) {
            try { state.audio.delayFeedback.disconnect(); } catch (err) {}
        }
        const delay = ctx.createDelay(2.0);
        delay.delayTime.value = state.audio.fx.delayTime;
        state.audio.delay = delay;
        state.audio.chorusDelay.connect(delay);
        if (state.audio.delayFeedback) {
            delay.connect(state.audio.delayFeedback);
            state.audio.delayFeedback.connect(delay);
        }
        if (state.audio.delayWetGain) delay.connect(state.audio.delayWetGain);
        if (state.audio.delayDryGain) delay.connect(state.audio.delayDryGain);
    }
}

function getEffectiveReverbWet() {
    const base = state.audio.fx.reverbWet;
    const texture = clamp01(state.audio.macro.texture);
    const shaped = base + (1 - base) * Math.pow(texture, 0.6);
    return clamp01(shaped + (0.35 * texture));
}

function getEffectiveRelease() {
    const base = state.audio.fx.release;
    const texture = clamp01(state.audio.macro.texture);
    if (!state.audio.fxEnabled) {
        if (texture <= 0) return 0;
        const floor = 0.45 * texture;
        return (base * texture * (1 + texture * 4.0)) + floor;
    }
    const floor = 0.45 * texture;
    return (base * (1 + texture * 4.0)) + floor;
}

const MIN_ENV_ATTACK = 0.005;
const MIN_ENV_RELEASE = 0.02;

const MATRIX_DESTS = {
    wtmix: {
        min: 0, max: 1,
        get: () => state.audio.wavetable.mix,
        set: value => setWavetableMix(value)
    },
    morph: {
        min: 0, max: 1,
        get: () => state.audio.macro.morph,
        set: value => setMacroMorph(value)
    },
    mod: {
        min: 0, max: 1,
        get: () => state.audio.crossMod.depth,
        set: value => setCrossModDepth(value)
    },
    space: {
        min: 0, max: 1,
        get: () => state.audio.macro.texture,
        set: value => setMacroTexture(value)
    },
    cutoff: {
        min: 60, max: 20000,
        get: () => state.audio.fx.filterCutoff,
        set: value => {
            state.audio.fx.filterCutoff = value;
            if (els.fxCutoff) {
                els.fxCutoff.value = Math.round(value);
                updateRangeProgress(els.fxCutoff);
            }
            updateFxNodes();
        }
    }
};

function updateActiveFilters() {
    const fx = state.audio.fx;
    const filterActive = state.audio.fxEnabled && fx.filterOn;
    const baseCutoff = filterActive ? Math.max(60, Math.min(20000, fx.filterCutoff)) : 20000;
    const q = filterActive ? Math.max(0.1, Math.min(20, fx.filterQ)) : 0.1;
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => {
        if (!v.filter) return;
        const adj = getTimbreAdjustedCutoff(v.chan, baseCutoff);
        v.filter.frequency.setTargetAtTime(adj, state.audio.ctx.currentTime, 0.02);
        v.filter.Q.setTargetAtTime(q, state.audio.ctx.currentTime, 0.02);
    });
}

function getTimbreAdjustedCutoff(chan, baseCutoff) {
    const timbre = state.audio.channelTimbre.get(chan);
    const norm = (Number.isFinite(timbre) ? timbre : 64) / 127;
    const curve = Math.pow(2, (norm - 0.5));
    return Math.max(60, Math.min(20000, baseCutoff * curve));
}

function updateChannelTimbre(chan) {
    const fx = state.audio.fx;
    const filterActive = state.audio.fxEnabled && fx.filterOn;
    const cutoff = filterActive ? Math.max(60, Math.min(20000, fx.filterCutoff)) : 20000;
    const q = filterActive ? Math.max(0.1, Math.min(20, fx.filterQ)) : 0.1;
    if (!state.audio.ctx) return;
    state.audio.voices.forEach(v => {
        if (v.chan !== chan || !v.filter) return;
        const adj = getTimbreAdjustedCutoff(chan, cutoff);
        v.filter.frequency.setTargetAtTime(adj, state.audio.ctx.currentTime, 0.02);
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

// AudioWorklet processor code embedded as string (avoids file loading issues)
const reverseDelayProcessorCode = `
class ReverseDelayProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super();
        const initialDelaySamples = options.processorOptions?.delaySamples || Math.floor(sampleRate * 0.3);
        this.delaySamples = Math.max(1, initialDelaySamples);
        this.feedback = 0;
        this.writeBuf = 0;
        this.readBuf = 1;
        this.writeIndex = 0;
        this.readIndex = this.delaySamples - 1;
        this.playing = false;
        this.buffers = [];
        this._initBuffers(this.delaySamples);
        this.port.onmessage = (event) => {
            const { type, value } = event.data;
            if (type === 'setFeedback') this.feedback = value || 0;
            else if (type === 'setDelaySamples') this._initBuffers(Math.max(1, Math.floor(value)));
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
    process(inputs, outputs) {
        const input = inputs[0];
        const output = outputs[0];
        if (!input || !input.length || !output || !output.length) return true;
        const inL = input[0] || new Float32Array(128);
        const inR = input.length > 1 ? input[1] : inL;
        const outL = output[0];
        const outR = output.length > 1 ? output[1] : outL;
        for (let i = 0; i < outL.length; i++) {
            let outSampleL = 0, outSampleR = 0;
            if (this.playing) {
                outSampleL = this.buffers[this.readBuf][0][this.readIndex];
                outSampleR = this.buffers[this.readBuf][1][this.readIndex];
                if (--this.readIndex < 0) this.playing = false;
            }
            this.buffers[this.writeBuf][0][this.writeIndex] = (inL[i] || 0) + outSampleL * this.feedback;
            this.buffers[this.writeBuf][1][this.writeIndex] = (inR[i] || 0) + outSampleR * this.feedback;
            outL[i] = outSampleL;
            outR[i] = outSampleR;
            if (++this.writeIndex >= this.delaySamples) {
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
`;

let reverseDelayWorkletRegistered = false;

async function createReverseDelayNode(ctx) {
    // Try to use AudioWorkletNode (modern, non-deprecated)
    try {
        if (!reverseDelayWorkletRegistered) {
            const blob = new Blob([reverseDelayProcessorCode], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            await ctx.audioWorklet.addModule(url);
            URL.revokeObjectURL(url);
            reverseDelayWorkletRegistered = true;
        }
        const workletNode = new AudioWorkletNode(ctx, 'reverse-delay-processor', {
            numberOfInputs: 1,
            numberOfOutputs: 1,
            outputChannelCount: [2],
            processorOptions: {
                delaySamples: Math.floor(ctx.sampleRate * 0.3)
            }
        });
        
        // Create a wrapper object with the same interface as before
        workletNode._feedback = 0;
        workletNode._setDelaySamples = (samples) => {
            workletNode.port.postMessage({ type: 'setDelaySamples', value: samples });
        };
        
        // Override the _feedback setter to send messages to the worklet
        let feedbackValue = 0;
        Object.defineProperty(workletNode, '_feedback', {
            get: () => feedbackValue,
            set: (val) => {
                feedbackValue = val;
                workletNode.port.postMessage({ type: 'setFeedback', value: val });
            }
        });
        
        return workletNode;
    } catch (e) {
        console.warn('AudioWorklet not supported, falling back to ScriptProcessorNode:', e);
        return createReverseDelayNodeFallback(ctx);
    }
}

// Fallback for browsers without AudioWorklet support
function createReverseDelayNodeFallback(ctx) {
    const node = ctx.createScriptProcessor(2048, 2, 2);
    const nodeState = {
        delaySamples: Math.max(1, Math.floor(ctx.sampleRate * 0.3)),
        writeBuf: 0,
        readBuf: 1,
        writeIndex: 0,
        readIndex: 0,
        playing: false,
        buffers: []
    };

    function initBuffers(samples) {
        nodeState.delaySamples = Math.max(1, Math.floor(samples));
        nodeState.buffers = [
            [new Float32Array(nodeState.delaySamples), new Float32Array(nodeState.delaySamples)],
            [new Float32Array(nodeState.delaySamples), new Float32Array(nodeState.delaySamples)]
        ];
        nodeState.writeBuf = 0;
        nodeState.readBuf = 1;
        nodeState.writeIndex = 0;
        nodeState.readIndex = nodeState.delaySamples - 1;
        nodeState.playing = false;
    }

    initBuffers(nodeState.delaySamples);
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
            if (nodeState.playing) {
                outSampleL = nodeState.buffers[nodeState.readBuf][0][nodeState.readIndex];
                outSampleR = nodeState.buffers[nodeState.readBuf][1][nodeState.readIndex];
                nodeState.readIndex -= 1;
                if (nodeState.readIndex < 0) {
                    nodeState.playing = false;
                }
            }
            const fb = node._feedback || 0;
            nodeState.buffers[nodeState.writeBuf][0][nodeState.writeIndex] = inL[i] + outSampleL * fb;
            nodeState.buffers[nodeState.writeBuf][1][nodeState.writeIndex] = inR[i] + outSampleR * fb;
            outL[i] = outSampleL;
            outR[i] = outSampleR;
            nodeState.writeIndex += 1;
            if (nodeState.writeIndex >= nodeState.delaySamples) {
                nodeState.writeIndex = 0;
                nodeState.readIndex = nodeState.delaySamples - 1;
                nodeState.readBuf = nodeState.writeBuf;
                nodeState.writeBuf = nodeState.writeBuf === 0 ? 1 : 0;
                nodeState.playing = true;
            }
        }
    };
    return node;
}

function buildWavetables(ctx) {
    const wts = {};
    const harmonics = WAVETABLE_HARMONICS;
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

function buildWavetableCoeffs() {
    const coeffs = {};
    const harmonics = WAVETABLE_HARMONICS;

    const sawReal = new Float32Array(harmonics + 1);
    const sawImag = new Float32Array(harmonics + 1);
    for (let n = 1; n <= harmonics; n++) {
        sawImag[n] = 1 / n;
    }
    coeffs.Saw = { real: sawReal, imag: sawImag };

    const squareReal = new Float32Array(harmonics + 1);
    const squareImag = new Float32Array(harmonics + 1);
    for (let n = 1; n <= harmonics; n += 2) {
        squareImag[n] = 1 / n;
    }
    coeffs.Square = { real: squareReal, imag: squareImag };

    const triReal = new Float32Array(harmonics + 1);
    const triImag = new Float32Array(harmonics + 1);
    for (let n = 1; n <= harmonics; n += 2) {
        const sign = ((n - 1) / 2) % 2 === 0 ? 1 : -1;
        triImag[n] = sign * (1 / (n * n));
    }
    coeffs.Triangle = { real: triReal, imag: triImag };

    const pwmReal = new Float32Array(harmonics + 1);
    const pwmImag = new Float32Array(harmonics + 1);
    const pw = 0.25;
    for (let n = 1; n <= harmonics; n++) {
        pwmImag[n] = (2 / (n * Math.PI)) * Math.sin(n * Math.PI * pw);
    }
    coeffs.PWM = { real: pwmReal, imag: pwmImag };

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
    coeffs.Formant = { real: formReal, imag: formImag };

    return coeffs;
}

function buildWavetableMorphGrid(ctx, coeffs, order, steps) {
    if (!ctx || !coeffs || !Array.isArray(order) || order.length < 2 || steps < 1) return null;
    const grid = [];
    for (let i = 0; i < order.length - 1; i++) {
        const a = coeffs[order[i]];
        const b = coeffs[order[i + 1]];
        if (!a || !b) {
            grid.push([]);
            continue;
        }
        const segment = [];
        for (let s = 0; s <= steps; s++) {
            const t = s / steps;
            const real = new Float32Array(a.real.length);
            const imag = new Float32Array(a.imag.length);
            for (let n = 0; n < real.length; n++) {
                real[n] = a.real[n] + (b.real[n] - a.real[n]) * t;
                imag[n] = a.imag[n] + (b.imag[n] - a.imag[n]) * t;
            }
            segment.push(ctx.createPeriodicWave(real, imag, { disableNormalization: false }));
        }
        grid.push(segment);
    }
    return grid;
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

async function setAudioEnabled(isEnabled) {
    state.audio.enabled = isEnabled;
    // Don't create AudioContext here - defer until actual user gesture (noteOn, recording, etc.)
    // This avoids the "AudioContext was not allowed to start" warning
    if (!isEnabled) stopAllVoicesInternal();
    updateActiveOutput();
    updateAudioStatus();
    
    // Show/hide REC controls based on Internal Synth state
    if (els.recControls) {
        els.recControls.style.display = isEnabled ? 'flex' : 'none';
    }
}

function getChannelPbSemis(chan) {
    const pbRange = parseInt(els.pbRange.value, 10) || 48;
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
        if (typeof voice.gain.gain.cancelAndHoldAtTime === 'function') {
            voice.gain.gain.cancelAndHoldAtTime(now);
        } else {
            voice.gain.gain.cancelScheduledValues(now);
            voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
        }
        const startGain = Math.max(voice.gain.gain.value || 0, 0.0001);
        voice.gain.gain.setValueAtTime(startGain, now);
        voice.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
        voice.gain.gain.setValueAtTime(0, now + 0.035);
        if (voice.source) voice.source.stop(now + 0.05);
        if (voice.oscA) voice.oscA.stop(now + 0.05);
        if (voice.oscB) voice.oscB.stop(now + 0.05);
    } catch (err) {
        // Ignore audio stop errors for already-stopped nodes.
    }
    state.audio.voices.delete(key);
}

function releaseVoiceInternal(key, minRelease = 0) {
    const voice = state.audio.voices.get(key);
    if (!voice || !state.audio.ctx) return;
    const now = state.audio.ctx.currentTime;
    const release = Math.max(MIN_ENV_RELEASE, getEffectiveRelease(), minRelease);
    try {
        if (typeof voice.gain.gain.cancelAndHoldAtTime === 'function') {
            voice.gain.gain.cancelAndHoldAtTime(now);
        } else {
            voice.gain.gain.cancelScheduledValues(now);
            voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
        }
        const startGain = Math.max(voice.gain.gain.value || 0, 0.0001);
        voice.gain.gain.setValueAtTime(startGain, now);
        voice.gain.gain.exponentialRampToValueAtTime(0.0001, now + release);
        voice.gain.gain.setValueAtTime(0, now + release + 0.005);
        if (voice.source) voice.source.stop(now + release + 0.05);
        if (voice.oscA) voice.oscA.stop(now + release + 0.05);
        if (voice.oscB) voice.oscB.stop(now + release + 0.05);
    } catch (err) {
        // Ignore audio stop errors for already-stopped nodes.
    }
    state.audio.voices.delete(key);
}

function stopAllVoicesInternal() {
    Array.from(state.audio.voices.keys()).forEach(stopVoiceInternal);
    state.audio.voices.clear();
}

async function noteOnInternal(note, velocity, chan, tempAttackOverride = null, options = {}) {
    if (!state.audio.enabled) return;
    await initAudioContext();
    if (!state.audio.ctx || !state.audio.master) return;
    const isMelodyVoice = !!options?.isMelody;
    const modeFlags = getWavetableModeFlags();
    const sample = modeFlags.sampler ? findBestSample(note) : null;
    const wtEnabled = modeFlags.wt && Object.keys(state.audio.wavetables || {}).length;
    if (!sample && !wtEnabled) return;
    
    // Fix: Enforce Polyphony Limit for both Sampler and WT
    enforcePolyphonyLimit(!!sample);

    const source = sample ? state.audio.ctx.createBufferSource() : null;
    const gain = state.audio.ctx.createGain();
    const filter = state.audio.ctx.createBiquadFilter();
    const sampleGain = sample ? state.audio.ctx.createGain() : null;
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
    const attack = Math.max(attackTime, MIN_ENV_ATTACK);

    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + attack);
    gain.gain.linearRampToValueAtTime(peak * sustain, now + attack + fx.decay);

    filter.type = 'lowpass';
    filter.Q.value = fx.filterQ;
    const filterActive = state.audio.fxEnabled && fx.filterOn;
    const baseCutoff = filterActive ? Math.max(60, Math.min(20000, fx.filterCutoff)) : 20000;
    const cutoff = getTimbreAdjustedCutoff(chan, baseCutoff);
    const envAmt = filterActive ? Math.max(0, fx.filterEnv) : 0;
    const envTarget = Math.min(20000, cutoff * (1 + envAmt));
    filter.frequency.cancelScheduledValues(now);
    filter.frequency.setValueAtTime(cutoff, now);
    filter.frequency.linearRampToValueAtTime(envTarget, now + attack);
    filter.frequency.linearRampToValueAtTime(cutoff, now + attack + fx.decay);
    const modSourceGain = (sample && wtEnabled) ? state.audio.ctx.createGain() : null;
    const modFilterLP = (sample && wtEnabled) ? state.audio.ctx.createBiquadFilter() : null;
    const modFilterHP = (sample && wtEnabled) ? state.audio.ctx.createBiquadFilter() : null;
    const modGain = (sample && wtEnabled) ? state.audio.ctx.createGain() : null;
    const ringGain = wtEnabled ? state.audio.ctx.createGain() : null;
    const wtGainA = wtEnabled ? state.audio.ctx.createGain() : null;
    const wtGainB = wtEnabled ? state.audio.ctx.createGain() : null;
    const oscA = wtEnabled ? state.audio.ctx.createOscillator() : null;
    const oscB = wtEnabled ? state.audio.ctx.createOscillator() : null;
    if (sample && sampleGain) {
        const blend = getMacroSamplerBlend();
        const gainValue = Math.max(0, Math.min(5, state.audio.samplerGain * (sample.gain ?? 1) * blend));
        sampleGain.gain.value = gainValue;
        source.connect(sampleGain);
        sampleGain.connect(filter);
        if (modSourceGain) {
            modSourceGain.gain.value = 1;
            source.connect(modSourceGain);
        }
    }
    if (modFilterLP) {
        modFilterLP.type = 'lowpass';
        modFilterLP.frequency.value = 5000;
    }
    if (modFilterHP) {
        modFilterHP.type = 'highpass';
        modFilterHP.frequency.value = 10;
    }
    if (oscA && oscB && wtGainA && wtGainB && ringGain) {
        const grid = state.audio.wavetableMorphGrid;
        if (grid && grid.length) {
            const order = getWavetableOrder();
            const morph = clamp01(state.audio.macro.morph);
            const pos = morph * (order.length - 1);
            const segIdx = Math.min(grid.length - 1, Math.floor(pos));
            const seg = grid[segIdx];
            const segFrac = pos - segIdx;
            const stepPos = segFrac * MORPH_GRID_STEPS;
            const stepIdx = Math.floor(stepPos);
            const stepFrac = stepPos - stepIdx;
            const stepNext = Math.min(MORPH_GRID_STEPS, stepIdx + 1);
            const waveA = seg[stepIdx] || seg[0];
            const waveB = seg[stepNext] || waveA;
            if (waveA) oscA.setPeriodicWave(waveA);
            if (waveB) oscB.setPeriodicWave(waveB);
            const mix = getEffectiveWavetableMix();
            wtGainA.gain.value = mix * (1 - stepFrac);
            wtGainB.gain.value = mix * stepFrac;
        } else {
            const morphState = getWavetableMorphState();
            const waveA = morphState ? state.audio.wavetables[morphState.aType] : null;
            const waveB = morphState ? state.audio.wavetables[morphState.bType] : null;
            if (waveA) oscA.setPeriodicWave(waveA);
            if (waveB) oscB.setPeriodicWave(waveB);
            wtGainA.gain.value = morphState ? morphState.aGain : 0;
            wtGainB.gain.value = morphState ? morphState.bGain : 0;
        }
        oscA.frequency.value = midiToFreq(note + pbSemis);
        oscB.frequency.value = midiToFreq(note + pbSemis);
        oscA.connect(wtGainA);
        oscB.connect(wtGainB);
        wtGainA.connect(ringGain);
        wtGainB.connect(ringGain);
        ringGain.gain.value = 1;
        ringGain.connect(filter);
    }
    filter.connect(gain);
    const melodyGainNode = state.audio.melodyGain;
    if (isMelodyVoice && melodyGainNode) {
        gain.connect(melodyGainNode);
    } else {
        gain.connect(state.audio.dryGain);
        gain.connect(state.audio.fxSend);
    }
    const key = `${chan}:${note}`;
    stopVoiceInternal(key);
    if (sample) {
        let offset = 0;
        if (state.audio.loopVariation > 0 && sample.buffer && sample.buffer.duration) {
            offset = Math.random() * (sample.buffer.duration * state.audio.loopVariation);
        }
        source.start(0, offset);
    }
    if (oscA) oscA.start();
    if (oscB) oscB.start();
    const voice = { 
        source: sample ? source : null, 
        gain, 
        filter, 
        sampleGain, 
        sampleGainValue: sample ? (sample.gain ?? 1) : null, 
        ringGain,
        wtGainA,
        wtGainB,
        oscA,
        oscB,
        modSourceGain,
        modFilterLP,
        modFilterHP,
        modGain,
        note, 
        chan, 
        sampleRoot: sample ? sample.root : null, 
        baseGain: initVel, 
        initVelocity: initVel, 
        startTime: state.audio.ctx.currentTime,
        bufferDuration: (sample && sample.buffer) ? sample.buffer.duration : null 
    };
    state.audio.voices.set(key, voice);
    applyWavetableMorphToVoice(voice);
    applyVoiceModRouting(voice);
    if (source) {
        source.onended = () => {
            try {
                if (oscA) oscA.stop();
                if (oscB) oscB.stop();
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

function noteOffInternal(note, chan, minRelease = 0) {
    releaseVoiceInternal(`${chan}:${note}`, minRelease);
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
        if (v.oscA) {
            v.oscA.frequency.setTargetAtTime(midiToFreq(v.note + pbSemis), state.audio.ctx.currentTime, 0.01);
        }
        if (v.oscB) {
            v.oscB.frequency.setTargetAtTime(midiToFreq(v.note + pbSemis), state.audio.ctx.currentTime, 0.01);
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
        v.gain.gain.setTargetAtTime(nextGain, state.audio.ctx.currentTime, 0.04);
        applyVoiceModRouting(v);
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
    if (status === 0xB0 && data[1] === 74) {
        const timbre = data[2];
        state.audio.channelTimbre.set(chan, timbre);
        updateChannelTimbre(chan);
        return;
    }
    if (status === 0xB0 && (data[1] === 120 || data[1] === 123)) {
        stopAllVoicesInternal();
    }
}

function refreshSampleSetSelect(activeName) {
    if (!els.sampleSetSelect && !els.sampleSetSelectMini) return;
    const sets = getSampleSetsState();
    ensureSampleSet('Default', sets);
    saveSampleSetsState(sets);
    if (els.sampleSetSelect) clearChildren(els.sampleSetSelect);
    if (els.sampleSetSelectMini) clearChildren(els.sampleSetSelectMini);
    sets.names.forEach(name => {
        if (els.sampleSetSelect) appendOption(els.sampleSetSelect, name, name);
        if (els.sampleSetSelectMini) appendOption(els.sampleSetSelectMini, name, name);
    });
    const selected = activeName && sets.names.includes(activeName) ? activeName : sets.names[0];
    if (els.sampleSetSelect) els.sampleSetSelect.value = selected;
    if (els.sampleSetSelectMini) els.sampleSetSelectMini.value = selected;
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
    sampleGainEls.forEach((input, idx) => {
        if (!input || !state.audio.samples[idx]) return;
        const next = Math.max(0, Math.min(5, parseFloat(input.value) || 0));
        state.audio.samples[idx].gain = next;
        input.value = next.toFixed(2);
    });
    if (els.samplerGain) {
        const next = Math.max(0, Math.min(5, parseFloat(els.samplerGain.value) || 0));
        state.audio.samplerGain = next;
        els.samplerGain.value = next.toFixed(2);
        updateRangeProgress(els.samplerGain);
    }
    sets.samplerGainBySet[setName] = state.audio.samplerGain ?? DEFAULT_SAMPLER_GAIN;
    saveSampleSetsState(sets);
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
    await initAudioContext();
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
    keepHold: false,
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

function releaseArpHoldNotes() {
    if (!state.arpHoldTouches.length) return;
    state.arpHoldTouches.forEach(t => {
        if (!t.noteObjs || !t.noteObjs.length) return;
        stopArpActiveNotes(t.noteObjs);
        removeArpNotes(t.noteObjs);
    });
    state.arpHoldTouches = [];
}

function releaseHeldCollections() {
    releaseHeldNotes();
    releaseArpHoldNotes();
}

function allNotesOff() {
    stopMelodyGenerator();
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
    stopMelodyGenerator();
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
        microtonalizeIn: getScaleMode() === 'microtonal',
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
        midiInMpe: els.midiInMpe ? els.midiInMpe.checked : false,
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
        macroMorph: state.audio.macro.morph,
        macroTexture: state.audio.macro.texture,
        crossModMode: state.audio.crossMod.mode,
        crossModDepth: state.audio.crossMod.depth,
        amTone: state.audio.crossMod.amTone,
        amBias: state.audio.crossMod.amBias,
        matrixEnabled: state.audio.matrix.enabled,
        matrixScene: state.audio.matrix.scene,
        matrixMacros: { ...state.audio.matrix.macros },
        // Sampler settings
        samplerMaxVoices: state.audio.maxSamplerVoices,
        sampleLoop: state.audio.loopGlobal,
        // Fade settings
        fadeSeconds: (els.fadeSeconds || els.fadeTime) ? (els.fadeSeconds || els.fadeTime).value : '5',
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
    if (els.microtonalizeIn) els.microtonalizeIn.checked = !!presetState.microtonalizeIn;
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
    if (els.linkPressToY) els.linkPressToY.checked = presetState.linkPressToY;
    if (els.linkYToVelocity) els.linkYToVelocity.checked = presetState.linkYToVelocity ?? els.linkYToVelocity.checked;
    if (els.smoothAmt) els.smoothAmt.value = presetState.smoothAmt ?? els.smoothAmt.value;
    if (els.curveType) els.curveType.value = presetState.curveType ?? els.curveType.value;
    if (els.yDeadzone) els.yDeadzone.value = presetState.yDeadzone ?? els.yDeadzone.value;
    if (els.touchSensitivity) els.touchSensitivity.value = presetState.touchSensitivity ?? 75;
    if (els.quantizeRelease) els.quantizeRelease.checked = presetState.quantizeRelease ?? els.quantizeRelease.checked;
    if (els.holdNotes) els.holdNotes.checked = presetState.holdNotes;
    updateHoldButtonUI();
    if (els.pbRange) els.pbRange.value = presetState.pbRange;
    if (els.midiThru) els.midiThru.checked = presetState.midiThru;
    if (els.midiInMpe) els.midiInMpe.checked = presetState.midiInMpe ?? els.midiInMpe.checked;
    if (els.arpEnabled) els.arpEnabled.checked = !!presetState.arpEnabled;
    if (els.arpRate) els.arpRate.value = presetState.arpRate ?? els.arpRate.value;
    if (els.arpGate) els.arpGate.value = presetState.arpGate ?? els.arpGate.value;
    if (els.arpSync) els.arpSync.value = presetState.arpSync ?? els.arpSync.value;
    if (els.arpBpm) els.arpBpm.value = presetState.arpBpm ?? els.arpBpm.value;
    if (els.arpLatch) els.arpLatch.checked = !!presetState.arpLatch;
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
        setWavetableMode(presetState.wtMode);
    }
    if (presetState.wtType !== undefined) {
        state.audio.wavetable.type = presetState.wtType;
        if (els.wtSelect) els.wtSelect.value = presetState.wtType;
    }
    if (presetState.wtMix !== undefined) {
        setWavetableMix(presetState.wtMix);
    }
    if (presetState.macroMorph !== undefined) {
        setMacroMorph(presetState.macroMorph);
    }
    if (presetState.crossModMode !== undefined) {
        setCrossModMode(presetState.crossModMode);
    }
    if (presetState.crossModDepth !== undefined) {
        setCrossModDepth(presetState.crossModDepth);
    }
    if (presetState.amTone !== undefined) {
        state.audio.crossMod.amTone = Math.max(1000, Math.min(8000, presetState.amTone));
        if (els.amTone) {
            els.amTone.value = state.audio.crossMod.amTone;
            updateRangeProgress(els.amTone);
        }
    }
    if (presetState.amBias !== undefined) {
        state.audio.crossMod.amBias = clamp01(presetState.amBias);
        if (els.amBias) {
            els.amBias.value = state.audio.crossMod.amBias.toFixed(2);
            updateRangeProgress(els.amBias);
        }
    }
    if (presetState.macroTexture !== undefined) {
        setMacroTexture(presetState.macroTexture);
    }
    if (presetState.matrixScene !== undefined) {
        setMatrixScene(presetState.matrixScene);
    }
    if (presetState.matrixMacros !== undefined && typeof presetState.matrixMacros === 'object') {
        state.audio.matrix.macros = {
            a: clamp01(presetState.matrixMacros.a ?? state.audio.matrix.macros.a),
            b: clamp01(presetState.matrixMacros.b ?? state.audio.matrix.macros.b),
            c: clamp01(presetState.matrixMacros.c ?? state.audio.matrix.macros.c),
            d: clamp01(presetState.matrixMacros.d ?? state.audio.matrix.macros.d)
        };
    }
    if (presetState.matrixEnabled !== undefined) {
        setMatrixEnabled(!!presetState.matrixEnabled);
    }
    // Sampler settings
    if (presetState.samplerMaxVoices !== undefined) {
        state.audio.maxSamplerVoices = presetState.samplerMaxVoices;
        if (els.samplerMaxVoices) els.samplerMaxVoices.value = presetState.samplerMaxVoices;
    }
    if (presetState.sampleLoop !== undefined) {
        state.audio.loopGlobal = presetState.sampleLoop;
        if (els.sampleLoopBtn) els.sampleLoopBtn.classList.toggle('active', presetState.sampleLoop);
    }
    // Fade settings
    if (presetState.fadeSeconds !== undefined && (els.fadeSeconds || els.fadeTime)) {
        (els.fadeSeconds || els.fadeTime).value = presetState.fadeSeconds;
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
        setFxEnabled(!!presetState.fxEnabled);
    } else {
        updateFxToggleButtons();
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

function loadUserFxPresets() {
    const raw = localStorage.getItem(FX_USER_PRESETS_KEY);
    const parsed = safeParseJson(raw, {});
    const cleaned = {};
    Object.keys(parsed || {}).forEach(name => {
        if (!FX_PRESETS[name]) cleaned[name] = parsed[name];
    });
    return cleaned;
}

function saveUserFxPresets(presets) {
    localStorage.setItem(FX_USER_PRESETS_KEY, JSON.stringify(presets));
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
    const setGain = loadSamplerGainForSet(state.audio.activeSet);
    state.audio.samplerGain = setGain;
    if (els.samplerGain) {
        els.samplerGain.value = setGain.toFixed(2);
        updateRangeProgress(els.samplerGain);
    }
    updateSamplerGainNodes();
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
    const label = isOn ? rateValue : 'off';
    if (els.arpWheel) {
        els.arpWheel.setAttribute('aria-label', `ARP ${label}`);
        els.arpWheel.title = `ARP ${label}`;
        els.arpWheel.dataset.stateLabel = `ARP ${label}`;
    }
    // Sync the visible rate select with the hidden one
    if (els.arpRateSelect && els.arpRate) {
        els.arpRateSelect.value = els.arpRate.value;
    }
}

function updateHoldButtonUI() {
    const isOn = !!els.holdNotes?.checked;
    if (els.holdBtn) {
        els.holdBtn.classList.toggle('active', isOn);
        els.holdBtn.classList.toggle('toggle-on', isOn);
        els.holdBtn.classList.toggle('toggle-off', !isOn);
    }
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

function updateKeepButtonUI() {
    if (!els.keepBtn) return;
    const isOn = !!state.keepEnabled;
    els.keepBtn.classList.toggle('active', isOn);
    els.keepBtn.classList.toggle('toggle-on', isOn);
    els.keepBtn.classList.toggle('toggle-off', !isOn);
    const label = isOn ? 'KEEP ON' : 'KEEP';
    els.keepBtn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    els.keepBtn.setAttribute('aria-label', label);
    els.keepBtn.title = label;
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

function buildScaleNotesFromDefinition(def) {
    const notes = [];
    const degrees = def.degrees || [];
    for (let oct = -1; oct <= 11; oct++) {
        degrees.forEach(d => {
            const note = (oct * 12) + def.root + d;
            if (note >= 0 && note <= 127) notes.push(note);
        });
    }
    notes.sort((a, b) => a - b);
    return notes;
}

function getMelodyScaleDefinition() {
    if (state.melody?.latchEnabled && state.melody.latchScale?.def) {
        return state.melody.latchScale.def;
    }
    return getScaleDefinition();
}

function detectScaleFromNotes(notes) {
    const pcsCount = new Array(12).fill(0);
    let total = 0;
    (notes || []).forEach(n => {
        if (n == null || Number.isNaN(n)) return;
        pcsCount[Math.round(n) % 12] += 1;
        total += 1;
    });
    if (total < 3) return null;
    let best = { score: -1, root: 0, scaleType: 'major' };
    Object.keys(SCALES).forEach(scaleType => {
        const degrees = SCALES[scaleType];
        if (!degrees || !degrees.length) return;
        for (let root = 0; root < 12; root += 1) {
            let inCount = 0;
            degrees.forEach(d => {
                const pc = (root + d) % 12;
                inCount += pcsCount[pc];
            });
            const score = inCount / total;
            if (score > best.score) {
                best = { score, root, scaleType };
            }
        }
    });
    if (best.score < 0.6) return null;
    return best;
}

function applyDetectedScale(notes, statusEl = null) {
    const result = detectScaleFromNotes(notes);
    if (!result) return null;
    if (els.scaleModeDiatonic) els.scaleModeDiatonic.checked = true;
    if (els.scaleType) els.scaleType.value = result.scaleType;
    if (els.rootNote) els.rootNote.value = result.root;
    updateScaleModeUI();
    scheduleScaleUpdate();
    if (statusEl) {
        const rootName = NOTE_NAMES[result.root] || 'C';
        const pct = Math.round(result.score * 100);
        statusEl.textContent += ` | Scale: ${rootName} ${result.scaleType} (${pct}%)`;
    }
    return result;
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

function setCurrentOctave(next, options = {}) {
    const clamped = Math.max(-2, Math.min(2, next));
    if (clamped === state.currentOctave) return;
    const delta = clamped - state.currentOctave;
    state.currentOctave = clamped;
    els.octVal.innerText = (state.currentOctave > 0 ? "+" : "") + state.currentOctave;
    if (options.retune && delta !== 0) {
        retuneActiveNotes(delta * 12);
    }
    if (!state.melody.latchEnabled && state.melody.imported && delta !== 0 && Array.isArray(state.melody.notes)) {
        state.melody.notes = state.melody.notes.map(n => {
            if (n == null) return null;
            const next = n + (delta * 12);
            return Math.max(0, Math.min(127, next));
        });
        updateMelodyPreview();
        if (state.melody.running) restartMelodyGenerator();
    }
    if (!state.melody.latchEnabled && state.melody.enabled) {
        updateMelodyFromUI(!state.melody.imported);
        if (state.melody.running) restartMelodyGenerator();
    }
    requestDraw();
}

function changeOctave(delta) {
    setCurrentOctave(state.currentOctave + delta, { retune: true });
}

function ensureVisibleForNotes(notes, options = {}) {
    if (!notes || !notes.length) return;
    const allowSingle = !!options.allowSingle;
    if (notes.length === 1 && !allowSingle) return;
    const numOct = parseInt(els.visibleOctaves.value, 10) || 3;
    const span = numOct * 12;
    const grid = getGridDegrees();
    const baseOffset = 48 + grid.root;
    let minNote = Infinity;
    let maxNote = -Infinity;
    notes.forEach(n => {
        const value = Number(n);
        if (!Number.isFinite(value)) return;
        minNote = Math.min(minNote, value);
        maxNote = Math.max(maxNote, value);
    });
    if (!Number.isFinite(minNote) || !Number.isFinite(maxNote)) return;
    let targetBase;
    const range = maxNote - minNote;
    if (range <= span) {
        targetBase = Math.min(minNote, maxNote - span);
    } else {
        targetBase = ((minNote + maxNote) * 0.5) - (span * 0.5);
    }
    let nextOct = Math.round((targetBase - baseOffset) / 12);
    let base = baseOffset + (nextOct * 12);
    if (base > minNote) {
        nextOct = Math.floor((minNote - baseOffset) / 12);
        base = baseOffset + (nextOct * 12);
    }
    if (base + span < maxNote) {
        nextOct = Math.ceil((maxNote - span - baseOffset) / 12);
    }
    setCurrentOctave(nextOct, { retune: false });
}

function retuneActiveNotes(deltaSemis) {
    if (!Number.isFinite(deltaSemis) || deltaSemis === 0) return;
    const canSendMidi = !!state.midi.output;
    const clampNote = note => Math.max(0, Math.min(127, Math.round(note)));
    const retuneVoice = (chan, voice, m) => {
        if (!chan || !voice) return;
        const noteFloat = getVoiceNoteFloat(voice);
        const nextFloat = noteFloat + deltaSemis;
        const nextVoice = makeVoiceFromNote(nextFloat);
        const oldNote = clampNote(voice.note);
        const newNote = clampNote(nextVoice.note);
        const vel = Math.max(1, Math.min(127, Math.round(m?.press ?? 90)));
        const oldKey = `${chan}:${oldNote}`;
        const wasMelody = !!state.melody.voiceKeys?.has?.(oldKey);

        // Keep the internal synth in sync with the MIDI retune to avoid stuck notes.
        stopVoiceInternal(`${chan}:${oldNote}`);
        sendMidiHardware([0x80 + chan - 1, oldNote, 0], { isMelody: wasMelody });
        if (canSendMidi) sendMidi([0x80 + chan - 1, oldNote, 0]);
        state.melody.voiceKeys?.delete?.(oldKey);

        if (m) {
            const pb = getVoicePb(m, nextVoice);
            if (canSendMidi) {
                sendMidi([0xB0 + chan - 1, 74, m.slide || 0]);
                sendMidi([0xE0 + chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
                sendMidi([0xD0 + chan - 1, m.press ?? 90]);
            }
        }

        void noteOnInternal(newNote, vel, chan, null, { isMelody: wasMelody });
        sendMidiHardware([0x90 + chan - 1, newNote, vel], { isMelody: wasMelody });
        if (canSendMidi) sendMidi([0x90 + chan - 1, newNote, vel]);
        if (wasMelody) state.melody.voiceKeys?.add?.(`${chan}:${newNote}`);
        voice.note = newNote;
        voice.basePb = nextVoice.basePb;
    };

    state.activeTouches.forEach(t => {
        const m = t.lastM || { slide: 0, press: 90, pbValue: 8192 };
        t.voices.forEach(v => retuneVoice(v.chan, v, m));
        if (Number.isFinite(t.initialExact)) t.initialExact += deltaSemis;
        if (t.lastM && Number.isFinite(t.lastM.exact)) t.lastM.exact += deltaSemis;
    });

    state.heldVoices.forEach(v => {
        const m = v.lastM || { slide: 0, press: 90, pbValue: 8192 };
        retuneVoice(v.chan, v, m);
        if (Number.isFinite(v.rootNote)) v.rootNote += deltaSemis;
        if (v.lastM && Number.isFinite(v.lastM.exact)) v.lastM.exact += deltaSemis;
    });

    if (state.arp && state.arp.notes) {
        state.arp.notes.forEach(n => {
            if (!Number.isFinite(n.noteFloat)) return;
            n.noteFloat += deltaSemis;
            const voice = makeVoiceFromNote(n.noteFloat);
            n.note = voice.note;
            n.basePb = voice.basePb;
        });
    }
    state.arpHoldTouches.forEach(t => {
        if (t.lastM && Number.isFinite(t.lastM.exact)) t.lastM.exact += deltaSemis;
    });

    if (state.arp && state.arp.active) {
        state.arp.active.forEach(entry => {
            const oldNote = clampNote(entry.note);
            const newNote = clampNote(entry.note + deltaSemis);
            if (canSendMidi) {
                sendMidi([0x80 + entry.chan - 1, oldNote, 0]);
                sendMidi([0x90 + entry.chan - 1, newNote, 80]);
            }
            entry.note = newNote;
        });
    }
}


function setupMIDI() {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess({ sysex: false }).then(access => {
            state.midi.access = access;
            const outputs = Array.from(access.outputs.values());
            const inputs = Array.from(access.inputs.values());
            
            clearChildren(els.midiOutSelect);
            appendOption(els.midiOutSelect, '', 'Scegli Output...');
            outputs.forEach(o => appendOption(els.midiOutSelect, o.id, o.name || o.id || 'MIDI OUT'));
            state.midi.hardwareOutput = null;
            els.midiOutSelect.value = '';
            updateActiveOutput();
            els.midiOutSelect.onchange = () => {
                state.midi.hardwareOutput = access.outputs.get(els.midiOutSelect.value) || null;
                updateActiveOutput();
                setPitchBendRange(parseInt(els.pbRange.value, 10));
            };
            updateMidiStatusBase();
            setPitchBendRange(parseInt(els.pbRange.value, 10));

            clearChildren(els.midiInSelect);
            appendOption(els.midiInSelect, '', 'Scegli Input...');
            inputs.forEach(i => appendOption(els.midiInSelect, i.id, i.name || i.id || 'MIDI IN'));
            els.midiInSelect.value = '';
            state.midi.input = null;
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
    const microtonalize = els.scaleModeMicro.checked;
    const mpeFromIn = els.midiInMpe && els.midiInMpe.checked;
    if (type === 0x90 && velocity > 0 && isLocalNoteOn(note)) {
        return;
    }
    const thruRaw = els.midiThru.checked && !mpeFromIn;
    const thruOnly = thruRaw && !microtonalize;
    if (thruRaw) {
        if (state.midi.output) state.midi.output.send(message.data);
    }
    if (type === 0x90 && velocity > 0) {
        if (microtonalize) {
            const noteFloat = mapMidiNoteToScale(note);
            ensureVisibleForNotes([noteFloat], { allowSingle: true });
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
            ensureVisibleForNotes([note], { allowSingle: true });
            const chan = thruOnly ? 0 : state.mpeChannels.shift();
            if (!thruOnly && !chan) {
                els.midiStatus.innerText = 'MPE CHANNELS FULL';
            }
            if (!thruOnly && chan && state.midi.output) {
                state.midi.output.send([0x90 + chan - 1, note, velocity]);
            }
            const list = state.physicalNotes.get(note) || [];
            list.push({ chan: chan || 0, note, basePb: 0, velocity, grabbed: false, srcChan, srcNote: note, lastPb: 8192, lastSlide: 0, lastPress: 0, onTs: Date.now() });
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
    if (data && data.length >= 3) {
        const status = data[0] & 0xF0;
        if (status === 0x90 && data[2] > 0) {
            markLocalNoteOn(data[1]);
        }
    }
    state.midi.output.send(data);
}

function sendMidiHardware(data, options = {}) {
    if (state.midi.hardwareOutput) state.midi.hardwareOutput.send(data);
}




function getRateFactor(rate) {
    if (rate === '1/2') return 2;
    if (rate === '1/4') return 1;
    if (rate === '1/4T') return 2 / 3;
    if (rate === '1/8') return 0.5;
    if (rate === '1/8T') return 1 / 3;
    if (rate === '1/16') return 0.25;
    if (rate === '1/16T') return 1 / 6;
    if (rate === '1/32') return 0.125;
    if (rate === '1/32T') return 1 / 12;
    if (rate === '1/64') return 0.0625;
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

function createSeededRng(seed) {
    let s = Math.floor(seed) % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

function getMelodyStepMs() {
    const bpm = parseInt(els.arpBpm?.value, 10) || 120;
    const factor = getRateFactor(state.melody.rate || '1/16');
    return (60 / Math.max(40, bpm)) * 1000 * factor;
}

function chooseWeighted(rng, options) {
    const total = options.reduce((sum, opt) => sum + opt.weight, 0);
    let roll = rng() * total;
    for (const opt of options) {
        roll -= opt.weight;
        if (roll <= 0) return opt.value;
    }
    return options[options.length - 1].value;
}

function adjustWeightsForRules(weights, rules) {
    const adjusted = weights.map(opt => ({ ...opt }));
    if (rules.stepwise) {
        adjusted.forEach(opt => {
            const step = Math.abs(opt.value);
            if (step <= 1) opt.weight *= 1.8;
            else if (step === 2) opt.weight *= 1.2;
            else if (step >= 4) opt.weight *= 0.6;
        });
    }
    if (rules.leaps) {
        adjusted.forEach(opt => {
            const step = Math.abs(opt.value);
            if (step >= 4) opt.weight *= 1.6;
            if (step <= 1) opt.weight *= 0.7;
        });
    }
    return adjusted;
}

function buildRhythmMask(rng, length) {
    const mask = new Array(length).fill(true);
    const patterns = [
        { name: 'syncop', seq: [true, false, true, true, false, true, true, false] },
        { name: 'regular', seq: [true, false, true, false] },
        { name: 'sparse', seq: [true, false, false, true, false, true, false, false] }
    ];
    const chosen = patterns[Math.floor(rng() * patterns.length)].seq;
    for (let i = 0; i < length; i++) mask[i] = chosen[i % chosen.length];
    return mask;
}

const RHYTHM_PATTERNS = {
    straight_4: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
    straight_8: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
    straight_16: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    offbeat_8: [false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false],
    syncop_classic: [true, false, false, true, false, true, false, false, true, false, false, true, false, true, false, false],
    syncop_push: [false, false, true, false, false, false, false, true, false, false, true, false, false, false, false, true],
    backbeat_2_4: [true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
    rock_8: [true, false, true, false, false, false, false, false, true, false, true, false, false, false, false, false],
    pop_groove: [true, false, false, true, false, true, false, false, true, false, false, true, false, true, false, false],
    funk_16: [true, false, true, false, false, true, false, false, true, false, true, false, false, true, false, false],
    funk_james: [true, false, false, true, false, true, true, false, true, false, false, true, false, true, false, false],
    ghost_dense: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
    shuffle_8: [true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false],
    swing_16: [true, false, false, true, false, false, true, false, true, false, false, true, false, false, true, false],
    clave_3_2: [true, false, false, true, false, true, false, false, false, false, true, false, false, true, false, false],
    clave_2_3: [false, false, true, false, false, true, false, false, true, false, false, true, false, true, false, false],
    bossa: [true, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false],
    one_drop: [false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false],
    skank: [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true],
    break_classic: [true, false, false, true, false, false, false, false, true, false, false, true, false, true, false, false],
    hiphop_sparse: [true, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false],
    house_4: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
    techno_pump: [true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true],
    dnb_drive: [true, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false],
    meter_3_4: [true, false, false, false, true, false, false, false, true, false, false, false],
    meter_5_4: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
    meter_7_8: [true, false, false, true, false, false, true, false, false, true, false, false, true, false],
    poly_3_4: [true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false],
    poly_5_4: [true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false]
};

function buildPatternMask(length, patternId) {
    const seq = RHYTHM_PATTERNS[patternId];
    if (!seq || !seq.length) return null;
    const mask = new Array(length).fill(false);
    for (let i = 0; i < length; i += 1) {
        mask[i] = !!seq[i % seq.length];
    }
    return mask;
}

function getNoteColor(note) {
    const hue = Math.round((note * 7) % 360);
    return `hsl(${hue}, 80%, 55%)`;
}

function getMelodyNotesForRoot(rootNote) {
    const layerNotes = getLayerNotes(rootNote);
    return [rootNote, ...layerNotes].filter((n, idx, arr) => arr.indexOf(n) === idx);
}

function setSyntheticTouch(key, notes, label, voicesOverride = null, yOverride = null) {
    if (!notes || !notes.length) {
        if (state.activeTouches.has(key)) {
            state.activeTouches.delete(key);
            requestDraw();
        }
        return;
    }
    updateGridCache();
    const height = Math.floor(state.canvasRect.height || canvas.getBoundingClientRect().height || 0);
    let y = label === 'DRONE' ? height * 0.82 : height * 0.62;
    let press = 90;
    let slide = 0;
    if (Number.isFinite(yOverride)) {
        const yNorm = Math.max(0, Math.min(1, yOverride));
        y = height * (1 - yNorm);
        press = Math.round(yNorm * 127);
        slide = press;
    }
    const xs = notes.map(n => getNearestNoteX(n)).filter(v => v != null);
    const x = xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : (state.canvasRect.width / 2);
    const voices = voicesOverride
        ? voicesOverride.map(v => ({
            chan: v.chan,
            note: v.note,
            noteFloat: v.noteFloat,
            basePb: v.basePb ?? 0,
            color: getNoteColor(v.note)
        }))
        : notes.map(n => ({
            chan: state.melody.chan,
            note: n,
            basePb: 0,
            color: getNoteColor(n)
        }));
    const entry = state.activeTouches.get(key) || {
        phase: 0,
        vibratoSpeed: 0
    };
    entry.voices = voices;
    entry.lastM = { x, y, press, slide, pbValue: 8192, exact: notes[0] };
    entry.color = getNoteColor(notes[0]);
    entry.label = label;
    entry.isSynthetic = true;
    state.activeTouches.set(key, entry);
    requestDraw();
}

function getScaleIndexForNote(note) {
    const snapped = mapMidiNoteToScale(note);
    let idx = state.scaleNotes.notes.indexOf(snapped);
    if (idx >= 0) return idx;
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < state.scaleNotes.notes.length; i++) {
        const dist = Math.abs(state.scaleNotes.notes[i] - snapped);
        if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
        }
    }
    return bestIdx;
}

function getMelodyScaleIndexForNote(note, scaleNotes, def) {
    const snapped = mapMidiNoteToScaleWithDef(note, def);
    let idx = scaleNotes.indexOf(snapped);
    if (idx >= 0) return idx;
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < scaleNotes.length; i++) {
        const dist = Math.abs(scaleNotes[i] - snapped);
        if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
        }
    }
    return bestIdx;
}

function getLayerNotes(baseNote) {
    if (!state.melody.layer.enabled) return [];
    const def = getMelodyScaleDefinition();
    const scaleKey = `${def.mode}:${def.name}`;
    const useLatch = !!state.melody.latchEnabled && state.melody.latchScale?.notes?.length;
    if (!useLatch && (!state.scaleNotes.notes.length || state.scaleNotes.root !== def.root || state.scaleNotes.scale !== scaleKey)) {
        updateScaleNotes();
    }
    const scaleNotes = useLatch ? state.melody.latchScale.notes : state.scaleNotes.notes;
    const mode = state.melody.layer.mode || 'triad';
    const modeSteps = {
        third: [2],
        fifth: [4],
        octave: [7],
        triad: [2, 4],
        sixth: [2, 4, 5],
        seventh: [2, 4, 6],
        maj7: [2, 4, 6],
        min7: [2, 4, 6],
        sus2: [1, 4],
        sus4: [3, 4],
        add9: [2, 4, 8],
        dom9: [2, 4, 6, 8],
        maj9: [2, 4, 6, 8],
        min9: [2, 4, 6, 8],
        eleventh: [2, 4, 6, 8, 10],
        thirteenth: [2, 4, 6, 8, 10, 12]
    };
    const steps = modeSteps[mode] || [2, 4];
    const idx = getMelodyScaleIndexForNote(baseNote, scaleNotes, def);
    const result = [];
    steps.forEach(step => {
        const target = scaleNotes[idx + step];
        if (Number.isFinite(target)) result.push(target);
    });
    return result;
}

function getMelodyBaseOctave() {
    const latched = state.melody.latchScale;
    if (state.melody.latchEnabled && Number.isFinite(latched?.octave)) return latched.octave;
    return state.currentOctave;
}

function getMelodyScalePool(range) {
    const def = getMelodyScaleDefinition();
    const scaleKey = `${def.mode}:${def.name}`;
    const useLatch = !!state.melody.latchEnabled && state.melody.latchScale?.notes?.length;
    if (!useLatch && (!state.scaleNotes.notes.length || state.scaleNotes.root !== def.root || state.scaleNotes.scale !== scaleKey)) {
        updateScaleNotes();
    }
    const span = Math.max(5, Math.min(36, range));
    const base = 60 + def.root + (getMelodyBaseOctave() * 12);
    const half = Math.floor(span / 2);
    const min = base - half;
    const max = base + (span - half);
    const scaleNotes = useLatch ? state.melody.latchScale.notes : state.scaleNotes.notes;
    const pool = scaleNotes.filter(n => n >= min && n <= max);
    return pool.length ? pool : scaleNotes.slice();
}

function getMelodyStyleConfig() {
    const raw = (els.melodyStyle?.value || 'balanced').trim();
    let style = 'balanced';
    let rules = { stepwise: true, motif: true, rhythm: true, leaps: true };
    let rhythmMode = 'rule';
    let rhythmPattern = '';
    if (raw.startsWith('rule:')) {
        const rule = raw.slice(5);
        rules = {
            stepwise: rule === 'all' || rule === 'stepwise',
            motif: rule === 'all' || rule === 'motif',
            rhythm: rule === 'all' || rule === 'rhythm',
            leaps: rule === 'all' || rule === 'leaps'
        };
        style = 'balanced';
        rhythmMode = 'rule';
        rhythmPattern = '';
    } else if (raw.startsWith('pattern:')) {
        style = 'balanced';
        rules = { stepwise: true, motif: true, rhythm: true, leaps: true };
        rhythmMode = 'pattern';
        rhythmPattern = raw.slice(8);
    } else {
        style = raw || 'balanced';
        rules = { stepwise: true, motif: true, rhythm: true, leaps: true };
        rhythmMode = 'rule';
        rhythmPattern = '';
    }
    return { style, rules, rhythmMode, rhythmPattern };
}

function findNearestIndex(pool, note) {
    if (!pool.length) return 0;
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < pool.length; i++) {
        const dist = Math.abs(pool[i] - note);
        if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
        }
    }
    return bestIdx;
}

function getCadenceNote(pool, pitchClass, baseNote) {
    const candidates = pool.filter(n => (n % 12) === pitchClass);
    if (!candidates.length) return pool[pool.length - 1];
    let best = candidates[0];
    let bestDist = Math.abs(best - baseNote);
    for (let i = 1; i < candidates.length; i++) {
        const dist = Math.abs(candidates[i] - baseNote);
        if (dist < bestDist) {
            bestDist = dist;
            best = candidates[i];
        }
    }
    return best;
}

function buildMelodySequence() {
    if (!els.melodyStyle) return [];
    const seed = parseInt(els.melodySeed.value, 10) || 1;
    const length = Math.max(4, Math.min(64, parseInt(els.melodyLength.value, 10) || 16));
    const range = Math.max(5, Math.min(36, parseInt(els.melodyRange.value, 10) || 14));
    const density = Math.max(0.2, Math.min(1, (parseInt(els.melodyDensity.value, 10) || 80) / 100));
    const styleConfig = getMelodyStyleConfig();
    const style = styleConfig.style;
    const cadence = els.melodyCadence.value || 'tonic';
    const rate = els.melodyRate.value || '1/16';
    const rules = styleConfig.rules;
    const rhythmMode = styleConfig.rhythmMode;
    const rhythmPattern = styleConfig.rhythmPattern;
    const def = getMelodyScaleDefinition();
    const pool = getMelodyScalePool(range);
    if (!pool.length) return [];

    state.melody.seed = seed;
    state.melody.length = length;
    state.melody.range = range;
    state.melody.density = density;
    state.melody.style = style;
    state.melody.cadence = cadence;
    state.melody.rate = rate;
    state.melody.rules = { ...rules };
    state.melody.rhythmMode = rhythmMode;
    state.melody.rhythmPattern = rhythmPattern;

    const rng = createSeededRng(seed);
    const base = 60 + def.root + (getMelodyBaseOctave() * 12);
    const styleWeights = {
        smooth: [
            { value: -2, weight: 1 }, { value: -1, weight: 3 }, { value: 0, weight: 2 },
            { value: 1, weight: 3 }, { value: 2, weight: 1 }, { value: -3, weight: 0.4 }, { value: 3, weight: 0.4 }
        ],
        balanced: [
            { value: -4, weight: 0.6 }, { value: -3, weight: 0.9 }, { value: -2, weight: 1.4 },
            { value: -1, weight: 2.2 }, { value: 0, weight: 2.4 }, { value: 1, weight: 2.2 },
            { value: 2, weight: 1.4 }, { value: 3, weight: 0.9 }, { value: 4, weight: 0.6 }
        ],
        leaps: [
            { value: -6, weight: 1.2 }, { value: -5, weight: 1.1 }, { value: -4, weight: 1.0 },
            { value: -3, weight: 0.8 }, { value: -2, weight: 0.5 }, { value: -1, weight: 0.3 },
            { value: 1, weight: 0.3 }, { value: 2, weight: 0.5 }, { value: 3, weight: 0.8 },
            { value: 4, weight: 1.0 }, { value: 5, weight: 1.1 }, { value: 6, weight: 1.2 }
        ]
    };

    const rootPc = def.root % 12;
    const thirdOffset = def.degrees[2] ?? 4;
    const fifthOffset = def.degrees[4] ?? 7;
    const chordPcs = [
        rootPc,
        (rootPc + thirdOffset) % 12,
        (rootPc + fifthOffset) % 12
    ];
    const chordPool = pool.filter(n => chordPcs.includes(n % 12));

    const notes = [];
    let lastNote = null;
    let lastInterval = 0;
    let rhythmMask = null;
    if (rhythmMode === 'pattern' && rhythmPattern) {
        rhythmMask = buildPatternMask(length, rhythmPattern);
    } else if (rhythmMode === 'rule' && rules.rhythm) {
        rhythmMask = buildRhythmMask(rng, length);
    }
    const motifLen = rules.motif ? (2 + Math.floor(rng() * 3)) : 0;
    const motif = rules.motif ? [] : null;

    function pickNote(activeStyle) {
        if (!pool.length) return null;
        if (activeStyle === 'arpeggio') {
            const src = chordPool.length ? chordPool : pool;
            return src[Math.floor(rng() * src.length)];
        }
        if (lastNote == null) return pool[Math.floor(rng() * pool.length)];
        const baseWeights = styleWeights[activeStyle] || styleWeights.balanced;
        const weights = adjustWeightsForRules(baseWeights, rules);
        let step = chooseWeighted(rng, weights);
        if (rules.leaps && Math.abs(lastInterval) >= 4 && rng() < 0.85) {
            step = -Math.sign(lastInterval || 1) * (rng() < 0.7 ? 1 : 2);
        } else if (Math.abs(lastInterval) >= 3 && rng() < 0.7) {
            step = -Math.sign(lastInterval || 1) * (rng() < 0.6 ? 1 : 2);
        }
        let idx = findNearestIndex(pool, lastNote) + step;
        idx = Math.max(0, Math.min(pool.length - 1, idx));
        return pool[idx];
    }

    const callLen = Math.ceil(length / 2);
    for (let i = 0; i < length; i++) {
        if (rhythmMask && !rhythmMask[i]) {
            notes.push(null);
            continue;
        }
        if (rng() > density) {
            notes.push(null);
            continue;
        }
        let note = null;
        if (rules.motif && motif && i < motifLen) {
            note = pickNote(style === 'call' ? 'smooth' : style);
            motif.push(note);
        } else if (rules.motif && motif && i >= motifLen) {
            note = motif[i % motifLen];
        } else if (style === 'call' && i >= callLen) {
            const anchor = notes[i - callLen];
            if (anchor != null) {
                const anchorIdx = findNearestIndex(pool, anchor);
                const shift = chooseWeighted(rng, [
                    { value: -1, weight: 1.5 }, { value: 0, weight: 2.5 }, { value: 1, weight: 1.5 }
                ]);
                const idx = Math.max(0, Math.min(pool.length - 1, anchorIdx + shift));
                note = pool[idx];
            } else {
                note = pickNote('smooth');
            }
        } else {
            const activeStyle = style === 'call' ? 'smooth' : style;
            note = pickNote(activeStyle);
        }
        if (rules.stepwise && note != null && lastNote != null && note === lastNote && rng() < 0.8) {
            note = pickNote('smooth');
        }
        notes.push(note);
        if (note != null && lastNote != null) lastInterval = note - lastNote;
        if (note != null) lastNote = note;
    }

    if (notes.length && cadence !== 'none') {
        let cadencePc = rootPc;
        if (cadence === 'dominant') cadencePc = (rootPc + 7) % 12;
        else if (cadence === 'subdominant') cadencePc = (rootPc + 5) % 12;
        else if (cadence === 'mediant') cadencePc = (rootPc + 4) % 12;
        else if (cadence === 'leading') cadencePc = (rootPc + 11) % 12;
        notes[notes.length - 1] = getCadenceNote(pool, cadencePc, base);
    }

    return notes;
}

const MELODY_MIN_RELEASE = 0.06;

let essentiaInstance = null;
let magentaModel = null;
let magentaLoadPromise = null;
let musicRnnModel = null;
let musicRnnLoadPromise = null;
const MUSIC_RNN_PITCH_MIN = 48;
const MUSIC_RNN_PITCH_MAX = 84;

function clearMelodyContinuationState() {
    if (!state.melody) return;
    state.melody.continue = null;
}

function melodyNotesMatch(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function clearMelodyPendingTimers() {
    if (!state.melody.pendingTimers?.length) return;
    state.melody.pendingTimers.forEach(t => clearTimeout(t));
    state.melody.pendingTimers = [];
}

function randomCurve(scale, curve = 1.6) {
    if (!scale) return 0;
    const r = Math.random() * 2 - 1;
    const shaped = Math.sign(r) * Math.pow(Math.abs(r), curve);
    return shaped * scale;
}

function loadScriptOnce(src) {
    return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', reject);
            return resolve();
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

async function ensureMagentaScripts() {
    if (!window.mm) {
        await loadScriptOnce('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.7.0/dist/tf.min.js');
        await loadScriptOnce('https://cdn.jsdelivr.net/npm/@magenta/music@1.23.1/dist/magentamusic.min.js');
    }
    if (!window.mm) throw new Error('Magenta not available');
    if (window.tf?.ready) {
        await window.tf.ready();
    }
    if (window.tf?.setBackend && window.tf?.getBackend) {
        const currentBackend = window.tf.getBackend();
        if (!currentBackend || currentBackend === 'cpu') {
            try {
                await window.tf.setBackend('webgl');
                await window.tf.ready();
            } catch (err) {
                console.warn('TFJS backend switch failed', err);
            }
        }
    }
}

async function loadMagenta() {
    if (magentaLoadPromise) return magentaLoadPromise;
    magentaLoadPromise = (async () => {
        await ensureMagentaScripts();
        if (!magentaModel) {
            const checkpoints = [
                'https://storage.googleapis.com/magentadata/js/checkpoints/transcription/onsets_frames_uni_q2',
                'https://storage.googleapis.com/magentadata/js/checkpoints/transcription/onsets_frames_uni'
            ];
            let lastError = null;
            for (const checkpoint of checkpoints) {
                try {
                    magentaModel = new window.mm.OnsetsAndFrames(checkpoint);
                    await magentaModel.initialize();
                    lastError = null;
                    break;
                } catch (err) {
                    lastError = err;
                    magentaModel = null;
                }
            }
            if (lastError) throw lastError;
        }
        return magentaModel;
    })();
    return magentaLoadPromise;
}

async function loadMusicRnn() {
    if (musicRnnLoadPromise) return musicRnnLoadPromise;
    musicRnnLoadPromise = (async () => {
        await ensureMagentaScripts();
        if (!musicRnnModel) {
            const checkpoint = 'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn';
            musicRnnModel = new window.mm.MusicRNN(checkpoint);
            await musicRnnModel.initialize();
        }
        return musicRnnModel;
    })();
    return musicRnnLoadPromise;
}

function buildQuantizedSeedFromMelody(seedSteps) {
    const notes = Array.isArray(state.melody.notes) ? state.melody.notes : [];
    if (!notes.length) return null;
    const steps = Math.max(4, Math.min(seedSteps || notes.length, notes.length));
    const startIndex = Math.max(0, notes.length - steps);
    const seqNotes = [];
    const fitToRange = (pitch) => {
        let p = Math.max(0, Math.min(127, Math.round(pitch)));
        while (p < MUSIC_RNN_PITCH_MIN) p += 12;
        while (p > MUSIC_RNN_PITCH_MAX) p -= 12;
        return Math.max(MUSIC_RNN_PITCH_MIN, Math.min(MUSIC_RNN_PITCH_MAX, p));
    };
    for (let i = startIndex; i < notes.length; i += 1) {
        const pitch = notes[i];
        if (pitch == null || Number.isNaN(pitch)) continue;
        const quantizedStartStep = i - startIndex;
        seqNotes.push({
            pitch: fitToRange(pitch),
            quantizedStartStep,
            quantizedEndStep: quantizedStartStep + 1,
            velocity: 90
        });
    }
    return {
        notes: seqNotes,
        totalQuantizedSteps: steps,
        quantizationInfo: { stepsPerQuarter: 4 },
        tempos: [{ qpm: 120 }]
    };
}

function buildRhythmMaskFromNotes(notes, steps) {
    const mask = [];
    if (!Array.isArray(notes) || !notes.length) return mask;
    const start = Math.max(0, notes.length - steps);
    for (let i = start; i < notes.length; i += 1) {
        mask.push(notes[i] != null);
    }
    return mask;
}

function buildRhythmMaskForContinuation(baseMask, steps, similarity, density, rng) {
    const result = new Array(steps).fill(false);
    const sim = Math.max(0, Math.min(1, similarity));
    const dens = Math.max(0.1, Math.min(1, density));
    for (let i = 0; i < steps; i += 1) {
        const baseActive = baseMask[i % baseMask.length] === true;
        if (sim >= 0.999) {
            result[i] = baseActive;
            continue;
        }
        if (sim <= 0.001) {
            result[i] = rng() < dens;
            continue;
        }
        if (baseActive) {
            result[i] = rng() < (sim + (1 - sim) * dens);
        } else {
            result[i] = rng() < ((1 - sim) * dens);
        }
    }
    return result;
}

function applyRhythmMaskToQuantizedSequence(seq, mask) {
    if (!seq?.notes?.length || !mask?.length) return seq;
    const kept = seq.notes.filter(n => {
        const step = Number.isFinite(n.quantizedStartStep) ? n.quantizedStartStep : 0;
        if (step < 0 || step >= mask.length) return false;
        return mask[step];
    });
    return { ...seq, notes: kept };
}

function quantizePitchToScale(pitch) {
    if (!Number.isFinite(pitch)) return pitch;
    const def = getScaleDefinition();
    const scaleKey = `${def.mode}:${def.name}`;
    if (!state.scaleNotes.notes.length || state.scaleNotes.root !== def.root || state.scaleNotes.scale !== scaleKey) {
        updateScaleNotes();
    }
    const pool = state.scaleNotes.notes || [];
    if (!pool.length) return pitch;
    let best = pool[0];
    let bestDist = Math.abs(best - pitch);
    for (let i = 1; i < pool.length; i += 1) {
        const dist = Math.abs(pool[i] - pitch);
        if (dist < bestDist) {
            bestDist = dist;
            best = pool[i];
        }
    }
    return best;
}

function applyScaleToQuantizedSequence(seq) {
    if (!seq?.notes?.length) return seq;
    const updated = seq.notes.map(n => ({
        ...n,
        pitch: Math.max(0, Math.min(127, Math.round(quantizePitchToScale(n.pitch))))
    }));
    return { ...seq, notes: updated };
}

function appendQuantizedSequenceToMelody(seq, maxSteps) {
    if (!seq?.notes?.length) return 0;
    const stepsToAdd = Math.max(4, Math.min(maxSteps || 16, seq.totalQuantizedSteps || maxSteps || 16));
    const baseLen = state.melody.notes.length || 0;
    if (!Array.isArray(state.melody.notes)) state.melody.notes = [];
    for (let i = 0; i < stepsToAdd; i += 1) {
        state.melody.notes.push(null);
    }
    seq.notes.forEach(n => {
        const step = Number.isFinite(n.quantizedStartStep) ? n.quantizedStartStep : 0;
        if (step < 0 || step >= stepsToAdd) return;
        const pitch = Number.isFinite(n.pitch) ? n.pitch : 60;
        state.melody.notes[baseLen + step] = Math.max(0, Math.min(127, Math.round(pitch)));
    });
    state.melody.length = state.melody.notes.length;
    if (els.melodyLength) els.melodyLength.value = state.melody.length;
    return stepsToAdd;
}

async function generateMelodyContinuation(options = {}) {
    const steps = Math.max(4, Math.min(64, options.steps || 16));
    const temperature = Math.max(0.4, Math.min(2, options.temperature || 1));
    const similarity = Math.max(0, Math.min(1, options.rhythmSimilarity ?? 0.7));
    const baseLength = Number.isFinite(options.baseLength) ? options.baseLength : state.melody.notes.length;
    const seedSteps = Math.max(4, Math.min(32, options.seedSteps || 16));
    const forceScale = !!options.forceScale;
    if (!state.melody.notes?.length || state.melody.notes.length < 2) {
        throw new Error('No melody to continue');
    }
    const model = await loadMusicRnn();
    const seed = buildQuantizedSeedFromMelody(Math.min(seedSteps, state.melody.notes.length));
    if (!seed?.notes?.length) throw new Error('Seed too short');
    let continuation = await model.continueSequence(seed, steps, temperature);
    if (forceScale) {
        continuation = applyScaleToQuantizedSequence(continuation);
    }
    let baseMask = null;
    if (state.melody.rhythmMode === 'pattern' && state.melody.rhythmPattern) {
        baseMask = buildPatternMask(Math.min(seedSteps, baseLength), state.melody.rhythmPattern);
    } else {
        baseMask = buildRhythmMaskFromNotes(state.melody.notes.slice(0, baseLength), Math.min(seedSteps, baseLength));
    }
    if (baseMask.length) {
        const rng = createSeededRng((state.melody.seed || 1) + Math.round(temperature * 100));
        const mask = buildRhythmMaskForContinuation(baseMask, steps, similarity, state.melody.density || 0.7, rng);
        let filtered = applyRhythmMaskToQuantizedSequence(continuation, mask);
        if (forceScale) {
            filtered = applyScaleToQuantizedSequence(filtered);
        }
        return { seq: filtered, baseLength };
    }
    return { seq: continuation, baseLength };
}

async function regenerateMelodyContinuation() {
    if (!state.melody?.continue || state.melody.continue.regenerating) return;
    if (state.melody.continue.baseLength == null) return;
    state.melody.continue.regenerating = true;
    try {
        const baseLength = state.melody.continue.baseLength;
        const baseNotes = state.melody.continue.baseNotes || state.melody.notes.slice(0, baseLength);
        state.melody.notes = [...baseNotes];
        state.melody.continue.baseNotes = [...baseNotes];
        const result = await generateMelodyContinuation({
            steps: state.melody.continue.steps,
            temperature: state.melody.continue.temperature,
            rhythmSimilarity: state.melody.continue.rhythmSimilarity,
            seedSteps: state.melody.continue.seedSteps,
            baseLength,
            forceScale: !!state.melody.continue.forceScale
        });
        appendQuantizedSequenceToMelody(result.seq, state.melody.continue.steps);
        state.melody.imported = true;
        state.melody.importedFeatures = null;
        state.melody.stepIndex = 0;
        updateMelodyPreview();
        setMelodyEditStep(0);
        if (state.melody.running) restartMelodyGenerator();
        updateMelodyStatusUI();
        setMelodyStatusLog('auto-continue');
        if (els.melodyContinueStatus) {
            els.melodyContinueStatus.textContent = `Auto updated (${state.melody.continue.steps} steps).`;
        }
    } catch (err) {
        console.error('Auto continue failed', err);
        if (els.melodyContinueStatus) {
            const msg = err?.message || String(err || 'Unknown error');
            els.melodyContinueStatus.textContent = `Auto continue failed: ${msg}`;
        }
    } finally {
        state.melody.continue.regenerating = false;
    }
}

function buildNotesFromNoteSequence(seq) {
    if (!seq?.notes?.length) return { notes: [], features: null };
    const stepMs = getMelodyStepMs();
    const durationSec = seq.totalTime || Math.max(...seq.notes.map(n => n.endTime || 0));
    const steps = Math.max(4, Math.min(64, Math.round((durationSec * 1000) / stepMs)));
    const notes = new Array(steps).fill(null);
    const velocities = new Array(steps).fill(null);
    seq.notes.forEach(n => {
        const tMs = (n.startTime || 0) * 1000;
        const idx = Math.max(0, Math.min(steps - 1, Math.round(tMs / stepMs)));
        const vel = Number.isFinite(n.velocity) ? n.velocity : 90;
        if (notes[idx] == null || vel > (velocities[idx] ?? 0)) {
            notes[idx] = Math.max(0, Math.min(127, n.pitch ?? 60));
            velocities[idx] = vel;
        }
    });
    const features = { velocity: velocities.map(v => v ?? 90), press: [], slide: [] };
    return { notes, features };
}

function getEssentiaInstance() {
    if (essentiaInstance) return essentiaInstance;
    if (!window.Essentia || !window.EssentiaWASM) return null;
    try {
        essentiaInstance = new window.Essentia(window.EssentiaWASM);
    } catch (err) {
        try {
            essentiaInstance = new window.Essentia(EssentiaWASM);
        } catch (err2) {
            return null;
        }
    }
    return essentiaInstance;
}

function downmixToMono(buffer) {
    if (buffer.numberOfChannels === 1) return buffer.getChannelData(0);
    const length = buffer.length;
    const channels = buffer.numberOfChannels;
    const mono = new Float32Array(length);
    for (let ch = 0; ch < channels; ch++) {
        const data = buffer.getChannelData(ch);
        for (let i = 0; i < length; i++) mono[i] += data[i] / channels;
    }
    return mono;
}

function frameRms(frame) {
    let sum = 0;
    for (let i = 0; i < frame.length; i++) {
        const v = frame[i];
        sum += v * v;
    }
    return Math.sqrt(sum / frame.length);
}

function detectOnsetsFromRms(frames, sampleRate, hopSize) {
    if (!frames.length) return [];
    const rmsVals = frames.map(f => f.rms || 0);
    const mean = rmsVals.reduce((s, v) => s + v, 0) / rmsVals.length;
    const threshold = mean * 1.8;
    const onsets = [];
    for (let i = 1; i < rmsVals.length - 1; i++) {
        const prev = rmsVals[i - 1];
        const cur = rmsVals[i];
        const next = rmsVals[i + 1];
        if (cur > threshold && cur > prev * 1.25 && cur >= next) {
            const time = ((i * hopSize) + (1024)) / sampleRate;
            onsets.push({ index: i, time });
        }
    }
    return onsets;
}

function buildNotesFromOnsets(frames, onsets, sampleRate, hopSize, stepMs, maxSteps) {
    if (!onsets.length) return [];
    const durationMs = frames.length * hopSize / sampleRate * 1000;
    const steps = Math.max(4, Math.min(maxSteps, Math.ceil(durationMs / stepMs)));
    const notes = new Array(steps).fill(null);
    for (let o = 0; o < onsets.length; o++) {
        const startIdx = onsets[o].index;
        const endIdx = o + 1 < onsets.length ? onsets[o + 1].index : frames.length - 1;
        const pitches = [];
        for (let i = startIdx; i <= endIdx; i++) {
            const p = frames[i]?.pitch;
            if (Number.isFinite(p) && p > 0) pitches.push(freqToMidi(p));
        }
        if (!pitches.length) continue;
        pitches.sort((a, b) => a - b);
        const mid = pitches[Math.floor(pitches.length / 2)];
        const note = Math.max(0, Math.min(127, Math.round(mid)));
        const timeMs = onsets[o].time * 1000;
        const stepIdx = Math.max(0, Math.min(steps - 1, Math.round(timeMs / stepMs)));
        notes[stepIdx] = note;
    }
    return notes;
}

function estimatePitchAutocorr(frame, sampleRate) {
    const size = frame.length;
    let bestLag = -1;
    let bestVal = 0;
    const minLag = Math.floor(sampleRate / 1000);
    const maxLag = Math.floor(sampleRate / 60);
    for (let lag = minLag; lag <= maxLag; lag++) {
        let sum = 0;
        for (let i = 0; i < size - lag; i++) sum += frame[i] * frame[i + lag];
        if (sum > bestVal) {
            bestVal = sum;
            bestLag = lag;
        }
    }
    if (bestLag <= 0) return null;
    const freq = sampleRate / bestLag;
    return freq;
}

function mapFeature(value, minVal, maxVal, outMin, outMax) {
    if (!Number.isFinite(value)) return null;
    const span = maxVal - minVal;
    if (span <= 0) return (outMin + outMax) / 2;
    const t = Math.max(0, Math.min(1, (value - minVal) / span));
    return outMin + (outMax - outMin) * t;
}

function estimatePitchEssentia(essentia, frame, sampleRate) {
    try {
        let res = null;
        try {
            res = essentia.PitchYinFFT(frame, { sampleRate });
        } catch (err) {
            res = essentia.PitchYinFFT(frame, sampleRate);
        }
        const pitch = res?.pitch ?? res?.[0];
        const confidence = res?.pitchConfidence ?? res?.[1] ?? res?.confidence ?? 0;
        if (!Number.isFinite(pitch) || pitch <= 0) return null;
        if (Number.isFinite(confidence) && confidence < 0.6) return null;
        return pitch;
    } catch (err) {
        return null;
    }
}

function freqToMidi(freq) {
    return 69 + 12 * (Math.log(freq / 440) / Math.log(2));
}

function extractMelodyNotesFromAudio(buffer) {
    const mono = downmixToMono(buffer);
    const sampleRate = buffer.sampleRate;
    const frameSize = 2048;
    const hopSize = 512;
    const totalFrames = Math.max(0, Math.floor((mono.length - frameSize) / hopSize));
    if (!totalFrames) return { notes: [], features: null };

    const essentia = getEssentiaInstance();
    const frames = [];
    let maxRms = 0;
    let minCentroid = Infinity;
    let maxCentroid = -Infinity;

    for (let i = 0; i < totalFrames; i++) {
        const start = i * hopSize;
        const frame = mono.subarray(start, start + frameSize);
        const rms = frameRms(frame);
        maxRms = Math.max(maxRms, rms);
        let pitch = null;
        let centroid = null;
        let flatness = null;
        if (essentia) {
            pitch = estimatePitchEssentia(essentia, frame, sampleRate);
            try {
                const spec = essentia.Spectrum(frame);
                const cent = essentia.SpectralCentroidTime(spec, sampleRate);
                centroid = cent?.spectralCentroid ?? cent?.[0] ?? null;
                const flat = essentia.SpectralFlatness(spec);
                flatness = flat?.spectralFlatness ?? flat?.[0] ?? null;
            } catch (err) {
                centroid = null;
                flatness = null;
            }
        }
        if (!pitch) pitch = estimatePitchAutocorr(frame, sampleRate);
        if (Number.isFinite(centroid)) {
            minCentroid = Math.min(minCentroid, centroid);
            maxCentroid = Math.max(maxCentroid, centroid);
        }
        frames.push({ time: (start + frameSize * 0.5) / sampleRate, pitch, rms, centroid, flatness });
    }

    const stepMs = getMelodyStepMs();
    const onsets = detectOnsetsFromRms(frames, sampleRate, hopSize);

    const buildFeatures = (segments) => {
        const velocity = [];
        const press = [];
        const slide = [];
        segments.forEach(seg => {
            let sumRms = 0;
            let countRms = 0;
            let sumCent = 0;
            let countCent = 0;
            let sumFlat = 0;
            let countFlat = 0;
            for (let i = seg.start; i <= seg.end; i++) {
                const f = frames[i];
                if (!f) continue;
                if (Number.isFinite(f.rms)) { sumRms += f.rms; countRms++; }
                if (Number.isFinite(f.centroid)) { sumCent += f.centroid; countCent++; }
                if (Number.isFinite(f.flatness)) { sumFlat += f.flatness; countFlat++; }
            }
            const avgRms = countRms ? sumRms / countRms : 0;
            const avgCent = countCent ? sumCent / countCent : null;
            const avgFlat = countFlat ? sumFlat / countFlat : null;
            const vel = mapFeature(avgRms, 0, maxRms || 1, 20, 120);
            const sli = mapFeature(avgCent, minCentroid, maxCentroid, 0, 127);
            const pre = mapFeature(avgFlat, 0, 1, 20, 120);
            velocity.push(Math.round(vel ?? 90));
            slide.push(Math.round(sli ?? 64));
            press.push(Math.round(pre ?? 90));
        });
        return { velocity, press, slide };
    };

    if (onsets.length >= 2) {
        const notes = buildNotesFromOnsets(frames, onsets, sampleRate, hopSize, stepMs, 64);
        const segments = onsets.map((o, idx) => ({
            start: o.index,
            end: (idx + 1 < onsets.length ? onsets[idx + 1].index : frames.length - 1)
        }));
        const features = buildFeatures(segments);
        return { notes, features };
    }

    const rmsThreshold = maxRms * 0.1;
    const durationMs = (mono.length / sampleRate) * 1000;
    const steps = Math.max(4, Math.min(64, Math.round(durationMs / stepMs)));
    const stepSec = (durationMs / 1000) / steps;
    const notes = [];
    const segments = [];

    for (let s = 0; s < steps; s++) {
        const tStart = s * stepSec;
        const tEnd = tStart + stepSec;
        const pitches = [];
        let startIdx = null;
        let endIdx = null;
        frames.forEach((f, idx) => {
            if (f.time >= tStart && f.time < tEnd) {
                if (startIdx === null) startIdx = idx;
                endIdx = idx;
                if (f.rms >= rmsThreshold && f.pitch) pitches.push(freqToMidi(f.pitch));
            }
        });
        if (!pitches.length) {
            notes.push(null);
            segments.push({ start: startIdx != null ? startIdx : 0, end: endIdx != null ? endIdx : 0 });
            continue;
        }
        pitches.sort((a, b) => a - b);
        const mid = pitches[Math.floor(pitches.length / 2)];
        const note = Math.max(0, Math.min(127, mid));
        notes.push(note);
        segments.push({ start: startIdx != null ? startIdx : 0, end: endIdx != null ? endIdx : 0 });
    }
    const features = buildFeatures(segments);
    return { notes, features };
}


function getMelodyVirtualY() {
    if (!Number.isFinite(state.melody.virtualPhase)) {
        state.melody.virtualPhase = (state.melody.seed || 1) * 0.37;
    }
    const timing = Math.max(0, state.melody.humanize?.timing || 0);
    const yMotion = Math.max(0, Math.min(100, state.melody.humanize?.yMotion ?? 35));
    if (!state.melody.humanize?.yMotionEnabled || yMotion === 0) {
        state.melody.lastVirtualY = 0.5;
        return 0.5;
    }
    const speed = 0.2 + (Math.min(30, timing) / 30) * (0.1 + (yMotion / 100) * 0.4);
    state.melody.virtualPhase += speed;
    const amp = 0.25 + (yMotion / 100) * 0.6;
    const wobbleA = Math.sin(state.melody.virtualPhase);
    const wobbleB = Math.sin(state.melody.virtualPhase * 0.5 + 1.7) * 0.35;
    const wobble = (wobbleA + wobbleB) * 0.5;
    const yNorm = Math.max(0, Math.min(1, 0.5 + wobble * amp));
    state.melody.lastVirtualY = yNorm;
    return yNorm;
}

function applyMelodyMpe(chan, press, slide, pbValue) {
    const ch = Math.max(1, Math.min(16, chan));
    const sendOut = state.midi.hardwareOutput ? sendMidiHardware : sendMidi;
    if (Number.isFinite(press)) {
        const p = Math.max(0, Math.min(127, Math.round(press)));
        state.audio.channelPress.set(ch, p);
        updateChannelPress(ch);
        sendOut([0xD0 + ch - 1, p]);
    }
    if (Number.isFinite(slide)) {
        const s = Math.max(0, Math.min(127, Math.round(slide)));
        state.audio.channelTimbre.set(ch, s);
        updateChannelTimbre(ch);
        sendOut([0xB0 + ch - 1, 74, s]);
    }
    if (Number.isFinite(pbValue)) {
        const pb = Math.max(0, Math.min(16383, Math.round(pbValue)));
        state.audio.channelPb.set(ch, pb);
        updateChannelPitch(ch);
        sendOut([0xE0 + ch - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
    }
}

function releaseMelodyVoices(minRelease = 0) {
    const voices = state.melody.lastVoices || [];
    if (!voices.length) return;
    voices.forEach(v => {
        noteOffInternal(v.note, v.chan, minRelease);
        sendMidiHardware([0x80 + v.chan - 1, v.note, 0], { isMelody: true });
        state.melody.voiceKeys?.delete?.(`${v.chan}:${v.note}`);
        if (state.melody.mpePerNote && v.chan > 1 && v.chan <= 16) {
            state.mpeChannels.push(v.chan);
        }
    });
    if (state.melody.mpePerNote) {
        state.mpeChannels.sort((a, b) => a - b);
    }
    state.melody.lastVoices = [];
}

function allocateMelodyVoices(notesToPlay) {
    if (!notesToPlay.length) return [];
    const noteValues = notesToPlay.map(n => Number(n)).filter(n => Number.isFinite(n));
    if (state.melody.latchEnabled) {
        return noteValues.map(n => ({ chan: state.melody.chan, note: Math.round(n), noteFloat: n, basePb: 0 }));
    }
    if (!state.melody.mpePerNote) {
        return noteValues.map(n => ({ chan: state.melody.chan, note: Math.round(n), noteFloat: n, basePb: 0 }));
    }
    if (state.mpeChannels.length < noteValues.length) {
        els.midiStatus.innerText = 'MPE CHANNELS FULL';
        return noteValues.map(n => ({ chan: state.melody.chan, note: Math.round(n), noteFloat: n, basePb: 0 }));
    }
    return noteValues.map(n => {
        const chan = state.mpeChannels.shift();
        return { chan, note: Math.round(n), noteFloat: n, basePb: 0 };
    });
}

function applyMelodyMpeToVoices(voices, press, slide, pbValue) {
    if (!voices?.length) return;
    if (state.melody.latchEnabled) {
        applyMelodyMpe(state.melody.chan, press, slide, pbValue);
        return;
    }
    const seen = new Set();
    voices.forEach(v => {
        if (seen.has(v.chan)) return;
        seen.add(v.chan);
        applyMelodyMpe(v.chan, press, slide, pbValue);
        if (Number.isFinite(v.noteFloat) && v.note != null) {
            const detune = v.noteFloat - v.note;
            const pbRange = parseInt(els.pbRange?.value, 10) || 48;
            const pb = Math.max(0, Math.min(16383, Math.round(8192 + (detune * (8192 / pbRange)))));
            sendMidi([0xE0 + v.chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
        }
    });
}

function getScaleNeighbor(note, dir) {
    const def = getMelodyScaleDefinition();
    const root = def.root;
    const scaleKey = `${def.mode}:${def.name}`;
    const useLatch = !!state.melody.latchEnabled && state.melody.latchScale?.notes?.length;
    if (!useLatch && (!state.scaleNotes.notes.length || state.scaleNotes.root !== root || state.scaleNotes.scale !== scaleKey)) {
        updateScaleNotes();
    }
    const notes = useLatch ? state.melody.latchScale.notes : (state.scaleNotes.notes || []);
    if (!notes.length) return note;
    let idx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < notes.length; i++) {
        const dist = Math.abs(notes[i] - note);
        if (dist < bestDist) {
            bestDist = dist;
            idx = i;
        }
    }
    const next = idx + (dir >= 0 ? 1 : -1);
    if (next >= 0 && next < notes.length) return notes[next];
    return note;
}

function loadMelodySaves() {
    try {
        const raw = localStorage.getItem(MELODY_SAVE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (err) {
        return {};
    }
}

function saveMelodySaves(saves) {
    try {
        localStorage.setItem(MELODY_SAVE_KEY, JSON.stringify(saves || {}));
    } catch (err) {
        // Ignore storage errors.
    }
}

function refreshMelodySaveSelect(saves, selected) {
    if (!els.melodySaveSelect) return;
    const names = Object.keys(saves || {}).sort();
    fillSelectFromNames(els.melodySaveSelect, names, 'Saved melodies');
    if (selected && names.includes(selected)) els.melodySaveSelect.value = selected;
}

function getMelodySaveParams() {
    const cont = state.melody.continue || {};
    const rhythmSimilarity = cont.rhythmSimilarity ?? ((parseInt(els.melodyContinueRhythm?.value, 10) || 70) / 100);
    return {
        scale: {
            rootNote: els.rootNote?.value,
            scaleType: els.scaleType?.value,
            scaleMode: els.scaleModeDiatonic?.checked ? 'diatonic' : (els.scaleModeMicro?.checked ? 'microtonal' : 'custom'),
            microScaleName: els.microScaleSelect?.value,
            customScaleName: els.customScaleName?.value,
            customScaleMode: els.customModeNotes?.checked ? 'notes' : 'cents',
            customScaleNotes: els.customScaleNotes?.value,
            customScaleCents: els.customScaleCents?.value,
            microtonalizeIn: getScaleMode() === 'microtonal'
        },
        length: state.melody.length,
        rate: state.melody.rate,
        range: state.melody.range,
        density: state.melody.density,
        style: state.melody.style,
        seed: state.melody.seed,
        cadence: state.melody.cadence,
        layer: { ...state.melody.layer },
        rules: { ...state.melody.rules },
        rhythmMode: state.melody.rhythmMode || 'rule',
        rhythmPattern: state.melody.rhythmPattern || '',
        humanize: { ...state.melody.humanize },
        mpePerNote: !!state.melody.mpePerNote,
        continue: {
            steps: cont.steps ?? (parseInt(els.melodyContinueSteps?.value, 10) || 16),
            temperature: cont.temperature ?? (parseFloat(els.melodyContinueTemp?.value) || 1),
            rhythmSimilarity,
            //auto: cont.auto ?? !!els.melodyContinueAuto?.checked,
            forceScale: cont.forceScale ?? !!els.melodyContinueScale?.checked
        }
    };
}

function applyMelodySaveParams(saved) {
    const params = saved?.params || saved || {};
    const scale = params.scale;
    if (scale) {
        if (els.rootNote && scale.rootNote != null) els.rootNote.value = scale.rootNote;
        if (els.scaleType && scale.scaleType) els.scaleType.value = scale.scaleType;
        if (els.scaleModeMicro && els.scaleModeCustom && els.scaleModeDiatonic) {
            if (scale.scaleMode === 'microtonal') els.scaleModeMicro.checked = true;
            else if (scale.scaleMode === 'custom') els.scaleModeCustom.checked = true;
            else els.scaleModeDiatonic.checked = true;
        }
        if (els.microScaleSelect && scale.microScaleName) els.microScaleSelect.value = scale.microScaleName;
        if (els.microtonalizeIn && scale.microtonalizeIn != null) els.microtonalizeIn.checked = !!scale.microtonalizeIn;
        if (scale.customScaleName && els.customScaleName) {
            els.customScaleName.value = scale.customScaleName;
            if (state.customScales?.[scale.customScaleName]) {
                const entry = state.customScales[scale.customScaleName];
                if (entry.type === 'notes') {
                    if (els.customModeNotes) els.customModeNotes.checked = true;
                    if (els.customScaleNotes) els.customScaleNotes.value = formatNotesList(entry.degrees || []);
                } else {
                    if (els.customModeCents) els.customModeCents.checked = true;
                    if (els.customScaleCents) els.customScaleCents.value = formatCentsList(entry.cents || []);
                }
            }
        }
        if (scale.customScaleMode === 'notes') {
            if (els.customModeNotes) els.customModeNotes.checked = true;
            if (els.customScaleNotes && scale.customScaleNotes) {
                els.customScaleNotes.value = scale.customScaleNotes;
            }
        } else if (scale.customScaleMode === 'cents') {
            if (els.customModeCents) els.customModeCents.checked = true;
            if (els.customScaleCents && scale.customScaleCents) {
                els.customScaleCents.value = scale.customScaleCents;
            }
        }
        updateScaleModeUI();
        scheduleScaleUpdate();
    }
    if (els.melodyStyle && params.style) els.melodyStyle.value = params.style;
    if (els.melodyLength) {
        const len = params.length ?? saved?.notes?.length ?? els.melodyLength.value;
        if (Number.isFinite(len)) els.melodyLength.value = len;
    }
    if (els.melodyRate && params.rate) els.melodyRate.value = params.rate;
    if (els.melodyRange && Number.isFinite(params.range)) els.melodyRange.value = params.range;
    if (els.melodyDensity && Number.isFinite(params.density)) {
        const dens = params.density <= 1 ? Math.round(params.density * 100) : Math.round(params.density);
        els.melodyDensity.value = Math.max(20, Math.min(100, dens));
    }
    if (els.melodySeed && Number.isFinite(params.seed)) els.melodySeed.value = params.seed;
    if (els.melodyCadence && params.cadence) els.melodyCadence.value = params.cadence;
    if (params.layer) {
        if (els.melodyLayerMode && params.layer.mode) els.melodyLayerMode.value = params.layer.mode;
        if (els.melodyLayerLevel && Number.isFinite(params.layer.level)) els.melodyLayerLevel.value = params.layer.level;
        state.melody.layer = { ...state.melody.layer, ...params.layer };
        updateLayerToggleUI();
    }
    if (params.rules) {
        if (els.melodyRuleSelect && params.rules) {
            const { stepwise, motif, rhythm, leaps } = params.rules;
            if (stepwise && motif && rhythm && leaps) {
                els.melodyRuleSelect.value = 'all';
            } else if (stepwise && !motif && !rhythm && !leaps) {
                els.melodyRuleSelect.value = 'stepwise';
            } else if (!stepwise && motif && !rhythm && !leaps) {
                els.melodyRuleSelect.value = 'motif';
            } else if (!stepwise && !motif && rhythm && !leaps) {
                els.melodyRuleSelect.value = 'rhythm';
            } else if (!stepwise && !motif && !rhythm && leaps) {
                els.melodyRuleSelect.value = 'leaps';
            } else {
                els.melodyRuleSelect.value = 'all';
            }
        }
    }
    if (els.melodyRhythmMode && params.rhythmMode) {
        els.melodyRhythmMode.value = params.rhythmMode;
    }
    if (els.melodyRhythmPattern && params.rhythmPattern != null) {
        els.melodyRhythmPattern.value = params.rhythmPattern || '';
    }
    if (params.humanize) {
        if (els.melodyHumanTiming && Number.isFinite(params.humanize.timing)) els.melodyHumanTiming.value = params.humanize.timing;
        if (els.melodyHumanVelocity && Number.isFinite(params.humanize.velocity)) els.melodyHumanVelocity.value = params.humanize.velocity;
        if (els.melodyHumanSwing && Number.isFinite(params.humanize.swing)) els.melodyHumanSwing.value = params.humanize.swing;
        if (els.melodyHumanLegato && Number.isFinite(params.humanize.legato)) els.melodyHumanLegato.value = params.humanize.legato;
        if (els.melodyHumanOrnament && Number.isFinite(params.humanize.ornament)) els.melodyHumanOrnament.value = params.humanize.ornament;
        if (els.melodyHumanPress && Number.isFinite(params.humanize.press)) els.melodyHumanPress.value = params.humanize.press;
        if (els.melodyHumanTimbre && Number.isFinite(params.humanize.timbre)) els.melodyHumanTimbre.value = params.humanize.timbre;
        if (els.melodyHumanPitch && Number.isFinite(params.humanize.pitch)) els.melodyHumanPitch.value = params.humanize.pitch;
        if (els.melodyHumanYMotion && Number.isFinite(params.humanize.yMotion)) els.melodyHumanYMotion.value = params.humanize.yMotion;
        if (els.melodyHumanYMotionToggle) els.melodyHumanYMotionToggle.checked = !!params.humanize.yMotionEnabled;
    }
    if (els.melodyMpePerNote && params.mpePerNote != null) {
        els.melodyMpePerNote.checked = !!params.mpePerNote;
    }
    if (params.continue) {
        if (els.melodyContinueSteps && Number.isFinite(params.continue.steps)) els.melodyContinueSteps.value = params.continue.steps;
        if (els.melodyContinueTemp && Number.isFinite(params.continue.temperature)) els.melodyContinueTemp.value = params.continue.temperature;
        if (els.melodyContinueRhythm && Number.isFinite(params.continue.rhythmSimilarity)) {
            els.melodyContinueRhythm.value = Math.round(params.continue.rhythmSimilarity * 100);
        }
        //if (els.melodyContinueAuto && params.continue.auto != null) {
        //    els.melodyContinueAuto.checked = !!params.continue.auto;
       // }
        if (els.melodyContinueScale && params.continue.forceScale != null) {
            els.melodyContinueScale.checked = !!params.continue.forceScale;
        }
    }
    updateMelodyRuleSummary();
}

function updateMelodyPreview() {
    if (!els.melodyPreview) return;
    const preview = state.melody.notes.map(n => (n == null ? '.' : midiToNoteName(n))).join(' ');
    els.melodyPreview.textContent = preview || ' ';
    renderMelodyEditor();
    resizeMelodyRollCanvas();
}

function formatTimeStamp(ts) {
    if (!ts) return '--';
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}

function setMelodyStatusLog(reason = '') {
    state.melody.lastUpdate = {
        time: Date.now(),
        seed: state.melody.seed,
        length: state.melody.length,
        reason
    };
    const msg = `Last update: ${formatTimeStamp(state.melody.lastUpdate.time)} | seed ${state.melody.seed} | len ${state.melody.length}`;
    if (els.melodyStatusLog) els.melodyStatusLog.textContent = msg;
    if (els.melodyStatusLogInline) els.melodyStatusLogInline.textContent = msg;
}

function updateMelodyStatusUI() {
    if (els.melodyStateBadge && els.melodyStateDesc) {
        const baseLen = state.melody.continue?.baseLength ?? null;
        const isContinued = baseLen != null && state.melody.notes.length > baseLen;
        const isImported = !!state.melody.imported;
        let label = 'Generated';
        let desc = 'Sequence created from params.';
        let cls = 'badge-generated';
        if (isContinued) {
            label = 'Continued';
            desc = 'Extended from the base melody.';
            cls = 'badge-continued';
        } else if (isImported) {
            label = 'Imported';
            desc = 'Sequence comes from audio or file.';
            cls = 'badge-imported';
        }
        els.melodyStateBadge.textContent = label;
        els.melodyStateBadge.classList.remove('badge-generated', 'badge-imported', 'badge-continued');
        els.melodyStateBadge.classList.add(cls);
        els.melodyStateDesc.textContent = desc;
    }
    const genGroup = document.querySelector('#tabMelody .melody-gen-group');
    if (genGroup) {
        genGroup.classList.toggle('melody-imported-muted', !!state.melody.imported);
    }
    const isImported = !!state.melody.imported;
    const genControls = [
        els.melodyStyle,
        els.melodyLength,
        els.melodyDensity,
        els.melodyRange,
        els.melodySeed,
        els.melodyCadence,
        els.melodyRuleSelect,
        els.melodyRhythmMode,
        els.melodyRhythmPattern
    ];
    genControls.forEach(el => {
        if (!el) return;
        el.disabled = isImported;
    });
    if (els.melodyKeepImported) {
        els.melodyKeepImported.disabled = !state.melody.imported;
    }
    if (els.melodyContinueReset) {
        els.melodyContinueReset.disabled = !(state.melody.continue?.baseNotes?.length);
    }
}

function updateMelodyHumanizeEffective() {
    const master = els.melodyHumanizeAmount ? (parseInt(els.melodyHumanizeAmount.value, 10) || 0) / 100 : 0;
    const timing = parseInt(els.melodyHumanTiming?.value, 10) || 0;
    const velocity = parseInt(els.melodyHumanVelocity?.value, 10) || 0;
    const swing = parseInt(els.melodyHumanSwing?.value, 10) || 0;
    const legato = parseInt(els.melodyHumanLegato?.value, 10) || 0;
    const ornament = parseInt(els.melodyHumanOrnament?.value, 10) || 0;
    const press = parseInt(els.melodyHumanPress?.value, 10) || 0;
    const timbre = parseInt(els.melodyHumanTimbre?.value, 10) || 0;
    const pitch = parseInt(els.melodyHumanPitch?.value, 10) || 0;
    const yMotion = parseInt(els.melodyHumanYMotion?.value, 10) || 0;
    const yOn = !!els.melodyHumanYMotionToggle?.checked;
    const toPct = (value, max = 100) => Math.round((Math.max(0, Math.min(max, value)) / max) * 100);
    if (els.melodyHumanTimingEff) els.melodyHumanTimingEff.textContent = `Effective: ${toPct(timing * master, 30)}%`;
    if (els.melodyHumanVelocityEff) els.melodyHumanVelocityEff.textContent = `Effective: ${toPct(velocity * master, 60)}%`;
    if (els.melodyHumanSwingEff) els.melodyHumanSwingEff.textContent = `Effective: ${toPct(swing * master, 60)}%`;
    if (els.melodyHumanLegatoEff) els.melodyHumanLegatoEff.textContent = `Effective: ${toPct(70 + (legato - 70) * master, 100)}%`;
    if (els.melodyHumanOrnamentEff) els.melodyHumanOrnamentEff.textContent = `Effective: ${toPct(ornament * master, 40)}%`;
    if (els.melodyHumanPressEff) els.melodyHumanPressEff.textContent = `Effective: ${toPct(press * master, 40)}%`;
    if (els.melodyHumanTimbreEff) els.melodyHumanTimbreEff.textContent = `Effective: ${toPct(timbre * master, 80)}%`;
    if (els.melodyHumanPitchEff) els.melodyHumanPitchEff.textContent = `Effective: ${toPct(pitch * master, 40)}%`;
    if (els.melodyHumanYMotionEff) els.melodyHumanYMotionEff.textContent = `Effective: ${toPct(yMotion * master, 100)}%`;
    if (els.melodyHumanYMotionToggleEff) els.melodyHumanYMotionToggleEff.textContent = `Effective: ${yOn && master > 0 ? 'On' : 'Off'}`;
}

function updateMelodyRuleSummary() {
    if (!els.melodyRuleSummary) return;
    const rule = els.melodyRuleSelect?.value || 'all';
    const rhythmMode = els.melodyRhythmMode?.value || 'rule';
    const rhythmPattern = els.melodyRhythmPattern?.value || '';
    const ruleLabel = rule === 'all' ? 'all rules' : rule;
    const rhythmLabel = rhythmMode === 'pattern' && rhythmPattern ? `pattern: ${rhythmPattern}` : rhythmMode;
    els.melodyRuleSummary.textContent = `Rules bias: ${ruleLabel} | Rhythm: ${rhythmLabel}`;
}

function updateMelodyEditStatus() {
    if (!els.melodyEditStatus) return;
    const edit = Number.isFinite(state.melody.edit?.step) ? state.melody.edit.step : '--';
    const live = Number.isFinite(state.melody.currentStep) ? state.melody.currentStep : '--';
    els.melodyEditStatus.textContent = `Editing step: ${edit} | Live step: ${live}`;
}

function stopMelodyGenerator() {
    state.melody.running = false;
    if (state.melody.timer) clearInterval(state.melody.timer);
    if (state.melody.offTimer) clearTimeout(state.melody.offTimer);
    state.melody.timer = null;
    state.melody.offTimer = null;
    clearMelodyPendingTimers();
    if (state.melody.lastNotes?.length) releaseMelodyVoices();
    state.melody.lastNotes = [];
    state.melody.lastNote = null;
    state.melody.lastVoices = [];
    state.melody.voiceKeys?.clear?.();
    state.melody.virtualPhase = null;
    state.melody.lastVirtualY = null;
    state.melody.activeLabel = { note: null, until: 0 };
    setSyntheticTouch('melody', [], 'MELODY');
    drawMelodyPianoRoll();
}

function melodyStep() {
    if (!state.melody.enabled || !state.melody.running) return;
    if (!state.melody.notes.length) {
        state.melody.notes = buildMelodySequence();
        updateMelodyPreview();
        if (!state.melody.notes.length) return;
    }
    const stepIdx = state.melody.stepIndex % state.melody.notes.length;
    const note = state.melody.notes[stepIdx];
    state.melody.currentStep = stepIdx;
    state.melody.stepIndex += 1;
    if (state.melody.offTimer) clearTimeout(state.melody.offTimer);
    clearMelodyPendingTimers();
    state.melody.activeLabel = { note: null, until: 0 };
    if (note != null) {
        const stepMs = getMelodyStepMs();
        const human = state.melody.humanize || {};
        const timingMs = Math.max(0, human.timing || 0);
        const velJitter = Math.max(0, human.velocity || 0) * 1.5;
        const swingPct = Math.max(0, Math.min(60, human.swing || 0));
        const legatoPct = Math.max(0, Math.min(100, human.legato ?? 70));
        const ornamentPct = Math.max(0, Math.min(40, human.ornament || 0));
        const pressRange = Math.max(0, Math.min(40, human.press || 0));
        const timbreRange = Math.max(0, Math.min(80, human.timbre || 0)) * 1.5;
        const pitchRange = Math.max(0, Math.min(40, human.pitch || 0));
        const jitter = timingMs ? (Math.random() * 2 - 1) * timingMs : 0;
        const swingMs = (stepIdx % 2 === 1) ? (stepMs * 0.5 * (swingPct / 100)) : 0;
        const delayMs = Math.max(0, Math.min(stepMs * 0.6, swingMs + jitter));
        const gate = 0.5 + (legatoPct / 100) * 0.7;
        const gateMs = Math.max(30, Math.min(stepMs * 1.2, stepMs * gate));
        const pressBase = 90;
        const timbreBase = 64;
        const imported = state.melody.imported && state.melody.importedFeatures;
        const curve = 1.7;
        const virtualY = getMelodyVirtualY();
        const pressJitter = pressRange ? randomCurve(pressRange * 0.15, curve) : 0;
        const timbreJitter = timbreRange ? randomCurve(timbreRange * 0.12, curve) : 0;
        let press = pressBase + ((virtualY - 0.5) * (pressRange * 2)) + pressJitter;
        let slide = timbreBase + ((virtualY - 0.5) * (timbreRange * 2)) + timbreJitter;
        let baseVelocity = null;
        let useVelJitter = velJitter;
        if (imported) {
            const f = state.melody.importedFeatures;
            const p = f?.press?.[stepIdx];
            const s = f?.slide?.[stepIdx];
            const v = f?.velocity?.[stepIdx];
            if (Number.isFinite(p)) {
                press = p;
            }
            if (Number.isFinite(s)) {
                slide = s;
            }
            if (Number.isFinite(v)) {
                baseVelocity = v;
                useVelJitter = 0;
            }
        }
        let pbValue = 8192;
        if (pitchRange > 0) {
            const pbSemis = parseInt(els.pbRange?.value, 10) || 48;
            const maxSemis = (pitchRange / 40) * 0.5;
            const offset = randomCurve(1, curve) * (8192 * (maxSemis / pbSemis));
            pbValue = 8192 + offset;
        }
        const visualY = imported ? virtualY : (slide / 127);
        const virtualYNorm = Math.max(0, Math.min(1, visualY));
        const notesToPlay = updateMelodyLiveNotes(note, {
            minRelease: MELODY_MIN_RELEASE,
            holdSame: true,
            delayMs,
            velocityJitter: useVelJitter,
            baseVelocity,
            press,
            slide,
            pbValue,
            jitterCurve: curve,
            virtualY: virtualYNorm
        });
        const labelNote = Math.round(note);
        const labelStart = setTimeout(() => {
            const until = Date.now() + gateMs;
            state.melody.activeLabel = { note: labelNote, until };
            drawMelodyPianoRoll();
            const labelStop = setTimeout(() => {
                if (state.melody.activeLabel?.note === labelNote) {
                    state.melody.activeLabel = { note: null, until: 0 };
                    drawMelodyPianoRoll();
                }
            }, gateMs);
            state.melody.pendingTimers.push(labelStop);
        }, delayMs);
        state.melody.pendingTimers.push(labelStart);
        if (ornamentPct > 0 && Math.random() < (ornamentPct / 100)) {
            const dir = Math.random() < 0.5 ? -1 : 1;
            const graceNote = getScaleNeighbor(note, dir);
            if (graceNote !== note) {
                const graceLead = 30;
                const graceDelay = Math.max(0, delayMs - graceLead);
                const graceOn = setTimeout(() => {
                    const graceVel = Math.max(20, 90 - velJitter);
                    let graceChan = state.melody.chan;
                    if (state.melody.mpePerNote) {
                        graceChan = state.mpeChannels.shift() || state.melody.chan;
                        applyMelodyMpe(graceChan, press, slide, pbValue);
                    }
                    void noteOnInternal(graceNote, graceVel, graceChan, null, { isMelody: true });
                    sendMidiHardware([0x90 + graceChan - 1, graceNote, Math.max(1, Math.min(127, Math.round(graceVel)))], { isMelody: true });
                    state.melody.voiceKeys?.add?.(`${graceChan}:${graceNote}`);
                    const graceOff = setTimeout(() => {
                        stopVoiceInternal(`${graceChan}:${graceNote}`);
                        sendMidiHardware([0x80 + graceChan - 1, graceNote, 0], { isMelody: true });
                        state.melody.voiceKeys?.delete?.(`${graceChan}:${graceNote}`);
                        if (state.melody.mpePerNote && graceChan > 1 && graceChan <= 16) {
                            state.mpeChannels.push(graceChan);
                            state.mpeChannels.sort((a, b) => a - b);
                        }
                    }, 80);
                    state.melody.pendingTimers.push(graceOff);
                }, graceDelay);
                state.melody.pendingTimers.push(graceOn);
            }
        }
        state.melody.offTimer = setTimeout(() => {
            if (state.melody.lastNotes === notesToPlay) {
                releaseMelodyVoices(MELODY_MIN_RELEASE);
                state.melody.lastNotes = [];
                if (state.melody.lastNote === note) state.melody.lastNote = null;
                setSyntheticTouch('melody', [], 'MELODY');
            }
        }, Math.max(30, delayMs + gateMs));
    } else {
        if (state.melody.lastNotes?.length) {
            releaseMelodyVoices(MELODY_MIN_RELEASE);
            state.melody.lastNotes = [];
            state.melody.lastNote = null;
        }
        state.melody.lastVoices = [];
        state.melody.voiceKeys?.clear?.();
        setSyntheticTouch('melody', [], 'MELODY');
    }
    updateMelodyEditStatus();
    drawMelodyPianoRoll();
}

function startMelodyGenerator() {
    if (state.melody.running) return;
    state.melody.running = true;
    state.melody.stepIndex = 0;
    const stepMs = getMelodyStepMs();
    state.melody.timer = setInterval(melodyStep, stepMs);
    melodyStep();
}

function restartMelodyGenerator() {
    if (!state.melody.running) return;
    stopMelodyGenerator();
    startMelodyGenerator();
}

function updateMelodyToggleUI() {
    if (!els.melodyToggle) return;
    const isOn = !!state.melody.enabled;
    els.melodyToggle.classList.toggle('toggle-on', isOn);
    els.melodyToggle.classList.toggle('toggle-off', !isOn);
    els.melodyToggle.textContent = isOn ? 'MELODY ON' : 'MELODY OFF';
    if (els.melodyActiveIndicator) {
        els.melodyActiveIndicator.textContent = isOn ? 'Active' : 'Inactive';
    }
    if (els.melodyPerfToggle) {
        els.melodyPerfToggle.classList.toggle('toggle-on', isOn);
        els.melodyPerfToggle.classList.toggle('toggle-off', !isOn);
        const label = isOn ? 'MELODY ACTIVE' : 'MELODY INACTIVE';
        els.melodyPerfToggle.setAttribute('aria-pressed', isOn ? 'true' : 'false');
        els.melodyPerfToggle.setAttribute('aria-label', label);
        els.melodyPerfToggle.title = label;
    }
}

function updateLayerToggleUI() {
    if (!els.melodyLayerToggle) return;
    const isOn = !!state.melody.layer.enabled;
    els.melodyLayerToggle.classList.toggle('toggle-on', isOn);
    els.melodyLayerToggle.classList.toggle('toggle-off', !isOn);
    els.melodyLayerToggle.textContent = isOn ? 'LAYER ON' : 'LAYER OFF';
    if (els.melodyLayerPerf) {
        els.melodyLayerPerf.classList.toggle('toggle-on', isOn);
        els.melodyLayerPerf.classList.toggle('toggle-off', !isOn);
        els.melodyLayerPerf.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    }
}

function syncMelodyPerfControls() {
    if (els.melodyRatePerf && els.melodyRate) {
        els.melodyRatePerf.value = els.melodyRate.value;
    }
    if (els.melodySeedPerfVal && els.melodySeed) {
        els.melodySeedPerfVal.textContent = els.melodySeed.value;
    }
    if (els.melodyCadencePerf && els.melodyCadence) {
        els.melodyCadencePerf.value = els.melodyCadence.value;
    }
    if (els.melodyLayerPerf) {
        const isOn = !!state.melody.layer.enabled;
        els.melodyLayerPerf.classList.toggle('toggle-on', isOn);
        els.melodyLayerPerf.classList.toggle('toggle-off', !isOn);
        els.melodyLayerPerf.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    }
    if (els.melodyVolumePerf) {
        const vol = Math.max(0, Math.min(1, Number.isFinite(state.melody.volume) ? state.melody.volume : 1));
        els.melodyVolumePerf.value = Math.round(vol * 100);
        updateRangeProgress(els.melodyVolumePerf);
    }
}

function setMelodyEditStep(stepIdx) {
    const max = Math.max(1, state.melody.notes.length || 1);
    const clamped = Math.max(0, Math.min(max - 1, stepIdx));
    state.melody.edit.step = clamped;
    renderMelodyEditor();
    drawMelodyPianoRoll();
    updateMelodyEditStatus();
}

// Cache delle option per non ricrearle ogni volta
let _allMidiNoteOptionsHtml = null;

function getAllMidiNoteOptionsHtml() {
    return getSeqOptionsHtmlAllNotes();
}

function renderMelodyEditor() {
  if (!els.melodySeqEditor) return;
  const notes = state.melody.notes || [];
  els.melodySeqEditor.innerHTML = '';

  notes.forEach((n, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.step = String(idx);
    btn.textContent = n == null ? '.' : midiToNoteName(n);
    btn.className = 'melody-seq-cell';
    if (n != null) btn.classList.add('has-note');
    if (idx === state.melody.edit.step) btn.classList.add('is-active');
    if (state.melody.roll?.selection?.has(idx)) btn.classList.add('is-selected');
    els.melodySeqEditor.appendChild(btn);
  });
}

// Cache per le option "tutte le note (tutte le ottave)"
let _seqOptionsHtmlAllNotes = null;

function getSeqOptionsHtmlAllNotes() {
    if (_seqOptionsHtmlAllNotes) return _seqOptionsHtmlAllNotes;

    const out = ['<option value="">(vuoto)</option>'];
    for (let n = 0; n <= 127; n++) {
        out.push(`<option value="${n}">${midiToNoteName(n)} (${n})</option>`);
    }
    _seqOptionsHtmlAllNotes = out.join('');
    return _seqOptionsHtmlAllNotes;
}

// Sequence editor utilities
function seqEnsureNotes() {
    if (!state.melody.notes || !state.melody.notes.length) {
        state.melody.notes = buildMelodySequence();
        updateMelodyPreview();
    }
}

function updateMelodyLatchUI() {
    if (!els.melodyLatchPerf) return;
    const isOn = !!state.melody.latchEnabled;
    els.melodyLatchPerf.classList.toggle('toggle-on', isOn);
    els.melodyLatchPerf.classList.toggle('toggle-off', !isOn);
    const label = isOn ? 'MELODY LATCH ON' : 'MELODY LATCH OFF';
    els.melodyLatchPerf.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    els.melodyLatchPerf.setAttribute('aria-label', label);
    els.melodyLatchPerf.title = label;
}


function setMelodyLatch(enabled) {
    state.melody.latchEnabled = !!enabled;
    if (state.melody.latchEnabled) {
        if (state.melody.latchPrevChan == null) {
            state.melody.latchPrevChan = state.melody.chan;
        }
        if (state.melody.latchPrevMpePerNote == null) {
            state.melody.latchPrevMpePerNote = !!state.melody.mpePerNote;
        }
        const def = getScaleDefinition();
        const notes = buildScaleNotesFromDefinition(def);
        state.melody.latchScale = {
            def: { ...def, degrees: def.degrees.slice(0) },
            notes,
            root: def.root,
            scale: `${def.mode}:${def.name}`,
            octave: state.currentOctave
        };
        state.melody.chan = 16;
        state.melody.mpePerNote = false;
        if (state.mpeChannels?.length) {
            state.mpeChannels = state.mpeChannels.filter(ch => ch !== 16);
        }
    } else {
        state.melody.latchScale = null;
        if (state.melody.latchPrevChan != null) {
            state.melody.chan = state.melody.latchPrevChan;
            state.melody.latchPrevChan = null;
        }
        if (state.melody.latchPrevMpePerNote != null) {
            state.melody.mpePerNote = state.melody.latchPrevMpePerNote;
            state.melody.latchPrevMpePerNote = null;
        }
        if (state.mpeChannels && !state.mpeChannels.includes(16)) {
            state.mpeChannels.push(16);
            state.mpeChannels.sort((a, b) => a - b);
        }
    }
    updateMelodyLatchUI();
    if (state.melody.running) restartMelodyGenerator();
}

function getMelodyDefaultNote() {
    const def = getMelodyScaleDefinition();
    const base = 60 + def.root + (getMelodyBaseOctave() * 12);
    return Math.max(0, Math.min(127, base));
}

function getMelodyNotePanelElements() {
    const panel = document.getElementById('melodyNoteEditorBox');
    if (!panel) return null;
    return {
        panel,
        label: panel.querySelector('.melody-note-label'),
        select: panel.querySelector('select')
    };
}

function hideMelodyNotePanel() {
    const elsPanel = getMelodyNotePanelElements();
    if (!elsPanel) return;
    elsPanel.panel.style.display = 'none';
}

function showMelodyNotePanel(stepIdx, clientX, clientY) {
    const elsPanel = getMelodyNotePanelElements();
    if (!elsPanel) return;
    if (Number.isFinite(stepIdx)) {
        setMelodyEditStep(stepIdx);
    }
    seqEnsureNotes();
    const { panel, label, select } = elsPanel;
    const note = state.melody.notes[stepIdx];
    panel.dataset.step = String(stepIdx);
    if (select && !select.dataset.optionsReady) {
        select.innerHTML = getSeqOptionsHtmlAllNotes();
        select.dataset.optionsReady = '1';
    }
    if (select) select.value = note == null ? '' : String(note);
    if (label) {
        label.textContent = note == null
            ? `Step ${stepIdx + 1}: (vuoto)`
            : `Step ${stepIdx + 1}: ${midiToNoteName(note)} (${note})`;
    }
    panel.style.display = 'block';
    const pad = 8;
    const rect = panel.getBoundingClientRect();
    let left = clientX + 12;
    let top = clientY - rect.height - 12;
    if (top < pad) top = clientY + 12;
    const maxLeft = window.innerWidth - rect.width - pad;
    const maxTop = window.innerHeight - rect.height - pad;
    panel.style.left = `${Math.max(pad, Math.min(maxLeft, left))}px`;
    panel.style.top = `${Math.max(pad, Math.min(maxTop, top))}px`;

    if (select) {
        select.onchange = () => {
            const idx = parseInt(panel.dataset.step, 10);
            if (!Number.isFinite(idx)) return;
            const v = select.value;
            state.melody.notes[idx] = v === '' ? null : parseInt(v, 10);
            state.melody.imported = true;
            updateMelodyPreview();
            if (label) {
                const noteNow = state.melody.notes[idx];
                label.textContent = noteNow == null
                    ? `Step ${idx + 1}: (vuoto)`
                    : `Step ${idx + 1}: ${midiToNoteName(noteNow)} (${noteNow})`;
            }
        };
        select.onblur = () => hideMelodyNotePanel();
    }
}

function getMelodyRollStepWidth() {
    return Math.max(10, Math.min(80, state.melody.roll?.stepPx || 20));
}

function getMelodyRollLength() {
    return Math.max(1, state.melody.notes.length || state.melody.length || 1);
}

function getMelodyRollRange() {
    const def = getScaleDefinition();
    const baseRange = Math.max(5, Math.min(36, parseInt(els.melodyRange?.value, 10) || 14));
    const base = 60 + def.root + (state.currentOctave * 12);
    const zoom = Math.max(0.6, Math.min(2.5, state.melody.roll?.zoom || 1));
    const visibleRange = Math.max(5, Math.round(baseRange / zoom));
    const half = Math.floor(visibleRange / 2);
    let min = base - half;
    let max = base + (visibleRange - half);
    const offset = Math.round(state.melody.roll?.offset || 0);
    min += offset;
    max += offset;
    if (min < 0) {
        max += -min;
        min = 0;
    }
    if (max > 127) {
        min -= (max - 127);
        max = 127;
    }
    min = Math.max(0, Math.min(126, min));
    max = Math.max(min + 1, Math.min(127, max));
    return { min, max, visibleRange, baseRange };
}

function updateMelodyRollLabels(height, min, max) {
    if (!els.melodyRollLabels || !els.melodyRollCanvas) return;
    const labels = els.melodyRollLabels;
    const span = Math.max(1, max - min);
    labels.style.height = `${height}px`;
    labels.textContent = '';
    const active = state.melody.activeLabel;
    const now = Date.now();
    for (let n = min; n <= max; n++) {
        const y = ((max - n) / span) * height;
        const label = document.createElement('div');
        label.className = 'melody-roll-label';
        if (active && active.note === n && active.until > now) {
            label.classList.add('is-active');
        }
        label.textContent = midiToNoteName(n);
        label.style.top = `${y}px`;
        labels.appendChild(label);
    }
}

function drawMelodyPianoRoll() {
    if (!els.melodyRollCanvas) return;
    const canvas = els.melodyRollCanvas;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width <= 0 || height <= 0) return;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0f1217';
    ctx.fillRect(0, 0, width, height);

    const notes = state.melody.notes || [];
    const { min, max } = getMelodyRollRange();
    if (!notes.length) {
        ctx.fillStyle = '#667';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('No sequence', width * 0.5, height * 0.5);
        updateMelodyRollLabels(height, min, max);
        return;
    }

    const span = Math.max(1, max - min);
    const stepW = width / getMelodyRollLength();
    const scalePcs = new Set(getScaleDefinition().degrees.map(d => (d + 12) % 12));

    for (let n = min; n <= max; n++) {
        const y = ((max - n) / span) * height;
        const isScale = scalePcs.has(n % 12);
        ctx.strokeStyle = isScale ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)';
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    const rowH = height / span;
    const noteH = Math.max(12, Math.min(32, rowH * 0.9));
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        if (note == null) continue;
        const x = i * stepW;
        const y = ((max - note) / span) * height;
        ctx.fillStyle = getNoteColor(note);
        const noteW = Math.max(6, Math.min(stepW * 0.6, 26));
        const rx = x + ((stepW - noteW) * 0.5);
        const ry = y - (noteH * 0.5);
        const radius = Math.min(6, noteH * 0.4, noteW * 0.2);

        // EVIDENZIA SELEZIONE MULTIPLA
        if (state.melody.roll && state.melody.roll.selection && state.melody.roll.selection.has(i)) {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(rx - 2, ry - 2, noteW + 4, noteH + 4);
        }

        ctx.beginPath();
        ctx.moveTo(rx + radius, ry);
        ctx.arcTo(rx + noteW, ry, rx + noteW, ry + noteH, radius);
        ctx.arcTo(rx + noteW, ry + noteH, rx, ry + noteH, radius);
        ctx.arcTo(rx, ry + noteH, rx, ry, radius);
        ctx.arcTo(rx, ry, rx + noteW, ry, radius);
        ctx.closePath();
        ctx.fill();
    }

    if (Number.isFinite(state.melody.currentStep)) {
        const x = (state.melody.currentStep + 0.5) * stepW;
        ctx.strokeStyle = 'rgba(0,255,160,0.6)';
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    if (Number.isFinite(state.melody.edit.step)) {
        const x = (state.melody.edit.step + 0.5) * stepW;
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    updateMelodyRollLabels(height, min, max);
}

function resizeMelodyRollCanvas() {
    if (!els.melodyRollCanvas) return;
    const canvas = els.melodyRollCanvas;
    const len = getMelodyRollLength();
    const stepW = getMelodyRollStepWidth();
    const cssWidth = Math.max(1, len * stepW);
    canvas.style.width = `${cssWidth}px`;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.floor(rect.width * dpr));
    const height = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
    }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawMelodyPianoRoll();
}

function initEnhancedPianoRoll() {
    const roll = els.melodyRollCanvas;
    const wrap = roll ? roll.parentElement : null;
    // create selection rect element
    let selectionRect = wrap ? wrap.querySelector('.melody-roll-selection-rect') : null;
    if (wrap && !selectionRect) {
        selectionRect = document.createElement('div');
        selectionRect.className = 'melody-roll-selection-rect';
        selectionRect.style.display = 'none';
        wrap.appendChild(selectionRect);
    }

    let dragData = {
        active: false,
        mode: 'edit', // 'edit', 'select', 'move'
        startNoteRaw: 0,
        initialNotes: [],
        originalNotes: [],
        selectionAtStart: [],
        startStep: 0,
        moved: false,
        startClientX: 0,
        startClientY: 0,
        startWasOnNote: false,
        suppressClick: false
    };
    let lastTap = { time: 0, step: -1, onNote: false };
    const DOUBLE_TAP_MS = 380;

    const getCoords = (e) => {
        const rect = roll.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const len = getMelodyRollLength();
        const { min, max } = getMelodyRollRange();
        // Calcolo preciso proporzionale all'area visibile
        const stepIdx = Math.max(0, Math.min(len - 1, Math.floor((x / rect.width) * len)));
        const noteFloat = max - ((y / rect.height) * (max - min));
        return { stepIdx, noteFloat, x, y };
    };

    roll.addEventListener('pointerdown', e => {
        const { stepIdx, noteFloat } = getCoords(e);
        seqEnsureNotes();
        const existingNote = state.melody.notes[stepIdx];
        const isOnNote = existingNote != null && Math.abs(existingNote - noteFloat) < 0.8;
        dragData.startWasOnNote = isOnNote;
        dragData.moved = false;
        dragData.startClientX = e.clientX;
        dragData.startClientY = e.clientY;
        dragData.startStep = stepIdx;
        dragData.startNoteRaw = noteFloat;
        dragData.originalNotes = state.melody.notes.slice();

        if (e.shiftKey) {
            // Modalità SELEZIONE (Marquee)
            dragData.mode = 'select';
            if (!e.shiftKey) state.melody.roll.selection.clear();
            // show selection rect and store start
            if (selectionRect && wrap) {
                const r = wrap.getBoundingClientRect();
                dragData.selStartX = e.clientX - r.left;
                dragData.selStartY = e.clientY - r.top;
                selectionRect.style.left = `${dragData.selStartX}px`;
                selectionRect.style.top = `${dragData.selStartY}px`;
                selectionRect.style.width = `0px`;
                selectionRect.style.height = `0px`;
                selectionRect.style.display = 'block';
            }
        } else if (isOnNote) {
            // Modalità SPOSTAMENTO (Move)
            dragData.mode = 'move';
            if (!state.melody.roll.selection.has(stepIdx)) {
                state.melody.roll.selection.clear();
                state.melody.roll.selection.add(stepIdx);
            }
            dragData.selectionAtStart = Array.from(state.melody.roll.selection);
            dragData.initialNotes = dragData.selectionAtStart
                .filter(idx => state.melody.notes[idx] != null)
                .map(idx => ({ idx, val: state.melody.notes[idx] }));
        } else {
            dragData.mode = 'edit';
        }

        dragData.active = true;
        roll.setPointerCapture(e.pointerId);
    });

    // Doppio clic per cancellare la nota
    roll.addEventListener('dblclick', e => {
        const { stepIdx, noteFloat } = getCoords(e);
        const existingNote = state.melody.notes[stepIdx];
        const isOnNote = existingNote != null && Math.abs(existingNote - noteFloat) < 0.8;
        if (isOnNote) {
            applyMelodyEdit(stepIdx, null, { live: true, finalize: true });
            updateMelodyPreview();
            dragData.suppressClick = true;
            setTimeout(() => { dragData.suppressClick = false; }, 250);
        }
    });

    // Doppio tocco per cancellare la nota (gestione touch)
    let lastTapTouch = 0;
    roll.addEventListener('touchend', e => {
        const now = Date.now();
        if (now - lastTapTouch < 400 && e.changedTouches.length === 1) {
            const touch = e.changedTouches[0];
            const rect = roll.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            const len = getMelodyRollLength();
            const { min, max } = getMelodyRollRange();
            const stepIdx = Math.max(0, Math.min(len - 1, Math.floor((x / rect.width) * len)));
            const noteFloat = max - ((y / rect.height) * (max - min));
            const existingNote = state.melody.notes[stepIdx];
            const isOnNote = existingNote != null && Math.abs(existingNote - noteFloat) < 0.8;
            if (isOnNote) {
                applyMelodyEdit(stepIdx, null, { live: true, finalize: true });
                updateMelodyPreview();
                dragData.suppressClick = true;
                setTimeout(() => { dragData.suppressClick = false; }, 250);
            }
        }
        lastTapTouch = now;
    });

    roll.addEventListener('pointermove', e => {
        if (!dragData.active) return;
        const { stepIdx, noteFloat } = getCoords(e);
        if (!dragData.moved) {
            const dx = Math.abs(e.clientX - dragData.startClientX);
            const dy = Math.abs(e.clientY - dragData.startClientY);
            if (dx > 3 || dy > 3 || stepIdx !== dragData.startStep) {
                dragData.moved = true;
            }
        }

        if (dragData.mode === 'move') {
            // SPOSTAMENTO FLUIDO SU X/Y: la nota segue il puntatore, nessun clone
            if (dragData.initialNotes.length === 1) {
                const item = dragData.initialNotes[0];
                if (item.val != null) {
                    // Calcola la nuova posizione step rispetto all'inizio del drag
                    let newStep = item.idx + (stepIdx - dragData.startStep);
                    newStep = Math.max(0, Math.min(state.melody.notes.length - 1, newStep));
                    // Il pitch segue il puntatore (Y), non delta cumulativo
                    const newPitch = getNearestScaleNote(noteFloat);
                    // Se la destinazione è diversa e libera, sposta la nota
                    if (newStep !== item.idx && state.melody.notes[newStep] == null) {
                        state.melody.notes[item.idx] = null;
                        state.melody.notes[newStep] = newPitch;
                        dragData.startStep = newStep;
                        dragData.startNoteRaw = noteFloat;
                        dragData.initialNotes[0].idx = newStep;
                        dragData.initialNotes[0].val = newPitch;
                    } else if (newStep === item.idx) {
                        // Solo pitch
                        state.melody.notes[item.idx] = newPitch;
                        dragData.initialNotes[0].val = newPitch;
                    }
                }
            } else if (dragData.initialNotes.length > 1) {
                const deltaStep = stepIdx - dragData.startStep;
                const deltaPitch = noteFloat - dragData.startNoteRaw;
                const len = state.melody.notes.length;
                const selected = dragData.selectionAtStart.filter(idx => dragData.originalNotes[idx] != null);
                const targets = selected.map(idx => idx + deltaStep);
                const outOfRange = targets.some(t => t < 0 || t >= len);
                if (outOfRange) return;
                const conflict = targets.some((t) => {
                    const occupied = dragData.originalNotes[t] != null;
                    return occupied && !selected.includes(t);
                });
                if (conflict) return;
                const newNotes = dragData.originalNotes.slice();
                selected.forEach(idx => { newNotes[idx] = null; });
                selected.forEach(idx => {
                    const base = dragData.originalNotes[idx];
                    if (base == null) return;
                    const newPitch = getNearestScaleNote(base + deltaPitch);
                    newNotes[idx + deltaStep] = newPitch;
                });
                state.melody.notes = newNotes;
                state.melody.roll.selection = new Set(targets);
            }
        } else if (dragData.mode === 'edit') {
            // FORZA edit su singolo step: svuota la selezione corrente e seleziona solo lo step sotto il puntatore
            if (!state.melody.roll.selection.has(stepIdx) || state.melody.roll.selection.size > 1) {
                state.melody.roll.selection.clear();
                state.melody.roll.selection.add(stepIdx);
            }
            applyMelodyEdit(stepIdx, getNearestScaleNote(noteFloat), { live: true, finalize: false });
        } else if (dragData.mode === 'select') {
            const minS = Math.min(dragData.startStep, stepIdx);
            const maxS = Math.max(dragData.startStep, stepIdx);
            for (let i = minS; i <= maxS; i++) state.melody.roll.selection.add(i);
            // update visual rect
            if (selectionRect && wrap) {
                const r = wrap.getBoundingClientRect();
                const curX = e.clientX - r.left;
                const curY = e.clientY - r.top;
                const x = Math.min(dragData.selStartX, curX);
                const y = Math.min(dragData.selStartY, curY);
                const w = Math.abs(curX - dragData.selStartX);
                const h = Math.abs(curY - dragData.selStartY);
                selectionRect.style.left = `${x}px`;
                selectionRect.style.top = `${y}px`;
                selectionRect.style.width = `${w}px`;
                selectionRect.style.height = `${h}px`;
            }
        }
        drawMelodyPianoRoll();
    });

    roll.addEventListener('pointerup', (e) => {
        if (!dragData.active) return;
        dragData.active = false;
        // hide selection rect
        if (selectionRect) selectionRect.style.display = 'none';
        if (dragData.suppressClick) return;

        if (!dragData.moved) {
            const { stepIdx, noteFloat } = getCoords(e);
            const existingNote = state.melody.notes[stepIdx];
            const isOnNote = existingNote != null && Math.abs(existingNote - noteFloat) < 0.8;
            const now = Date.now();
            const isDoubleTap = lastTap.step === stepIdx && (now - lastTap.time) <= DOUBLE_TAP_MS;
            const wasOnNote = lastTap.onNote;
            lastTap = { time: now, step: stepIdx, onNote: isOnNote };
            if (isDoubleTap && isOnNote && wasOnNote) {
                applyMelodyEdit(stepIdx, null, { live: true, finalize: true });
                updateMelodyPreview();
                dragData.suppressClick = true;
                setTimeout(() => { dragData.suppressClick = false; }, 250);
                return;
            }
            if (dragData.mode === 'edit' && !dragData.startWasOnNote) {
                const note = getNearestScaleNote(noteFloat);
                state.melody.roll.selection.clear();
                state.melody.roll.selection.add(stepIdx);
                applyMelodyEdit(stepIdx, note, { live: false, finalize: true });
                showMelodyNotePanel(stepIdx, e.clientX, e.clientY);
            } else if (dragData.mode === 'move' && dragData.startWasOnNote) {
                showMelodyNotePanel(stepIdx, e.clientX, e.clientY);
            }
        } else {
            // Aggiorna la preview solo alla fine del movimento
            updateMelodyPreview();
        }
        // Rigenerazione AI solo se l'utente ha abilitato auto-continue e la melodia è manuale/importata
        if (state.melody?.continue?.auto && state.melody.imported) {
            regenerateMelodyContinuation();
        }
    });

    // Keyboard handlers for deletion and escape
    const onKeyDown = (ev) => {
        if (ev.key === 'Delete' || ev.key === 'Backspace') {
            if (state.melody.roll.selection && state.melody.roll.selection.size) {
                state.melody.roll.selection.forEach(idx => { state.melody.notes[idx] = null; });
                state.melody.roll.selection.clear();
                updateMelodyPreview();
                drawMelodyPianoRoll();
                ev.preventDefault();
            }
        } else if (ev.key === 'Escape') {
            hideMelodyNotePanel();
            if (state.melody.roll.selection) {
                state.melody.roll.selection.clear();
                drawMelodyPianoRoll();
            }
        }
    };
    // ensure we don't leak multiple handlers: remove existing if any
    try {
        if (state.melody?.roll?._keyHandler) {
            document.removeEventListener('keydown', state.melody.roll._keyHandler);
            state.melody.roll._keyHandler = null;
        }
    } catch (err) {}
    document.addEventListener('keydown', onKeyDown);
    state.melody = state.melody || {};
    state.melody.roll = state.melody.roll || {};
    state.melody.roll._keyHandler = onKeyDown;

    if (!state.melody.roll._notePanelListener) {
        const onPointerDown = (ev) => {
            const panel = document.getElementById('melodyNoteEditorBox');
            if (!panel || panel.style.display === 'none') return;
            if (!panel.contains(ev.target)) hideMelodyNotePanel();
        };
        document.addEventListener('pointerdown', onPointerDown);
        state.melody.roll._notePanelListener = onPointerDown;
    }

    // remove on unload to be safe
    if (!state.melody.roll._unloadListener) {
        const ul = () => {
            try {
                if (state.melody?.roll?._keyHandler) document.removeEventListener('keydown', state.melody.roll._keyHandler);
            } catch (e) {}
        };
        window.addEventListener('unload', ul);
        state.melody.roll._unloadListener = ul;
    }
}

function initSequencerMatrix() {
    const seq = els.melodySeqEditor;
    if (!seq) return;
    let dragData = {
        active: false,
        mode: 'edit',
        startStep: 0,
        startClientX: 0,
        startClientY: 0,
        moved: false,
        startWasOnNote: false,
        initialNotes: [],
        originalNotes: [],
        selectionAtStart: [],
        suppressClick: false
    };
    let lastTap = { time: 0, step: -1 };
    const DOUBLE_TAP_MS = 380;

    const getStepFromTarget = (target) => {
        const btn = target?.closest?.('[data-step]');
        if (!btn) return null;
        const idx = parseInt(btn.dataset.step, 10);
        return Number.isFinite(idx) ? idx : null;
    };

    const getStepFromPoint = (x, y) => {
        const el = document.elementFromPoint(x, y);
        return getStepFromTarget(el);
    };

    const getCellHeight = (idx) => {
        const btn = seq.querySelector(`[data-step="${idx}"]`);
        if (!btn) return 18;
        return Math.max(12, btn.getBoundingClientRect().height || 18);
    };

    seq.addEventListener('pointerdown', (e) => {
        const idx = getStepFromTarget(e.target);
        if (!Number.isFinite(idx)) return;
        seqEnsureNotes();
        const note = state.melody.notes[idx];
        dragData.active = true;
        dragData.moved = false;
        dragData.startStep = idx;
        dragData.startClientX = e.clientX;
        dragData.startClientY = e.clientY;
        dragData.startWasOnNote = note != null;
        dragData.originalNotes = state.melody.notes.slice();

        if (e.shiftKey && Number.isFinite(state.melody.roll.lastSelectedStep)) {
            const start = state.melody.roll.lastSelectedStep;
            const minS = Math.min(start, idx);
            const maxS = Math.max(start, idx);
            if (!e.ctrlKey && !e.metaKey) state.melody.roll.selection.clear();
            for (let i = minS; i <= maxS; i++) state.melody.roll.selection.add(i);
        } else if (!state.melody.roll.selection.has(idx) || (!e.ctrlKey && !e.metaKey)) {
            if (!e.ctrlKey && !e.metaKey) state.melody.roll.selection.clear();
            state.melody.roll.selection.add(idx);
        }
        state.melody.roll.lastSelectedStep = idx;

        dragData.selectionAtStart = Array.from(state.melody.roll.selection);
        dragData.initialNotes = dragData.selectionAtStart
            .filter(step => state.melody.notes[step] != null)
            .map(step => ({ idx: step, val: state.melody.notes[step] }));
        dragData.mode = dragData.startWasOnNote ? 'move' : 'edit';
        seq.setPointerCapture(e.pointerId);
        renderMelodyEditor();
    });

    seq.addEventListener('pointermove', (e) => {
        if (!dragData.active) return;
        const stepIdx = getStepFromPoint(e.clientX, e.clientY);
        if (!Number.isFinite(stepIdx)) return;
        if (!dragData.moved) {
            const dx = Math.abs(e.clientX - dragData.startClientX);
            const dy = Math.abs(e.clientY - dragData.startClientY);
            if (dx > 3 || dy > 3 || stepIdx !== dragData.startStep) {
                dragData.moved = true;
            }
        }
        if (dragData.mode === 'move') {
            if (dragData.initialNotes.length === 1) {
                const item = dragData.initialNotes[0];
                if (item?.val == null) return;
                let newStep = item.idx + (stepIdx - dragData.startStep);
                newStep = Math.max(0, Math.min(state.melody.notes.length - 1, newStep));
                const pitchDelta = Math.round((dragData.startClientY - e.clientY) / getCellHeight(stepIdx));
                const newPitch = getNearestScaleNote(item.val + pitchDelta);
                if (newStep !== item.idx && state.melody.notes[newStep] == null) {
                    state.melody.notes[item.idx] = null;
                    state.melody.notes[newStep] = newPitch;
                    dragData.startStep = stepIdx;
                    dragData.startClientY = e.clientY;
                    dragData.initialNotes[0].idx = newStep;
                    dragData.initialNotes[0].val = newPitch;
                } else if (newStep === item.idx) {
                    state.melody.notes[item.idx] = newPitch;
                    dragData.initialNotes[0].val = newPitch;
                }
            } else if (dragData.initialNotes.length > 1) {
                const deltaStep = stepIdx - dragData.startStep;
                const pitchDelta = Math.round((dragData.startClientY - e.clientY) / getCellHeight(stepIdx));
                const len = state.melody.notes.length;
                const selected = dragData.selectionAtStart.filter(step => dragData.originalNotes[step] != null);
                const targets = selected.map(step => step + deltaStep);
                const outOfRange = targets.some(t => t < 0 || t >= len);
                if (outOfRange) return;
                const conflict = targets.some((t) => {
                    const occupied = dragData.originalNotes[t] != null;
                    return occupied && !selected.includes(t);
                });
                if (conflict) return;
                const newNotes = dragData.originalNotes.slice();
                selected.forEach(step => { newNotes[step] = null; });
                selected.forEach(step => {
                    const base = dragData.originalNotes[step];
                    if (base == null) return;
                    const newPitch = getNearestScaleNote(base + pitchDelta);
                    newNotes[step + deltaStep] = newPitch;
                });
                state.melody.notes = newNotes;
                state.melody.roll.selection = new Set(targets);
            }
        }
        drawMelodyPianoRoll();
        renderMelodyEditor();
    });

    seq.addEventListener('pointerup', (e) => {
        if (!dragData.active) return;
        dragData.active = false;
        if (dragData.suppressClick) return;
        const stepIdx = getStepFromPoint(e.clientX, e.clientY) ?? dragData.startStep;
        if (!dragData.moved) {
            const now = Date.now();
            const isDoubleTap = lastTap.step === stepIdx && (now - lastTap.time) <= DOUBLE_TAP_MS;
            lastTap = { time: now, step: stepIdx };
            if (isDoubleTap) {
                seqEnsureNotes();
                applyMelodyEdit(stepIdx, null, { live: true, finalize: true });
                updateMelodyPreview();
                dragData.suppressClick = true;
                setTimeout(() => { dragData.suppressClick = false; }, 250);
                return;
            }
            if (!dragData.startWasOnNote) {
                const note = getMelodyDefaultNote();
                state.melody.roll.selection.clear();
                state.melody.roll.selection.add(stepIdx);
                applyMelodyEdit(stepIdx, note, { live: false, finalize: true });
                showMelodyNotePanel(stepIdx, e.clientX, e.clientY);
            } else {
                showMelodyNotePanel(stepIdx, e.clientX, e.clientY);
            }
        } else {
            updateMelodyPreview();
        }
    });

    seq.addEventListener('dblclick', (e) => {
        const idx = getStepFromTarget(e.target);
        if (!Number.isFinite(idx)) return;
        seqEnsureNotes();
        applyMelodyEdit(idx, null, { live: true, finalize: true });
        updateMelodyPreview();
        dragData.suppressClick = true;
        setTimeout(() => { dragData.suppressClick = false; }, 250);
    });
}

function updateMelodyLiveNotes(rootNote, options = {}) {
    const notesToPlay = getMelodyNotesForRoot(rootNote);
    const baseNoteMap = new Map();
    notesToPlay.forEach(n => {
        const base = Math.max(0, Math.min(127, Math.round(n)));
        if (!baseNoteMap.has(base)) baseNoteMap.set(base, n);
    });
    const holdSame = !!options.holdSame;
    const sameNotes = holdSame && melodyNotesMatch(state.melody.lastNotes, notesToPlay);
    const delayMs = Math.max(0, options.delayMs || 0);
    const velocityJitter = Math.max(0, options.velocityJitter || 0);
    const baseVelocity = Number.isFinite(options.baseVelocity) ? options.baseVelocity : null;
    const press = options.press;
    const slide = options.slide;
    const pbValue = options.pbValue;
    const virtualY = Number.isFinite(options.virtualY) ? options.virtualY : null;
    const jitterCurve = Number.isFinite(options.jitterCurve) ? options.jitterCurve : 1.6;
    const volumeScale = Math.max(0, Math.min(1, Number.isFinite(state.melody.volume) ? state.melody.volume : 1));
    if (!sameNotes) {
        if (state.melody.lastNotes?.length) {
            releaseMelodyVoices(options.minRelease || 0);
        }
        const fireNotes = () => {
            const voices = allocateMelodyVoices(notesToPlay);
            state.melody.lastVoices = voices;
            if (Number.isFinite(press) || Number.isFinite(slide) || Number.isFinite(pbValue)) {
                if (state.melody.mpePerNote) applyMelodyMpeToVoices(voices, press, slide, pbValue);
                else applyMelodyMpe(state.melody.chan, press, slide, pbValue);
            }
            voices.forEach((v, idx) => {
                const base = idx === 0 ? (baseVelocity ?? 90) : Math.max(20, Math.min(110, state.melody.layer.level));
                const jitter = velocityJitter ? Math.round(randomCurve(velocityJitter, jitterCurve)) : 0;
                const yVel = Number.isFinite(virtualY) ? Math.round((virtualY - 0.5) * 2 * velocityJitter) : 0;
                const scaled = Math.round((base + jitter + yVel) * volumeScale);
                const velocity = Math.max(0, Math.min(127, scaled));
                if (velocity <= 0) return;
                void noteOnInternal(v.note, velocity, v.chan, null, { isMelody: true });
                sendMidiHardware([0x90 + v.chan - 1, v.note, velocity], { isMelody: true });
                state.melody.voiceKeys?.add?.(`${v.chan}:${v.note}`);
            });
            state.melody.lastVirtualY = virtualY ?? state.melody.lastVirtualY;
            setSyntheticTouch('melody', notesToPlay, 'MELODY', voices, state.melody.lastVirtualY);
        };
        if (delayMs > 0) {
            const t = setTimeout(fireNotes, delayMs);
            state.melody.pendingTimers.push(t);
        } else {
            fireNotes();
        }
    }
    state.melody.lastNote = rootNote;
    state.melody.lastNotes = notesToPlay;
    if (sameNotes) {
        if (Number.isFinite(press) || Number.isFinite(slide) || Number.isFinite(pbValue)) {
            if (state.melody.mpePerNote) applyMelodyMpeToVoices(state.melody.lastVoices, press, slide, pbValue);
            else applyMelodyMpe(state.melody.chan, press, slide, pbValue);
        }
        state.melody.lastVirtualY = virtualY ?? state.melody.lastVirtualY;
        setSyntheticTouch('melody', notesToPlay, 'MELODY', state.melody.lastVoices, state.melody.lastVirtualY);
    }
    return notesToPlay;
}

function applyMelodyEdit(stepIdx, rootNote, options = {}) {
    if (state.melody.latchEnabled) return;

        // Se la melodia è vuota, inizializzala invece di uscire
        if (!state.melody.notes.length) {
            state.melody.notes = new Array(state.melody.length || 16).fill(null);
        }

        // IMPORTANTE: Marca come manuale per bloccare rigenerazioni automatiche
        state.melody.imported = true;
        updateMelodyStatusUI();

        const clamped = Math.max(0, Math.min(state.melody.notes.length - 1, stepIdx));
        if (Number.isFinite(rootNote)) {
            state.melody.notes[clamped] = rootNote;
            if (options.live) {
                updateMelodyLiveNotes(rootNote, { minRelease: 0.1 });
            }
        } else {
            // Cancella la nota
            state.melody.notes[clamped] = null;
        }

        if (options.finalize) {
            updateMelodyPreview();
        } else {
            drawMelodyPianoRoll();
        }
}

function updateMelodyFromUI(regenerate = false) {
    if (!els.melodyStyle) return;
    if (state.melody.latchEnabled) {
        syncMelodyPerfControls();
        updateMelodyStatusUI();
        updateMelodyRuleSummary();
        return;
    }
    state.melody.seed = parseInt(els.melodySeed.value, 10) || 1;
    state.melody.length = Math.max(4, Math.min(64, parseInt(els.melodyLength.value, 10) || 16));
    state.melody.range = Math.max(5, Math.min(36, parseInt(els.melodyRange.value, 10) || 14));
    state.melody.density = Math.max(0.2, Math.min(1, (parseInt(els.melodyDensity.value, 10) || 80) / 100));
    const styleConfig = getMelodyStyleConfig();
    state.melody.style = styleConfig.style;
    state.melody.cadence = els.melodyCadence.value || 'tonic';
    state.melody.rate = els.melodyRate.value || '1/16';
    state.melody.layer = {
        enabled: !!els.melodyLayerToggle?.classList.contains('toggle-on'),
        mode: els.melodyLayerMode?.value || 'triad',
        level: parseInt(els.melodyLayerLevel?.value, 10) || 70
    };
    state.melody.mpePerNote = !!els.melodyMpePerNote?.checked;
    const humanizeAmt = els.melodyHumanizeAmount ? (parseInt(els.melodyHumanizeAmount.value, 10) || 0) : 0;
    const master = Math.max(0, Math.min(1, humanizeAmt / 100));
    const base = {
        timing: parseInt(els.melodyHumanTiming?.value, 10) || 8,
        velocity: parseInt(els.melodyHumanVelocity?.value, 10) || 30,
        swing: parseInt(els.melodyHumanSwing?.value, 10) || 60,
        legato: parseInt(els.melodyHumanLegato?.value, 10) || 100,
        ornament: parseInt(els.melodyHumanOrnament?.value, 10) || 10,
        press: parseInt(els.melodyHumanPress?.value, 10) || 40,
        timbre: parseInt(els.melodyHumanTimbre?.value, 10) || 80,
        pitch: parseInt(els.melodyHumanPitch?.value, 10) || 10,
        yMotion: parseInt(els.melodyHumanYMotion?.value, 10) || 100,
        yMotionEnabled: !!els.melodyHumanYMotionToggle?.checked
    };
    state.melody.humanize = {
        timing: Math.round(base.timing * master),
        velocity: Math.round(base.velocity * master),
        swing: Math.round(base.swing * master),
        legato: Math.round(70 + (base.legato - 70) * master),
        ornament: Math.round(base.ornament * master),
        press: Math.round(base.press * master),
        timbre: Math.round(base.timbre * master),
        pitch: Math.round(base.pitch * master),
        yMotion: Math.round(base.yMotion * master),
        yMotionEnabled: base.yMotionEnabled && master > 0
    };
    state.melody.rules = { ...styleConfig.rules };
    state.melody.rhythmMode = styleConfig.rhythmMode || state.melody.rhythmMode || 'rule';
    state.melody.rhythmPattern = styleConfig.rhythmPattern || '';
    state.melody.continue = state.melody.continue || {};
   //state.melody.continue.auto = !!els.melodyContinueAuto?.checked;
    state.melody.continue.forceScale = !!els.melodyContinueScale?.checked;
    state.melody.continue.rhythmSimilarity = Math.max(
        0,
        Math.min(1, (parseInt(els.melodyContinueRhythm?.value, 10) || 70) / 100)
    );
    state.melody.continue.temperature = Math.max(
        0.4,
        Math.min(2, parseFloat(els.melodyContinueTemp?.value) || 1)
    );
    state.melody.continue.steps = Math.max(
        4,
        Math.min(64, parseInt(els.melodyContinueSteps?.value, 10) || 16)
    );
    let didRegen = false;
    if (regenerate) {
        if (!state.melody.imported) {
            state.melody.notes = buildMelodySequence();
            didRegen = true;
        }
        state.melody.stepIndex = 0;
        updateMelodyPreview();
        setMelodyEditStep(state.melody.edit.step || 0);
        if (state.melody.continue) {
            state.melody.continue.baseLength = state.melody.notes.length;
        }
    }
    if (didRegen) {
        setMelodyStatusLog('regen');
    }
    updateMelodyStatusUI();
    updateMelodyRuleSummary();
    syncMelodyPerfControls();
    if (state.melody.continue?.auto && state.melody.continue?.baseLength != null) {
        regenerateMelodyContinuation();
    }
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
    if (state.fadeState.active) return;
    if ((!state.arp.enabled && !state.arp.keepHold) || !state.arp.notes.length) return;
    const stepMs = stepMsOverride || getStepMs();
    const noteObj = state.arp.notes[state.arp.stepIndex % state.arp.notes.length];
    state.arp.stepIndex++;
    arpNoteOn(noteObj, stepMs);
    requestDraw();
}

function restartInternalArp() {
    if (state.arp.timer) clearInterval(state.arp.timer);
    if ((!state.arp.enabled && !state.arp.keepHold) || state.arp.sync !== 'internal') return;
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
    state.arp.keepHold = !state.arp.enabled && state.keepEnabled && state.arpHoldTouches.length > 0;
    state.arp.rate = els.arpRate.value;
    state.arp.gate = parseInt(els.arpGate.value, 10) / 100;
    state.arp.sync = els.arpSync.value;
    state.arp.bpm = parseInt(els.arpBpm.value, 10) || 120;
    state.arp.latch = els.arpLatch.checked;
    updateArpTiming();
    updateArpControlsUI();
    if (!state.arp.enabled && !state.arp.keepHold) {
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
    const pbRange = parseInt(els.pbRange.value, 10) || 48;
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
    const pbRange = parseInt(els.pbRange.value, 10) || 48;
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
    const pbRange = parseInt(els.pbRange.value, 10) || 48;
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

function snapImportedMelodyNotes(notes) {
    const mode = (els.melodyImportSnap?.value || 'off').toLowerCase();
    if (!Array.isArray(notes) || mode === 'off') return notes;
    if (mode === 'semitone') {
        return notes.map(n => (Number.isFinite(n) ? Math.round(n) : n));
    }
    if (mode === 'scale') {
        return notes.map(n => (Number.isFinite(n) ? getNearestScaleNote(n) : n));
    }
    return notes;
}

function snapHoldVoicesToScale(t) {
    if (!t || !t.voices || !t.voices.length) return;
    const exact = t.lastM?.exact ?? t.initialExact ?? 0;
    const rootNote = getNearestScaleNote(exact);
    const chordNotes = computeChordNotes(rootNote);
    const m = t.lastM ? { ...t.lastM, exact: rootNote } : { pbValue: 8192, slide: 0, press: 90, exact: rootNote, x: 0, y: 0 };
    const pbRange = parseInt(els.pbRange.value, 10) || 48;
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

function collectInternalNotesForRestart() {
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
    state.arp.active.forEach(v => addNote(v.chan, v.note, 80));
    return Array.from(map.values());
}

function restartInternalFromActiveNotes() {
    if (!state.audio.enabled) return;
    const notes = collectInternalNotesForRestart();
    if (!notes.length) return;
    stopAllVoicesInternal();
    notes.forEach(entry => {
        const press = Math.max(1, Math.min(127, Math.round(entry.vel)));
        state.audio.channelPress.set(entry.chan, press);
        noteOnInternal(entry.note, press, entry.chan);
    });
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
    if (state.arp.timer) {
        clearInterval(state.arp.timer);
        state.arp.timer = null;
        state.arp.running = false;
    }
    if (state.arp.active && state.arp.active.length) {
        state.arp.active.forEach(entry => {
            if (entry.offTimer) {
                clearTimeout(entry.offTimer);
                entry.offTimer = null;
            }
        });
    }
    const seconds = Math.max(1, Math.min(20, parseFloat((els.fadeSeconds || els.fadeTime)?.value) || 5));
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
                if (state.arp.enabled && state.arp.sync === 'internal') {
                    restartInternalArp();
                }
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

function mapMidiNoteToScaleWithDef(note, def) {
    const degrees = def.degrees || [];
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
    ensureVisibleForNotes(chordNotes);
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

function keepArpHoldAsHeld() {
    if (!state.arpHoldTouches.length) return false;
    stopAllArpNotes();
    const held = [];
    state.arpHoldTouches.forEach(t => {
        const m = t.lastM || { press: 90, slide: 0, pbValue: 8192 };
        const list = t.noteObjs || [];
        const groupId = state.holdGroupSeq++;
        list.forEach(n => {
            const noteFloat = n.noteFloat ?? n.note ?? 60;
            const voice = makeVoiceFromNote(noteFloat);
            const chan = state.mpeChannels.shift();
            if (!chan) return;
            const pb = getVoicePb(m, voice);
            sendMidi([0xB0 + chan - 1, 74, m.slide || 0]);
            sendMidi([0xE0 + chan - 1, pb & 0x7F, (pb >> 7) & 0x7F]);
            sendMidi([0xD0 + chan - 1, m.press ?? 90]);
            sendMidi([0x90 + chan - 1, voice.note, Math.max(1, Math.min(127, Math.round(m.press || 90)))]);
            held.push({
                chan,
                note: voice.note,
                basePb: voice.basePb,
                lastM: m,
                color: n.color || t.color || '#ffaa00',
                phase: t.phase || 0,
                group: groupId,
                rootNote: null
            });
        });
    });
    state.heldVoices.push(...held);
    state.arp.notes = [];
    state.arpHoldTouches = [];
    requestDraw();
    return true;
}

function updateArpChords() {
    // Update ARP notes when chord mode changes
    if (state.keepEnabled) return;
    if (!state.arp.enabled || !state.arpHoldTouches.length) return;
    
    const chordMode = els.chordMode.value;
    
    state.arpHoldTouches.forEach(touch => {
        if (!touch.noteObjs || !touch.noteObjs.length) return;
        
        // Get the root note from the first note object
        const rootNoteFloat = touch.noteObjs[0].noteFloat;
        // Snap to nearest scale note for root
        const root = parseInt(els.rootNote.value, 10);
        const def = getScaleDefinition();
        const scaleKey = `${def.mode}:${def.name}`;
        if (!state.scaleNotes.notes.length || state.scaleNotes.root !== root || state.scaleNotes.scale !== scaleKey) {
            updateScaleNotes();
        }
        const rootNote = state.scaleNotes.notes.reduce((prev, curr) => 
            Math.abs(curr - rootNoteFloat) < Math.abs(prev - rootNoteFloat) ? curr : prev
        );
        
        const m = touch.lastM || { press: 90, slide: 0, pbValue: 8192 };
        
        if (chordMode === 'off') {
            // When chord is off, keep only one note (the root)
            if (touch.noteObjs.length > 1) {
                const extra = touch.noteObjs.splice(1);
                removeArpNotes(extra);
            }
            // Update the single note to match root
            const voice = makeVoiceFromNote(rootNote);
            touch.noteObjs[0].noteFloat = rootNote;
            touch.noteObjs[0].note = voice.note;
            touch.noteObjs[0].basePb = voice.basePb;
        } else {
            // Refresh with new chord notes
            refreshArpNotes(touch.noteObjs, m, rootNote);
        }
    });
    
    // Rebuild state.arp.notes from all touches
    state.arp.notes = [];
    state.arpHoldTouches.forEach(touch => {
        if (touch.noteObjs) {
            state.arp.notes.push(...touch.noteObjs);
        }
    });
    
    requestDraw();
}

function updateHeldChords() {
    if (state.keepEnabled) return;
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
        ensureVisibleForNotes(chordNotes);
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
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    requestDraw();
    state.pointerIds.add(e.pointerId);
    // Add note-dragging class to prevent UI button interference
    document.body.classList.add('note-dragging');
    if (state.audio.enabled) resumeAudioContext().then(updateAudioStatus);
    const uiRect = els.ui.getBoundingClientRect();
    const inUi = els.ui.contains(e.target);
    if (!state.midi.output || (els.ui.classList.contains('active') && e.clientY < (uiRect.height + 5)) || inUi) {
        if (!state.midi.output) els.midiStatus.innerText = 'NESSUN MIDI OUT';
        state.pointerIds.delete(e.pointerId);
        document.body.classList.remove('note-dragging');
        return;
    }
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
    ensureVisibleForNotes(chordNotes);
    if (state.arp.enabled && !state.arp.latch) {
        const noteObjs = chordNotes.map(noteFloat => ({
            noteFloat,
            ...makeVoiceFromNote(noteFloat),
            lastM: m,
            color: nextArpColor()
        }));
        state.arp.notes.push(...noteObjs);
        if (state.arp.sync === 'internal' && !state.arp.timer && !state.fadeState.active) {
            restartInternalArp();
        }
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
    state.activeTouches.set(e.pointerId, {
        voices,
        initialExact: rootNote,
        lastX: e.clientX,
        isGrab: false,
        vibratoSpeed: 0,
        phase: 0,
        color: `hsl(${voices[0]?.chan * 25 || 0}, 85%, 55%)`,
        lastM: m,
        smoothPb: touchState.smoothPb,
        smoothSlide: touchState.smoothSlide,
        smoothPress: touchState.smoothPress
    });
});

// Throttled pointermove handler for better performance
let lastPointerMoveTime = 0;
const POINTER_MOVE_THROTTLE_MS = 16; // ~60fps max

canvas.addEventListener('pointermove', e => {
    const t = state.activeTouches.get(e.pointerId);
    if (!t || !state.midi.output) return;
    
    // Throttle pointermove events to reduce CPU load
    const now = performance.now();
    if (now - lastPointerMoveTime < POINTER_MOVE_THROTTLE_MS) {
        // Store last event data for next frame but skip heavy processing
        t.lastX = e.clientX;
        t.pendingEvent = e;
        return;
    }
    lastPointerMoveTime = now;
    t.pendingEvent = null;
    
    requestDraw();
    t.lastX = e.clientX;
    t.lastM = t.lastM ? { ...t.lastM, x: e.clientX, y: e.clientY } : { x: e.clientX, y: e.clientY, press: 0, slide: 0, pbValue: 8192, exact: t.initialExact ?? 0 };
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
                const pbRange = parseInt(els.pbRange.value, 10) || 48;
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
            const pbRange = parseInt(els.pbRange.value, 10) || 48;
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
    try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    const t = state.activeTouches.get(e.pointerId);
    if (t) {
        requestDraw();
        const hold = !!els.holdNotes.checked;
        const keepHeld = state.keepEnabled;
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
            return;
        }
        if (t.isHoldGrab) {
            if (hold || keepHeld) {
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
    }
    state.pointerIds.delete(e.pointerId);
    // Remove note-dragging class when no more active pointers
    if (state.pointerIds.size === 0) {
        document.body.classList.remove('note-dragging');
    }
    if (state.audio.enabled && state.audio.wavetable.mode !== 'sampler' && state.activeTouches.size === 0 && !els.holdNotes.checked && !state.keepEnabled) {
        stopAllVoicesInternal();
    }
});

function cancelActivePointer(pointerId) {
    try { canvas.releasePointerCapture(pointerId); } catch (err) {}
    state.pointerIds.delete(pointerId);
    const t = state.activeTouches.get(pointerId);
    if (!t) {
        if (state.pointerIds.size === 0) {
            document.body.classList.remove('note-dragging');
        }
        return;
    }
    if (t.isArp) {
        const keep = els.holdNotes.checked;
        if (!keep) removeArpNotes(t.arpNotes);
        state.activeTouches.delete(pointerId);
        return;
    }
    if (!state.midi.output) {
        state.activeTouches.delete(pointerId);
        return;
    }
    t.voices.forEach(v => {
        sendMidi([0x80 + v.chan - 1, v.note, 0]);
        state.mpeChannels.push(v.chan);
    });
    state.mpeChannels.sort((a,b)=>a-b);
    state.activeTouches.delete(pointerId);
    // Remove note-dragging class when no more active pointers
    if (state.pointerIds.size === 0) {
        document.body.classList.remove('note-dragging');
    }
    if (state.audio.enabled && state.audio.wavetable.mode !== 'sampler' && state.activeTouches.size === 0 && !els.holdNotes.checked && !state.keepEnabled) {
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
    if (!wheel) return;
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
        const label = isOn ? options[currentIndex].text : 'off';
        if (wheel) {
            wheel.setAttribute('aria-label', `CHORD ${label}`);
            wheel.title = `CHORD ${label}`;
            wheel.dataset.stateLabel = `CHORD ${label}`;
        }
        wheel.classList.toggle('knob-on', isOn);
        wheel.classList.toggle('knob-off', !isOn);
    }

    select.addEventListener('change', () => {
        applyIndex(select.selectedIndex);
        updateHeldChords();
        updateArpChords();
    });

    function toggleChord() {
        if (select.value === 'off') {
            const idx = Math.max(0, options.findIndex(o => o.value === lastModeValue));
            applyIndex(idx);
        } else {
            applyIndex(0);
        }
        updateHeldChords();
        updateArpChords();
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
        updateArpChords();
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
    if (!wheel) return;
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
state.fxUserPresets = loadUserFxPresets();
state.melody.saves = loadMelodySaves();
refreshMelodySaveSelect(state.melody.saves);
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
function initGestureOverlay() {
    if (!els.gestureOverlay) return;
    const overlay = els.gestureOverlay;
    const toggle = els.overlayToggle;
    const modeBtn = els.overlayModeToggle;
    const gestureZone = overlay.querySelector('.overlay-gesture-zone');
    const header = overlay.querySelector('.overlay-header');
    const faders = Array.from(overlay.querySelectorAll('.overlay-fader'));
    const getFaderConfig = (name) => {
        if (state.audio.matrix.enabled) {
            const map = { wtmix: 'a', morph: 'b', depth: 'c', texture: 'd' };
            const key = map[name];
            if (key) {
                return {
                    get: () => state.audio.matrix.macros[key],
                    set: value => setMatrixMacro(key, value)
                };
            }
        }
        const base = {
            wtmix: { get: () => state.audio.wavetable.mix, set: setWavetableMix },
            morph: { get: () => state.audio.macro.morph, set: setMacroMorph },
            depth: { get: () => state.audio.crossMod.depth, set: setCrossModDepth },
            texture: { get: () => state.audio.macro.texture, set: setMacroTexture }
        };
        return base[name] || null;
    };
    const dragState = { active: null };
    const gestureState = { id: null, startX: 0, startY: 0 };
    const overlayDrag = { active: false, id: null, startX: 0, startY: 0, startLeft: 0, startTop: 0 };

    const setOverlayVisible = (isVisible) => {
        state.overlay.active = isVisible;
        overlay.classList.toggle('hidden', !isVisible);
        overlay.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
        if (toggle) toggle.classList.toggle('active', isVisible);
        if (isVisible && state.audio.wavetable.mode !== 'layer') {
            setWavetableMode('layer');
        }
    };

    const setOverlaySide = (side) => {
        state.overlay.side = side === 'left' ? 'left' : 'right';
        overlay.dataset.side = state.overlay.side;
    };

    const loadOverlayPosition = () => {
        const raw = localStorage.getItem('genca_layer_overlay_pos');
        const saved = safeParseJson(raw, null);
        if (!saved || !Number.isFinite(saved.left) || !Number.isFinite(saved.top)) return;
        overlay.style.left = `${saved.left}px`;
        overlay.style.top = `${saved.top}px`;
        overlay.style.right = 'auto';
        overlay.style.bottom = 'auto';
    };

    const saveOverlayPosition = (left, top) => {
        localStorage.setItem('genca_layer_overlay_pos', JSON.stringify({ left, top }));
    };

    const updateFaderMarks = (faderEl, value) => {
        const marks = faderEl.querySelectorAll('.fader-mark');
        marks.forEach(mark => {
            const pos = parseFloat(mark.getAttribute('data-pos'));
            if (!Number.isFinite(pos)) return;
            const dist = Math.abs(value - pos);
            const intensity = Math.max(0, 1 - (dist / 0.35));
            const yellow = { r: 255, g: 170, b: 0 };
            const white = { r: 255, g: 255, b: 255 };
            const mix = intensity;
            const r = Math.round(white.r + (yellow.r - white.r) * mix);
            const g = Math.round(white.g + (yellow.g - white.g) * mix);
            const b = Math.round(white.b + (yellow.b - white.b) * mix);
            mark.style.color = `rgb(${r}, ${g}, ${b})`;
        });
    };

    const syncFaderUI = (faderEl, value) => {
        const clamped = clamp01(value);
        faderEl.style.setProperty('--fader-value', clamped.toFixed(3));
        updateFaderMarks(faderEl, clamped);
    };

    const updateAllFaders = () => {
        faders.forEach(faderEl => {
            const name = faderEl.dataset.fader;
            const cfg = getFaderConfig(name);
            if (!cfg) return;
            syncFaderUI(faderEl, cfg.get());
        });
    };

    const updateModeUI = () => {
        if (!modeBtn) return;
        modeBtn.dataset.mode = state.audio.crossMod.mode;
        modeBtn.textContent = state.audio.crossMod.mode.toUpperCase();
    };

    const getFaderValueFromEvent = (faderEl, e) => {
        const track = faderEl.querySelector('.fader-track');
        if (!track) return 0;
        const rect = track.getBoundingClientRect();
        const y = e.clientY;
        const value = 1 - ((y - rect.top) / Math.max(1, rect.height));
        return clamp01(value);
    };

    const startFaderDrag = (faderEl, e) => {
        const name = faderEl.dataset.fader;
        const cfg = getFaderConfig(name);
        if (!cfg) return;
        dragState.active = { el: faderEl, cfg };
        faderEl.setPointerCapture(e.pointerId);
        const value = getFaderValueFromEvent(faderEl, e);
        cfg.set(value);
        syncFaderUI(faderEl, value);
    };

    const moveFaderDrag = (faderEl, e) => {
        if (!dragState.active || dragState.active.el !== faderEl) return;
        const value = getFaderValueFromEvent(faderEl, e);
        dragState.active.cfg.set(value);
        syncFaderUI(faderEl, value);
    };

    const endFaderDrag = (faderEl, e) => {
        if (!dragState.active || dragState.active.el !== faderEl) return;
        dragState.active = null;
        try { faderEl.releasePointerCapture(e.pointerId); } catch (err) {}
    };

    faders.forEach(faderEl => {
        const handle = faderEl.querySelector('.fader-handle');
        const track = faderEl.querySelector('.fader-track');
        [handle, track].forEach(target => {
            if (!target) return;
            target.addEventListener('pointerdown', e => {
                e.preventDefault();
                e.stopPropagation();
                startFaderDrag(faderEl, e);
            });
        });
        faderEl.addEventListener('pointermove', e => moveFaderDrag(faderEl, e));
        faderEl.addEventListener('pointerup', e => endFaderDrag(faderEl, e));
        faderEl.addEventListener('pointercancel', e => endFaderDrag(faderEl, e));
    });

    if (modeBtn) {
        modeBtn.addEventListener('pointerdown', e => {
            e.preventDefault();
            e.stopPropagation();
        });
        modeBtn.onclick = () => {
            const next = state.audio.crossMod.mode === 'fm' ? 'am' : 'fm';
            setCrossModMode(next);
            updateModeUI();
        };
    }

    if (toggle) {
        toggle.onclick = () => setOverlayVisible(!state.overlay.active);
    }

    if (gestureZone) {
        gestureZone.addEventListener('pointerdown', e => {
            e.preventDefault();
            e.stopPropagation();
            gestureState.id = e.pointerId;
            gestureState.startX = e.clientX;
            gestureState.startY = e.clientY;
            gestureZone.setPointerCapture(e.pointerId);
        });
        gestureZone.addEventListener('pointerup', e => {
            if (gestureState.id !== e.pointerId) return;
            const dx = e.clientX - gestureState.startX;
            const dy = e.clientY - gestureState.startY;
            const absX = Math.abs(dx);
            const absY = Math.abs(dy);
            if (absX > 60 && absX > absY) {
                setOverlaySide(dx > 0 ? 'right' : 'left');
            } else if (dy > 60 && absY > absX) {
                setOverlayVisible(false);
            }
            gestureState.id = null;
            try { gestureZone.releasePointerCapture(e.pointerId); } catch (err) {}
        });
        gestureZone.addEventListener('pointercancel', e => {
            if (gestureState.id !== e.pointerId) return;
            gestureState.id = null;
            try { gestureZone.releasePointerCapture(e.pointerId); } catch (err) {}
        });
    }

    if (header) {
        header.addEventListener('pointerdown', e => {
            e.preventDefault();
            overlayDrag.active = true;
            overlayDrag.id = e.pointerId;
            const rect = overlay.getBoundingClientRect();
            overlayDrag.startX = e.clientX;
            overlayDrag.startY = e.clientY;
            overlayDrag.startLeft = rect.left;
            overlayDrag.startTop = rect.top;
            overlay.style.left = `${rect.left}px`;
            overlay.style.top = `${rect.top}px`;
            overlay.style.right = 'auto';
            overlay.style.bottom = 'auto';
            header.setPointerCapture(e.pointerId);
        });
        header.addEventListener('pointermove', e => {
            if (!overlayDrag.active || overlayDrag.id !== e.pointerId) return;
            const dx = e.clientX - overlayDrag.startX;
            const dy = e.clientY - overlayDrag.startY;
            const nextLeft = overlayDrag.startLeft + dx;
            const nextTop = overlayDrag.startTop + dy;
            const maxLeft = Math.max(0, window.innerWidth - overlay.offsetWidth - 8);
            const maxTop = Math.max(0, window.innerHeight - overlay.offsetHeight - 8);
            const left = Math.max(8, Math.min(maxLeft, nextLeft));
            const top = Math.max(8, Math.min(maxTop, nextTop));
            overlay.style.left = `${left}px`;
            overlay.style.top = `${top}px`;
        });
        header.addEventListener('pointerup', e => {
            if (!overlayDrag.active || overlayDrag.id !== e.pointerId) return;
            overlayDrag.active = false;
            overlayDrag.id = null;
            header.releasePointerCapture(e.pointerId);
            const rect = overlay.getBoundingClientRect();
            saveOverlayPosition(rect.left, rect.top);
        });
        header.addEventListener('pointercancel', e => {
            if (!overlayDrag.active || overlayDrag.id !== e.pointerId) return;
            overlayDrag.active = false;
            overlayDrag.id = null;
            try { header.releasePointerCapture(e.pointerId); } catch (err) {}
        });
    }

    loadOverlayPosition();
    setOverlaySide(state.overlay.side);
    updateOverlayLabelsForMatrix(state.audio.matrix.enabled);
    updateAllFaders();
    updateModeUI();
    setOverlayVisible(state.overlay.active);
}

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
        els.performance.classList.toggle('compact');
        refreshLayout();
    };
    if (els.fsBtn) {
        els.fsBtn.onclick = () => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen();
            else document.exitFullscreen();
        };
    }
    if (els.octDownBtn) els.octDownBtn.onclick = () => changeOctave(-1);
    if (els.octUpBtn) els.octUpBtn.onclick = () => changeOctave(1);
    if (els.holdBtn) {
        els.holdBtn.onclick = () => {
            const hold = els.holdNotes;
            if (!hold) return;
            hold.checked = !hold.checked;
            updateHoldButtonUI();
            if (!hold.checked) {
                if (!state.keepEnabled) {
                    releaseHeldCollections();
                }
            }
        };
    }
    if (els.keepBtn) {
        updateKeepButtonUI();
        els.keepBtn.onclick = () => {
            state.keepEnabled = !state.keepEnabled;
            updateKeepButtonUI();
            if (!state.keepEnabled) {
                if (!els.holdNotes.checked) {
                    releaseHeldCollections();
                }
                if (!els.arpEnabled.checked) {
                    state.arp.keepHold = false;
                    stopInternalArp();
                    stopAllArpNotes();
                    state.arp.notes = [];
                    state.arpHoldTouches = [];
                }
            } else {
                state.arp.keepHold = !els.arpEnabled.checked && state.arpHoldTouches.length > 0;
                if (state.arp.keepHold && state.arp.sync === 'internal') {
                    restartInternalArp();
                }
            }
        };
    }
    if (els.pbRange) {
        els.pbRange.onchange = e => setPitchBendRange(parseInt(e.target.value, 10));
    }
    if (els.holdNotes) {
        els.holdNotes.onchange = e => {
            updateHoldButtonUI();
            if (!e.target.checked) {
                if (!state.keepEnabled) {
                    releaseHeldCollections();
                }
            }
        };
    }
    if (els.panicBtn) {
        els.panicBtn.onclick = () => {
            if (state.melody.enabled) {
                state.melody.enabled = false;
                stopMelodyGenerator();
                updateMelodyToggleUI();
            }
            allNotesOff();
            if (els.midiStatus) els.midiStatus.innerText = 'STOP';
        };
    }
    if (els.fadeBtn) els.fadeBtn.onclick = () => {
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
    els.arpBpm.onchange = () => {
        syncArpFromUI();
        restartMelodyGenerator();
    };
    els.arpLatch.onchange = syncArpFromUI;
    const toggleMelody = () => {
        state.melody.enabled = !state.melody.enabled;
        updateMelodyToggleUI();
        if (state.melody.enabled) {
            if (!state.melody.imported) {
                state.melody.notes = buildMelodySequence();
            }
            updateMelodyPreview();
            startMelodyGenerator();
        } else {
            stopMelodyGenerator();
        }
    };
    if (els.melodyToggle) {
        updateMelodyToggleUI();
        els.melodyToggle.onclick = toggleMelody;
    }
    if (els.melodyPerfToggle) {
        updateMelodyToggleUI();
        els.melodyPerfToggle.onclick = toggleMelody;
    }
    if (els.melodyLatchPerf) {
        updateMelodyLatchUI();
        els.melodyLatchPerf.onclick = () => {
            setMelodyLatch(!state.melody.latchEnabled);
        };
    }        if (els.melodyRebuild) {
        els.melodyRebuild.onclick = () => {
            if (state.melody.latchEnabled) return;
            state.melody.imported = false;
            state.melody.importedFeatures = null;
            clearMelodyContinuationState();
            updateMelodyFromUI(true);
            restartMelodyGenerator();
            updateMelodyStatusUI();
        };
    }
    if (els.melodyKeepImported) {
        els.melodyKeepImported.onclick = () => {
            state.melody.imported = true;
            updateMelodyStatusUI();
        };
    }
    if (els.melodyLayerToggle) {
        updateLayerToggleUI();
        els.melodyLayerToggle.onclick = () => {
            if (state.melody.latchEnabled) return;
            state.melody.layer.enabled = !state.melody.layer.enabled;
            updateLayerToggleUI();
            updateMelodyFromUI(false);
            if (state.melody.running) restartMelodyGenerator();
        };
    }
    if (els.melodySeqEditor) {
        initSequencerMatrix();
    }

    if (els.melodyRollCanvas) {
        initEnhancedPianoRoll(); 
    }
    if (els.melodyRollZoomH) {
        els.melodyRollZoomH.value = state.melody.roll.stepPx;
        els.melodyRollZoomH.oninput = e => {
            state.melody.roll.stepPx = parseInt(e.target.value, 10) || 20;
            resizeMelodyRollCanvas();
        };
    }
    if (els.melodyRollZoom) {
        els.melodyRollZoom.oninput = e => {
            state.melody.roll.zoom = parseFloat(e.target.value) || 1;
            resizeMelodyRollCanvas();
        };
    }
    if (els.melodyRollScroll) {
        els.melodyRollScroll.oninput = e => {
            state.melody.roll.offset = parseInt(e.target.value, 10) || 0;
            drawMelodyPianoRoll();
        };
    }
    if (els.melodySaveBtn) {
        els.melodySaveBtn.onclick = () => {
            const rawName = (els.melodySaveName?.value || '').trim();
            if (!rawName) return;
            let name = rawName;
            if (state.melody.imported && !/\(imported\)\s*$/i.test(name)) {
                name = `${name} (imported)`;
            }
            if (!state.melody.notes.length) {
                state.melody.notes = buildMelodySequence();
                updateMelodyPreview();
            }
            updateMelodyFromUI(false);
            state.melody.saves[name] = {
                notes: [...state.melody.notes],
                params: getMelodySaveParams()
            };
            saveMelodySaves(state.melody.saves);
            refreshMelodySaveSelect(state.melody.saves, name);
            if (els.melodySaveName) els.melodySaveName.value = '';
        };
    }
    if (els.melodySaveSelect) {
        els.melodySaveSelect.onchange = e => {
            const name = e.target.value;
            const saved = state.melody.saves?.[name];
            if (!saved || !Array.isArray(saved.notes)) return;
            state.melody.notes = [...saved.notes];
            state.melody.stepIndex = 0;
            state.melody.imported = true;
            state.melody.importedFeatures = null;
            clearMelodyContinuationState();
            applyMelodySaveParams(saved);
            updateMelodyFromUI(false);
            updateMelodyPreview();
            setMelodyEditStep(0);
            updateMelodyStatusUI();
            if (state.melody.running) restartMelodyGenerator();
        };
    }
    if (els.melodyImportAdvancedBtn) {
        els.melodyImportAdvancedBtn.onclick = async () => {
            if (state.melody.latchEnabled) {
                if (els.melodyImportAdvancedStatus) els.melodyImportAdvancedStatus.textContent = 'Latch ON';
                return;
            }
            const file = els.melodyImportFile?.files?.[0];
            if (!file) return;
            if (els.melodyImportAdvancedStatus) els.melodyImportAdvancedStatus.textContent = 'Loading Magenta...';
            try {
                const model = await loadMagenta();
                if (!model?.transcribeFromAudioBuffer) {
                    throw new Error('Magenta model not ready');
                }
                if (els.melodyImportAdvancedStatus) els.melodyImportAdvancedStatus.textContent = 'Analyzing...';
                const arrayBuf = await file.arrayBuffer();
                const ctx = state.audio.ctx || new (window.AudioContext || window.webkitAudioContext)();
                if (ctx.state === 'suspended') {
                    await ctx.resume();
                }
                const audioBuf = await ctx.decodeAudioData(arrayBuf.slice(0));
                let seq = null;
                try {
                    seq = await model.transcribeFromAudioBuffer(audioBuf);
                } catch (err) {
                    console.warn('transcribeFromAudioBuffer failed, trying transcribeFromAudioFile', err);
                    seq = await model.transcribeFromAudioFile(file);
                }
                const result = buildNotesFromNoteSequence(seq);
                const notes = result?.notes || [];
                if (!notes.length) {
                    if (els.melodyImportAdvancedStatus) els.melodyImportAdvancedStatus.textContent = 'No melody found.';
                    return;
                }
                const snappedNotes = snapImportedMelodyNotes(notes);
                state.melody.imported = true;
                state.melody.importedFeatures = result?.features || null;
                state.melody.notes = snappedNotes;
                state.melody.length = snappedNotes.length;
                clearMelodyContinuationState();
                state.melody.stepIndex = 0;
                if (els.melodyLength) els.melodyLength.value = snappedNotes.length;
                updateMelodyPreview();
                setMelodyEditStep(0);
                if (state.melody.running) restartMelodyGenerator();
                setMelodyStatusLog('import');
                updateMelodyStatusUI();
                if (els.melodyImportAdvancedStatus) {
                    els.melodyImportAdvancedStatus.textContent = `Imported ${snappedNotes.length} steps.`;
                }
            } catch (err) {
                console.error('Advanced import failed', err);
                magentaModel = null;
                magentaLoadPromise = null;
                const msg = err?.message || String(err || 'Unknown error');
                const tfVersion = window.tf?.version?.tfjs;
                const tfBackend = window.tf?.getBackend?.();
                if (els.melodyImportAdvancedStatus) {
                    const debug = [msg, tfVersion && `tfjs ${tfVersion}`, tfBackend && `backend ${tfBackend}`]
                        .filter(Boolean)
                        .join(' | ');
                    els.melodyImportAdvancedStatus.textContent = `Advanced import failed: ${debug}`;
                }
            }
        };
    }

    if (els.melodyContinueBtn) {
        els.melodyContinueBtn.onclick = async () => {
            if (state.melody.latchEnabled) {
                if (els.melodyContinueStatus) els.melodyContinueStatus.textContent = 'Latch ON';
                return;
            }
            const steps = Math.max(4, Math.min(64, parseInt(els.melodyContinueSteps?.value, 10) || 16));
            const temperature = Math.max(0.4, Math.min(2, parseFloat(els.melodyContinueTemp?.value) || 1));
            const rhythmSimilarity = Math.max(0, Math.min(1, (parseInt(els.melodyContinueRhythm?.value, 10) || 70) / 100));
            const forceScale = !!els.melodyContinueScale?.checked;
            if (!state.melody.notes?.length) {
                if (els.melodyContinueStatus) els.melodyContinueStatus.textContent = 'No melody to continue.';
                return;
            }
            if (els.melodyContinueStatus) els.melodyContinueStatus.textContent = 'Loading Magenta...';
            try {
                if (els.melodyContinueStatus) els.melodyContinueStatus.textContent = 'Generating...';
                const baseNotes = [...state.melody.notes];
                const baseImported = !!state.melody.imported;
                const baseLength = baseNotes.length;
                const seedSteps = Math.min(16, baseLength);
                const result = await generateMelodyContinuation({
                    steps,
                    temperature,
                    rhythmSimilarity,
                    seedSteps,
                    baseLength,
                    forceScale
                });
                const added = appendQuantizedSequenceToMelody(result.seq, steps);
                state.melody.imported = true;
                state.melody.importedFeatures = null;
                state.melody.continue = {
                   // auto: !!els.melodyContinueAuto?.checked,
                    baseNotes,
                    baseImported,
                    steps,
                    temperature,
                    rhythmSimilarity,
                    forceScale,
                    seedSteps,
                    baseLength
                };
                state.melody.stepIndex = 0;
                updateMelodyPreview();
                setMelodyEditStep(0);
                if (state.melody.running) restartMelodyGenerator();
                setMelodyStatusLog('continue');
                updateMelodyStatusUI();
                if (els.melodyContinueStatus) {
                    els.melodyContinueStatus.textContent = `Added ${added} steps.`;
                }
            } catch (err) {
                console.error('Continue melody failed', err);
                musicRnnModel = null;
                musicRnnLoadPromise = null;
                const msg = err?.message || String(err || 'Unknown error');
                if (els.melodyContinueStatus) els.melodyContinueStatus.textContent = `Continue failed: ${msg}`;
            }
        };
    }
    if (els.melodyContinueReset) {
        els.melodyContinueReset.onclick = () => {
            if (state.melody.latchEnabled) {
                if (els.melodyContinueStatus) els.melodyContinueStatus.textContent = 'Latch ON';
                return;
            }
            const baseNotes = state.melody.continue?.baseNotes;
            if (!baseNotes || !baseNotes.length) return;
            const baseImported = !!state.melody.continue?.baseImported;
            state.melody.notes = [...baseNotes];
            state.melody.imported = baseImported;
            state.melody.importedFeatures = null;
            state.melody.continue = null;
            state.melody.length = state.melody.notes.length;
            if (els.melodyLength) els.melodyLength.value = state.melody.length;
            state.melody.stepIndex = 0;
            updateMelodyPreview();
            setMelodyEditStep(0);
            if (state.melody.running) restartMelodyGenerator();
            setMelodyStatusLog('reset');
            updateMelodyStatusUI();
            if (els.melodyContinueStatus) {
                els.melodyContinueStatus.textContent = 'Reset to base melody.';
            }
        };
    }

    if (els.melodyImportBtn) {
        els.melodyImportBtn.onclick = async () => {
            if (state.melody.latchEnabled) {
                if (els.melodyImportStatus) els.melodyImportStatus.textContent = 'Latch ON';
                return;
            }
            const file = els.melodyImportFile?.files?.[0];
            if (!file) return;
            if (els.melodyImportStatus) els.melodyImportStatus.textContent = 'Analyzing...';
            try {
                const arrayBuf = await file.arrayBuffer();
                const ctx = state.audio.ctx || new (window.AudioContext || window.webkitAudioContext)();
                const audioBuf = await ctx.decodeAudioData(arrayBuf.slice(0));
                const result = extractMelodyNotesFromAudio(audioBuf);
                const notes = result?.notes || result;
                if (!notes.length) {
                    if (els.melodyImportStatus) els.melodyImportStatus.textContent = 'No melody found.';
                    return;
                }
                const snappedNotes = snapImportedMelodyNotes(notes);
                state.melody.notes = snappedNotes;
                state.melody.length = snappedNotes.length;
                state.melody.imported = true;
                state.melody.importedFeatures = result?.features || null;
                clearMelodyContinuationState();
                state.melody.stepIndex = 0;
                if (els.melodyLength) els.melodyLength.value = snappedNotes.length;
                updateMelodyPreview();
                setMelodyEditStep(0);
                if (state.melody.running) restartMelodyGenerator();
                setMelodyStatusLog('import');
                updateMelodyStatusUI();
                if (els.melodyImportStatus) {
                    els.melodyImportStatus.textContent = `Imported ${snappedNotes.length} steps.`;
                }
            } catch (err) {
                if (els.melodyImportStatus) els.melodyImportStatus.textContent = 'Import failed.';
            }
        };
    }
    const melodyLegend = document.getElementById('melodyHumanLegend');
    const melodyLegendMap = new Map([
        [els.melodyToggle, 'Melody on/off: start or stop the generator.'],
        [els.melodyRebuild, 'Rebuild: regenerate using the current params.'],
        [els.melodyKeepImported, 'Keep: keep the imported melody without rebuilding.'],
        [els.melodyStyle, 'Pattern: choose melodic motion, rules bias, or a rhythm pattern.'],
        [els.melodyLength, 'Length: number of steps in the melody sequence.'],
        [els.melodyRate, 'Rate: step speed of the melody.'],
        [els.melodyDensity, 'Density: probability that a step produces a note.'],
        [els.melodyRange, 'Range: pitch span around the current octave/root.'],
        [els.melodySeed, 'Seed: random seed for repeatable melodies.'],
        [els.melodyCadence, 'Cadence: forces the ending note (tonic/dominant/none).'],
        [els.melodyRuleSelect, 'Rules: choose the rule bias for melody generation.'],
        [els.melodyRhythmMode, 'Rhythm mode: off, rules-based, or fixed pattern.'],
        [els.melodyRhythmPattern, 'Rhythm pattern: pick a predefined groove family.'],
        [els.melodyLayerToggle, 'Layer on/off: add extra harmony notes.'],
        [els.melodyLayerMode, 'Layer mode: chord shape for added notes.'],
        [els.melodyLayerLevel, 'Layer level: velocity of harmony notes.'],
        [els.melodyHumanTiming, 'Timing: shifts note timing forward/backward in milliseconds.'],
        [els.melodyHumanVelocity, 'Velocity: dynamic variation of note intensity.'],
        [els.melodyHumanSwing, 'Swing: offsets even steps for a more human feel.'],
        [els.melodyHumanLegato, 'Legato: lengthens or shortens note duration.'],
        [els.melodyHumanOrnament, 'Ornaments: adds grace/neighbor notes.'],
        [els.melodyHumanPress, 'MPE Press: aftertouch pressure for timbre/volume.'],
        [els.melodyHumanTimbre, 'MPE Timbre: CC74 (Y axis) timbre control.'],
        [els.melodyHumanPitch, 'Pitch Bend: micro pitch variation.'],
        [els.melodyHumanYMotion, 'Y virtual motion: amount of virtual Y movement.'],
        [els.melodyHumanYMotionToggle, 'Y motion on: enable/disable virtual Y movement.'],
        [els.melodyMpePerNote, 'MPE per note: one channel per note (per-note expression).'],
        [els.melodyImportBtn, 'Import: detect a melody from the WAV using fast analysis.'],
        [els.melodyImportSnap, 'Snap import: off, semitone, or scale.'],
        [els.melodyImportAdvancedBtn, 'Advanced import: Magenta transcription for better pitch accuracy.'],
        [els.melodyContinueBtn, 'Continue: Magenta generates the next steps from the current melody.'],
        [els.melodyContinueReset, 'Reset: restore the melody before continuation.'],
        [els.melodyContinueSteps, 'Continue steps: how many new steps to add.'],
        [els.melodyContinueTemp, 'Temperature: randomness of the continuation (lower = safer).'],
        [els.melodyContinueRhythm, 'Rhythm similarity: how closely the continuation matches the original rhythm.'],
      //  [els.melodyContinueAuto, 'Auto regenerate: update the continuation when melody settings change.'],
        [els.melodyContinueScale, 'Force scale: snap continuation pitches to the selected scale.']
    ]);
    const showMelodyLegend = el => {
        if (!melodyLegend || !el || !melodyLegendMap.has(el)) return;
        melodyLegend.textContent = melodyLegendMap.get(el);
    };
    melodyLegendMap.forEach((_, el) => {
        if (!el) return;
        el.addEventListener('pointerdown', () => showMelodyLegend(el));
        el.addEventListener('focus', () => showMelodyLegend(el));
        el.addEventListener('input', () => showMelodyLegend(el));
    });
    const syncMelodyYMotionToggle = () => {
        if (!els.melodyHumanYMotion || !els.melodyHumanYMotionToggle) return;
        const enabled = !!els.melodyHumanYMotionToggle.checked;
        els.melodyHumanYMotion.disabled = !enabled;
    };
    if (els.melodyHumanYMotionToggle) {
        els.melodyHumanYMotionToggle.addEventListener('change', syncMelodyYMotionToggle);
    }
    syncMelodyYMotionToggle();
    const melodyGenInputs = new Set([
        els.melodyStyle,
        els.melodyLength,
        els.melodyDensity,
        els.melodyRange,
        els.melodySeed,
        els.melodyCadence
    ]);
    const melodyPlaybackInputs = new Set([
        els.melodyRate,
        els.melodyHumanizeAmount,
        els.melodyHumanTiming,
        els.melodyHumanVelocity,
        els.melodyHumanSwing,
        els.melodyHumanLegato,
        els.melodyHumanOrnament,
        els.melodyHumanPress,
        els.melodyHumanTimbre,
        els.melodyHumanPitch,
        els.melodyHumanYMotion,
        els.melodyHumanYMotionToggle,
        els.melodyLayerMode,
        els.melodyLayerLevel,
        els.melodyMpePerNote
    ]);
    const onMelodyParamChange = e => {
        if (state.melody.latchEnabled) {
            syncMelodyPerfControls();
            updateMelodyStatusUI();
            return;
        }
        const target = e?.target || null;
        const isGen = melodyGenInputs.has(target);
        const isPlayback = melodyPlaybackInputs.has(target);
        if (isGen) {
            state.melody.imported = false;
            clearMelodyContinuationState();
        }
        updateMelodyFromUI(!!isGen);
        updateMelodyHumanizeEffective();
        if (state.melody.running) {
            restartMelodyGenerator();
        }
    };
    [
        ...melodyGenInputs,
        ...melodyPlaybackInputs
    ].forEach(input => {
        if (!input) return;
        input.onchange = onMelodyParamChange;
    });
    if (els.melodyRatePerf) {
        els.melodyRatePerf.onchange = e => {
            if (els.melodyRate) els.melodyRate.value = e.target.value;
            onMelodyParamChange({ target: els.melodyRate });
        };
    }
    if (els.melodyVolumePerf) {
        const applyMelodyVolumeLive = (nextVol, prevVol) => {
            const melodyGain = state.audio?.melodyGain;
            const ctx = state.audio?.ctx;
            if (!melodyGain || !ctx) return;
            const now = ctx.currentTime;
            const safePrev = Math.max(0, Number.isFinite(prevVol) ? prevVol : 1);
            const safeNext = Math.max(0, Number.isFinite(nextVol) ? nextVol : 1);
            if (typeof melodyGain.gain.cancelAndHoldAtTime === 'function') {
                melodyGain.gain.cancelAndHoldAtTime(now);
            } else {
                melodyGain.gain.cancelScheduledValues(now);
                melodyGain.gain.setValueAtTime(melodyGain.gain.value, now);
            }
            const current = Math.max(0, melodyGain.gain.value || safePrev);
            melodyGain.gain.setValueAtTime(current, now);
            melodyGain.gain.setTargetAtTime(safeNext, now, 0.04);
        };
        const sendMelodyExpression = (vol) => {
            if (!state.midi?.hardwareOutput) return;
            const value = Math.max(0, Math.min(127, Math.round(vol * 127)));
            const chans = new Set([state.melody?.chan || 1]);
            (state.melody?.lastVoices || []).forEach(v => chans.add(v.chan));
            chans.forEach(ch => {
                const chan = Math.max(1, Math.min(16, ch));
                sendMidiHardware([0xB0 + chan - 1, 11, value], { isMelody: true });
            });
        };
        const applyVol = () => {
            const raw = parseInt(els.melodyVolumePerf.value, 10);
            const vol = Number.isFinite(raw) ? Math.max(0, Math.min(100, raw)) / 100 : 1;
            const prev = Number.isFinite(state.melody.volume) ? state.melody.volume : 1;
            state.melody.volume = vol;
            applyMelodyVolumeLive(vol, prev);
            sendMelodyExpression(vol);
            updateRangeProgress(els.melodyVolumePerf);
        };
        els.melodyVolumePerf.oninput = applyVol;
        applyVol();
    }
    if (els.melodySeedPerfDown) {
        els.melodySeedPerfDown.onclick = () => {
            if (!els.melodySeed) return;
            const current = parseInt(els.melodySeed.value, 10) || 1;
            const next = Math.max(1, current - 1);
            els.melodySeed.value = next;
            onMelodyParamChange({ target: els.melodySeed });
        };
    }
    if (els.melodySeedPerfUp) {
        els.melodySeedPerfUp.onclick = () => {
            if (!els.melodySeed) return;
            const current = parseInt(els.melodySeed.value, 10) || 1;
            const next = Math.min(9999, current + 1);
            els.melodySeed.value = next;
            onMelodyParamChange({ target: els.melodySeed });
        };
    }
    if (els.melodyCadencePerf) {
        els.melodyCadencePerf.onchange = e => {
            if (els.melodyCadence) els.melodyCadence.value = e.target.value;
            onMelodyParamChange({ target: els.melodyCadence });
        };
    }
    if (els.melodyLayerPerf) {
        els.melodyLayerPerf.onclick = () => {
            if (state.melody.latchEnabled) return;
            state.melody.layer.enabled = !state.melody.layer.enabled;
            updateLayerToggleUI();
            updateMelodyFromUI(false);
            if (state.melody.running) restartMelodyGenerator();
            syncMelodyPerfControls();
        };
    }
    updateMelodyRuleSummary();
    updateMelodyStatusUI();
    updateMelodyEditStatus();
    syncMelodyPerfControls();
    updateMelodyHumanizeEffective();
    if (els.arpParamsToggle && els.arpParamsPanel) {
        els.arpParamsToggle.onclick = () => {
            els.arpParamsPanel.classList.toggle('hidden');
            updateArpParamsToggleLabel();
        };
    }
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
    if (els.microtonalizeIn) {
        els.microtonalizeIn.onchange = () => { updateScaleModeUI(); scheduleScaleUpdate(); };
    }
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
        // Set initial visibility based on Internal Synth state
        els.recControls.style.display = state.audio.enabled ? 'flex' : 'none';
    }
    // Setup recording editor events
    setupRecordingEditorEvents();
    
    if (els.sampleSetSelect || els.sampleSetSelectMini) {
        refreshSampleSetSelect(state.audio.activeSet);
        if (els.sampleSetSelect) {
            els.sampleSetSelect.onchange = () => {
                const value = els.sampleSetSelect.value;
                if (els.sampleSetSelectMini) els.sampleSetSelectMini.value = value;
                loadSampleSet(value);
            };
        }
        if (els.sampleSetSelectMini) {
            els.sampleSetSelectMini.onchange = () => {
                const value = els.sampleSetSelectMini.value;
                if (els.sampleSetSelect) els.sampleSetSelect.value = value;
                loadSampleSet(value);
            };
        }
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
    if (els.fxPresetSave) {
        els.fxPresetSave.onclick = () => {
            const typed = (els.fxPresetName && els.fxPresetName.value.trim()) || '';
            const selected = (els.fxPresetSelect && els.fxPresetSelect.value) || '';
            const name = typed || selected;
            if (!name) return;
            state.fxUserPresets[name] = { ...state.audio.fx };
            saveUserFxPresets(state.fxUserPresets);
            refreshFxPresetSelects();
            applyFxPreset(name);
        };
    }
    if (els.fxPresetDel) {
        els.fxPresetDel.onclick = () => {
            const name = els.fxPresetSelect ? els.fxPresetSelect.value : '';
            if (!name || !state.fxUserPresets[name]) return;
            delete state.fxUserPresets[name];
            saveUserFxPresets(state.fxUserPresets);
            refreshFxPresetSelects();
            applyFxPreset('Init');
        };
    }
    // Applica preset quando si cambia selezione nel pannello FX
    if (els.fxPresetSelect) {
        els.fxPresetSelect.onchange = () => applyFxPreset(els.fxPresetSelect.value);
    }
    if (els.fxPresetQuick) {
        els.fxPresetQuick.onchange = () => applyFxPreset(els.fxPresetQuick.value);
    }
    if (els.matrixSceneSelect) {
        clearChildren(els.matrixSceneSelect);
        Object.keys(MATRIX_SCENES).forEach(name => appendOption(els.matrixSceneSelect, name, name));
        els.matrixSceneSelect.value = state.audio.matrix.scene;
        els.matrixSceneSelect.onchange = () => setMatrixScene(els.matrixSceneSelect.value);
        if (els.matrixSceneDesc) els.matrixSceneDesc.textContent = MATRIX_SCENES[state.audio.matrix.scene]?.desc || '';
    }
    if (els.matrixToggle) {
        els.matrixToggle.onclick = () => setMatrixEnabled(!state.audio.matrix.enabled);
    }
    if (els.amTone) {
        els.amTone.value = state.audio.crossMod.amTone;
        updateRangeProgress(els.amTone);
        els.amTone.oninput = () => {
            state.audio.crossMod.amTone = Math.max(1000, Math.min(8000, parseFloat(els.amTone.value) || 1000));
            updateRangeProgress(els.amTone);
            updateCrossModDepth();
        };
    }
    if (els.amBias) {
        els.amBias.value = state.audio.crossMod.amBias.toFixed(2);
        updateRangeProgress(els.amBias);
        els.amBias.oninput = () => {
            state.audio.crossMod.amBias = clamp01(parseFloat(els.amBias.value) || 0);
            updateRangeProgress(els.amBias);
            updateCrossModDepth();
        };
    }
    if (els.wtMode) {
        clearChildren(els.wtMode);
        appendOption(els.wtMode, 'sampler', 'Sampler only');
        appendOption(els.wtMode, 'wt', 'Synth only');
        appendOption(els.wtMode, 'layer', 'Mix');
        els.wtMode.value = state.audio.wavetable.mode;
        els.wtMode.onchange = () => {
            setWavetableMode(els.wtMode.value);
            updateWavetableUI();
        };
    }
    if (els.wtSelect) {
        clearChildren(els.wtSelect);
        Object.keys(WAVETABLES).forEach(name => appendOption(els.wtSelect, name, name));
        els.wtSelect.value = state.audio.wavetable.type;
        els.wtSelect.onchange = () => {
            const order = getWavetableOrder();
            const idx = order.indexOf(els.wtSelect.value);
            if (idx >= 0 && order.length > 1) {
                setMacroMorph(idx / (order.length - 1));
            } else {
                state.audio.wavetable.type = els.wtSelect.value;
                updateWavetableUI();
                updateWavetableMix();
            }
        };
    }
    if (els.wtMix) {
        els.wtMix.oninput = () => {
            setWavetableMix(parseFloat(els.wtMix.value) || 0);
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
    setWavetableMix(state.audio.wavetable.mix);
    setMacroMorph(state.audio.macro.morph);
    setCrossModDepth(state.audio.crossMod.depth);
    setMacroTexture(state.audio.macro.texture);
    setCrossModMode(state.audio.crossMod.mode);
    if (els.amTone) {
        els.amTone.value = state.audio.crossMod.amTone;
        updateRangeProgress(els.amTone);
    }
    if (els.amBias) {
        els.amBias.value = state.audio.crossMod.amBias.toFixed(2);
        updateRangeProgress(els.amBias);
    }
    setMatrixScene(state.audio.matrix.scene);
    setMatrixEnabled(state.audio.matrix.enabled);

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
initGestureOverlay();
setupChordKnob();
setupArpKnob();
updateMelodyFromUI(true);
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
    const notes = buildScaleNotesFromDefinition(def);
    state.scaleNotes = { notes, root: def.root, scale: `${def.mode}:${def.name}` };
    if (state.melody.enabled && !state.melody.latchEnabled) {
        updateMelodyFromUI(!state.melody.imported);
        if (state.melody.running) restartMelodyGenerator();
    }
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
        const pData = pList ? pList.find(d => !d.grabbed) : null;
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

function getVisualModeFlags() {
    const mode = state.audio.wavetable.mode;
    return {
        wt: mode === 'wt',
        sampler: mode === 'sampler',
        layer: mode === 'layer'
    };
}

function getWaveVisualMorph() {
    const order = getWavetableOrder();
    if (!order.length) return { a: 'Saw', b: 'Saw', mix: 0 };
    if (order.length === 1) return { a: order[0], b: order[0], mix: 0 };
    const morph = clamp01(state.audio.macro.morph);
    const pos = morph * (order.length - 1);
    const idx = Math.floor(pos);
    const frac = pos - idx;
    const a = order[idx];
    const b = order[Math.min(order.length - 1, idx + 1)];
    return { a, b, mix: frac };
}

function waveformSample(type, t) {
    const phase = (t % 1 + 1) % 1;
    switch (type) {
        case 'Saw':
            return (phase * 2) - 1;
        case 'Square':
            return phase < 0.5 ? 1 : -1;
        case 'PWM': {
            const duty = 0.28;
            return phase < duty ? 1 : -1;
        }
        case 'Triangle': {
            const tri = phase < 0.5 ? (phase * 4 - 1) : (3 - phase * 4);
            return tri;
        }
        case 'Formant': {
            const s1 = Math.sin(phase * Math.PI * 2);
            const s2 = Math.sin(phase * Math.PI * 6);
            const s3 = Math.sin(phase * Math.PI * 10);
            const notch = Math.sin(phase * Math.PI * 4) * 0.2;
            return (s1 * 0.4) + (s2 * 0.35) + (s3 * 0.25) + notch;
        }
        default:
            return Math.sin(phase * Math.PI * 2);
    }
}

function drawWaveformLine(x, y, radius, color, phase, vibratoSpeed) {
    const { a, b, mix } = getWaveVisualMorph();
    const amp = 4 + vibratoSpeed;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    let t = phase * 0.08;
    for (let ox = -50; ox <= 50; ox += 2) {
        const sA = waveformSample(a, t);
        const sB = waveformSample(b, t);
        const oy = ((sA * (1 - mix)) + (sB * mix)) * amp;
        if (ox === -50) ctx.moveTo(x + ox, y + oy);
        else ctx.lineTo(x + ox, y + oy);
        t += 0.02;
    }
    ctx.stroke();
}

function drawPulseDisc(x, y, radius, color, press) {
    const pulse = 1 + Math.sin(Date.now() / 220) * 0.06;
    const base = radius * (1.25 + (press / 127) * 0.35) * pulse;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, base, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}

function drawGrainyRing(x, y, radius, color, phase) {
    const segs = 28;
    const jitter = 2 + Math.sin(phase) * 1.5;
    ctx.beginPath();
    for (let i = 0; i <= segs; i++) {
        const ang = (i / segs) * Math.PI * 2;
        const noise = Math.sin(ang * 5 + phase) * jitter;
        const r = radius * 1.1 + noise;
        const px = x + Math.cos(ang) * r;
        const py = y + Math.sin(ang) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5;
    ctx.stroke();
    ctx.globalAlpha = 1;
}

function drawHeldVoices(fadeMul, fadeDrop, height) {
    if (!state.heldVoices.length) return;
    const now = state.audio.ctx ? state.audio.ctx.currentTime : 0;
    const visual = getVisualModeFlags();
    state.heldVoices.forEach((v, i) => {
        const m = v.lastM;
        let flash = 0;
        if (v.bowFlash > 0) {
            flash = v.bowFlash;
            v.bowFlash -= 0.03; // Slower fade for smoother effect
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
        // BOW flash overrides opacity to full brightness
        if (flash > 0) sampleOpacity = Math.max(sampleOpacity, 0.2 + flash * 0.8);
        const finalAlpha = fadeMul * sampleOpacity;
        
        ctx.globalAlpha = finalAlpha;

        if (visual.sampler || visual.layer) {
            drawPulseDisc(x, y, radius, v.color, m.press);
            drawGrainyRing(x, y, radius, v.color, v.phase);
        }
        if (visual.wt || visual.layer) {
            const waveColor = flash > 0 ? '#ffffff' : v.color;
            drawWaveformLine(x, y, radius, waveColor, v.phase, 0.5);
        }

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
    const visual = getVisualModeFlags();
    state.activeTouches.forEach(t => {
        const radius = 12 + (t.lastM.press / 127) * 22;
        t.phase += 0.2 + (t.vibratoSpeed * 0.06);
        let y = t.lastM.y + ((height - t.lastM.y) * fadeDrop);
        y = getClampedVisualY(y, radius, height);
        ctx.globalAlpha = fadeMul;
        if (visual.sampler || visual.layer) {
            drawPulseDisc(t.lastM.x, y, radius, t.color, t.lastM.press);
            drawGrainyRing(t.lastM.x, y, radius, t.color, t.phase);
        }
        if (visual.wt || visual.layer) {
            drawWaveformLine(t.lastM.x, y, radius, t.color, t.phase, t.vibratoSpeed);
        }
        const label = t.label
            ? t.label
            : (t.isGrab
                ? "GRAB"
                : (t.isArpHoldGrab ? "ARP HOLD" : (t.isArp ? "ARP" : `CH${t.voices[0].chan}`)));
        drawNoteBubble(t.lastM.x, y, radius, t.color, label);
        if (t.isArp && t.arpNotes) {
            t.arpNotes.forEach(n => {
                const noteFloat = n.noteFloat ?? n.note;
                const nx = getNearestNoteX(noteFloat) ?? t.lastM.x;
                drawNoteBubble(nx, y, Math.max(8, radius * 0.7), n.color || t.color, null);
            });
        } else if (t.voices && t.voices.length > 1) {
            t.voices.forEach(v => {
                const noteFloat = Number.isFinite(v.noteFloat) ? v.noteFloat : getVoiceNoteFloat(v);
                const nx = getNearestNoteX(noteFloat) ?? t.lastM.x;
                drawNoteBubble(nx, y, Math.max(8, radius * 0.7), v.color || t.color, null);
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
        if (t.isGrab || t.isArpHoldGrab) return; 
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
    const uiH = isActive ? uiRect.height : 0;
    const perfH = perfRect.height;
    state.perfHeight = perfH;
    document.documentElement.style.setProperty('--ui-h', `${uiH}px`);
    document.documentElement.style.setProperty('--perf-h', `${perfH}px`);
}

function refreshLayout() {
    updateLayoutVars();
    resizeCanvas();
    updateToggleLabels();
    resizeMelodyRollCanvas();
    requestDraw();
}

window.onresize = refreshLayout;
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) requestDraw();
});
els.ui.addEventListener('transitionend', refreshLayout);
els.performance.addEventListener('transitionend', refreshLayout);
refreshLayout(); updateScaleModeUI(); updateScaleNotes(); syncArpFromUI(); updateHoldButtonUI(); updateArpParamsToggleLabel(); setupMIDI(); draw();

function updateToggleLabels() {
    const uiLabel = uiToggle ? uiToggle.querySelector('.btn-text') : null;
    const advLabel = els.uiAdvancedToggle?.querySelector('.btn-text');
    if (uiLabel) uiLabel.textContent = els.ui.classList.contains('active') ? 'X' : '';
    // Update perfToggle style based on compact mode
    if (perfToggle) {
        const isCompact = els.performance.classList.contains('compact');
        perfToggle.classList.toggle('active', isCompact);
        // Icona: robot (melody) se compact, play se non-compact
        const iconMain = perfToggle.querySelector('.perf-icon-main');
        const iconAlt = perfToggle.querySelector('.perf-icon-alt');
        if (iconMain && iconAlt) {
            if (isCompact) {
                iconMain.style.display = 'inline-flex';
                iconAlt.style.display = 'none';
            } else {
                iconMain.style.display = 'none';
                iconAlt.style.display = 'inline-flex';
            }
        }
    }
    if (advLabel) advLabel.textContent = els.ui.classList.contains('show-advanced') ? 'X' : 'Sampler Set';
}


