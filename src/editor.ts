import { MarkdownView, App } from 'obsidian';


export default class Editor {
    app: App;
    
    constructor(app: App) {
        this.app = app;
    }

    public get(): CodeMirror.Editor {

        const { workspace } = this.app;
        const activeView = workspace.getActiveViewOfType(MarkdownView);

        if (activeView) {  // The active view might not be a markdown view
            const editor = activeView.sourceMode.cmEditor;
            return editor;
        }
    }

    public replaceSelectedText(checking: boolean, transformation: (text: string) => string): boolean {
        if (checking) {
            return this.isMarkdownViewActive();
        }
        else {
            let editor = this.get();
            if (!editor) return false;

            let text = this.getSelectedText(editor);
            let ntext = transformation(text);

            editor.replaceSelection(ntext);
        }

        return true;
    }

    private getSelectedText(editor: CodeMirror.Editor) : string {
        return editor.getSelection();
	}

    private getActiveMarkdownView() : MarkdownView {
        return this.app.workspace.getActiveViewOfType(MarkdownView);
    }

    private isMarkdownViewActive() : boolean {
        return !!this.getActiveMarkdownView();
    }
}