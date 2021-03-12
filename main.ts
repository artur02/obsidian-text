import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {

	async onload() {
		console.log('loading plugin');

		this.addCommand({
			id: 'to-lowercase',
			name: 'To Lowercase',
			checkCallback: this.toLowecase.bind(this)
		});

		this.addCommand({
			id: 'to-uppercase',
			name: 'To Uppercase',
			checkCallback: this.toUppercase.bind(this)
		});

		this.addCommand({
			id: 'to-titlecase',
			name: 'To Titlecase',
			checkCallback: this.toTitleCase.bind(this)
		});

		//this.addSettingTab(new SampleSettingTab(this.app, this));
	}

	private toLowecase(checking: boolean) {
		let editor = this.getEditor();
		if (!checking) {
			let text = this.getSelectedText(editor);
			editor.replaceSelection(text.toLowerCase());
		}
		console.log('TO LOWERCASE');
		return true;
	}

	private toUppercase(checking: boolean) {
		let editor = this.getEditor();
		if (!checking) {
			let text = this.getSelectedText(editor);
			editor.replaceSelection(text.toUpperCase());
		}
		console.log('TO UPPERCASE');
		return true;
	}

	private toTitleCase(checking: boolean){
		let editor = this.getEditor();
		let text = this.getSelectedText(editor);

		if (!checking) {
		let lowercase = text.toLowerCase();
		let titleCase = lowercase.substring(0, 1).toUpperCase() + lowercase.substring(1);

		editor.replaceSelection(titleCase);
		}

		return true;
	}	
	
	private getEditor(): CodeMirror.Editor {
		let activeLeaf: any = this.app.workspace.activeLeaf;
		return activeLeaf.view.sourceMode.cmEditor;
	  }

	private getSelectedText(editor : CodeMirror.Editor) : string {
		return editor.getSelection();
	}
}
