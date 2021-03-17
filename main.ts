import { Plugin } from 'obsidian';
//let voca = require('voca');
import Case from 'src/transform'

export default class MyPlugin extends Plugin {
	case = new Case();

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
		if (!checking) {
			let editor = this.getEditor();

			let text = this.getSelectedText(editor);
			let ntext = this.case.lowerCase(text);
			
			editor.replaceSelection(ntext);
		}
		console.log('TO LOWERCASE');
		return true;
	}

	private toUppercase(checking: boolean) {
		if (!checking) {
			let editor = this.getEditor();

			let text = this.getSelectedText(editor);
			let ntext = this.case.upperCase(text);
			
			editor.replaceSelection(ntext);
		}
		console.log('TO UPPERCASE');
		return true;
	}

	private toTitleCase(checking: boolean){
		if (!checking) {
			let editor = this.getEditor();
			
			let text = this.getSelectedText(editor);			
			let ntext = this.case.titleCase(text);
			
			editor.replaceSelection(ntext);
		}

		return true;
	}

	private toStartCase(checking: boolean) {
		if (!checking) {
			let editor = this.getEditor();
			
			let text = this.getSelectedText(editor);
			let ntext = this.case.capitalize(text);
			
			editor.replaceSelection(ntext);	
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
