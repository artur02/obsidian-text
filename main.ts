import { Plugin } from 'obsidian';
import voca from 'voca';

export default class MyPlugin extends Plugin {


	async onload() {
		console.log('loading plugin: text-transformation-plugin');

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
			name: 'To Title case',
			checkCallback: this.toTitleCase.bind(this)
		});

		this.addCommand({
			id: 'to-startcase',
			name: 'To Start case',
			checkCallback: this.toStartCase.bind(this)
		});

		//this.addSettingTab(new SampleSettingTab(this.app, this));
	}

	private toLowecase(checking: boolean) {
		let editor = this.getEditor();
		if (!checking) {
			let text = this.getSelectedText(editor);
			editor.replaceSelection(voca.loweCase(text));
		}
		console.log('TO LOWERCASE');
		return true;
	}

	private toUppercase(checking: boolean) {
		let editor = this.getEditor();
		if (!checking) {
			let text = this.getSelectedText(editor);
			editor.replaceSelection(voca.upperCase(text));
		}
		console.log('TO UPPERCASE');
		return true;
	}

	private toTitleCase(checking: boolean){
		let editor = this.getEditor();
		let text = this.getSelectedText(editor);

		if (!checking) {
			editor.replaceSelection(voca.titleCase(text, ['-']));
		}

		return true;
	}

	private toStartCase(checking: boolean) {
		let editor = this.getEditor();
		let text = this.getSelectedText(editor);

		if (!checking) {
			editor.replaceSelection(voca.capitalize(text, true));	
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
