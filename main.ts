import { Plugin } from 'obsidian';
import Case from 'src/transform';
import Editor from 'src/editor';

export default class MyPlugin extends Plugin {
	case = new Case();
	editor = new Editor(this.app);

	async onload() {
		console.log('loading plugin: text-transformation');

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
		return this.editor.replaceSelectedText(checking, this.case.lowerCase);
	}

	private toUppercase(checking: boolean) {
		return this.editor.replaceSelectedText(checking, this.case.upperCase);
	}

	private toTitleCase(checking: boolean){
		return this.editor.replaceSelectedText(checking, this.case.titleCase);
	}

	private toStartCase(checking: boolean) {
		return this.editor.replaceSelectedText(checking, this.case.capitalize);
	}
}
