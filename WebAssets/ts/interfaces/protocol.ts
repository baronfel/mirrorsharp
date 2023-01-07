export type Message<TExtensionServerOptions, TSlowUpdateExtensionData> = ChangesMessage
                    | CompletionsMessage
                    | CompletionInfoMessage
                    | SignaturesMessage
                    | SignaturesEmptyMessage
                    | InfotipMessage
                    | InfotipEmptyMessage
                    | SlowUpdateMessage<TSlowUpdateExtensionData>
                    | OptionsEchoMessage<TExtensionServerOptions>
                    | SelfDebugMessage
                    | ErrorMessage
                    | UnknownMessage;

// ts-unused-exports:disable-next-line
export interface ChangesMessage {
    readonly type: 'changes';
    readonly changes: ReadonlyArray<ChangeData>;
    readonly reason: 'completion'|'fix';
}

export interface ChangeData {
    readonly start: number;
    readonly length: number;
    readonly text: string;
}

export interface CompletionsMessage {
    readonly type: 'completions';
    readonly span: SpanData;
    readonly completions: ReadonlyArray<CompletionItemData>;
    readonly commitChars: string;
    readonly suggestion?: CompletionSuggestionData;
}

// ts-unused-exports:disable-next-line
export interface CompletionSuggestionData {
    readonly displayText: string;
}

// ts-unused-exports:disable-next-line
export interface CompletionItemData {
    readonly displayText: string;
    readonly kinds: ReadonlyArray<string>;
    readonly filterText?: string;
    readonly span?: SpanData;
    readonly priority?: number;
}

export interface CompletionInfoMessage {
    readonly type: 'completionInfo';
    readonly index: number;
    readonly parts: ReadonlyArray<PartData>;
}

// Temporary, until restored support for signatures
// ts-unused-exports:disable-next-line
export interface SignaturesMessage {
    readonly type: 'signatures';
    readonly span: SpanData;
    readonly signatures: ReadonlyArray<SignatureData>;
}

// Temporary, until restored support for signatures
// ts-unused-exports:disable-next-line
export interface SignaturesEmptyMessage {
    readonly type: 'signatures';
    readonly span?: undefined;
    readonly signatures?: undefined;
}

// Temporary, until restored support for signatures
// ts-unused-exports:disable-next-line
export interface SignatureData {
    readonly parts: ReadonlyArray<SignaturePartData>;
    readonly selected?: boolean;
    readonly info?: SignatureInfoData;
}

// Temporary, until restored support for signatures
// ts-unused-exports:disable-next-line
export interface SignatureInfoData {
    readonly parts: ReadonlyArray<PartData>;
    // normally represents the selected parameter
    readonly parameter?: SignatureInfoParameterData;
}

// Temporary, until restored support for signatures
// ts-unused-exports:disable-next-line
export interface SignatureInfoParameterData {
    readonly name: string;
    readonly parts: ReadonlyArray<PartData>;
}

// Temporary, until restored support for signatures
// ts-unused-exports:disable-next-line
export interface SignaturePartData extends PartData {
    readonly selected?: boolean;
}

export interface InfotipMessage {
    readonly type: 'infotip';
    readonly span: SpanData;
    readonly kinds: ReadonlyArray<string>;
    readonly sections: ReadonlyArray<InfotipSectionData>;
}

// Temporary, investigate
// ts-unused-exports:disable-next-line
export interface InfotipEmptyMessage {
    readonly type: 'infotip';
    readonly sections?: undefined;
}

// ts-unused-exports:disable-next-line
export interface InfotipSectionData {
    readonly kind: string;
    readonly parts: ReadonlyArray<PartData>;
}

export interface SlowUpdateMessage<TExtensionData> {
    readonly type: 'slowUpdate';
    readonly diagnostics: ReadonlyArray<DiagnosticData>;
    readonly x: TExtensionData;
}

export interface DiagnosticData {
    readonly id: string;
    readonly span: SpanData;
    readonly severity: DiagnosticSeverity;
    readonly message: string;
    readonly tags: ReadonlyArray<string>;
    readonly actions?: ReadonlyArray<DiagnosticActionData>;
}

export type DiagnosticSeverity = 'hidden' | 'warning' | 'error' | 'info';

export interface DiagnosticActionData {
    readonly id: number;
    readonly title: string;
}

// ts-unused-exports:disable-next-line
export interface OptionsEchoMessage<TExtensionServerOptions> {
    readonly type: 'optionsEcho';
    readonly options: ServerOptions & TExtensionServerOptions;
}

export const LANGUAGE_CSHARP = 'C#';
export const LANGUAGE_VB = 'Visual Basic';
export const LANGUAGE_FSHARP = 'F#';
export const LANGUAGE_PHP = 'PHP';
export const LANGUAGE_IL = 'IL';

export const LANGUAGE_DEFAULT = LANGUAGE_CSHARP;

export type Language = typeof LANGUAGE_CSHARP
    | typeof LANGUAGE_VB
    | typeof LANGUAGE_FSHARP
    | typeof LANGUAGE_PHP
    | typeof LANGUAGE_IL;

export interface ServerOptions {
    language?: Language;
}

// Temporary, until self-debug is restored or removed
// ts-unused-exports:disable-next-line
export interface SelfDebugMessage {
    readonly type: 'self:debug';
    readonly log: ReadonlyArray<SelfDebugLogEntryData>;
}

// Temporary, until self-debug is restored or removed
// ts-unused-exports:disable-next-line
export interface SelfDebugLogEntryData {
    readonly time: Date;
    readonly event: string;
    readonly message: string;
    readonly text: string;
    readonly cursor: number;
}

// Temporary, investigate
// ts-unused-exports:disable-next-line
export interface ErrorMessage {
    readonly type: 'error';
    readonly message: string;
}

// ts-unused-exports:disable-next-line
export interface UnknownMessage {
    type: '_';
}

export interface PartData {
    readonly kind: string;
    readonly text: string;
}

// ts-unused-exports:disable-next-line
export interface SpanData {
    readonly start: number;
    readonly length: number;
}