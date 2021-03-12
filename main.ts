import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		console.log('loading plugin');

		await this.loadSettings();

		this.addCommand({
			id: 'lowercase',
			name: 'To Lowercase',
			checkCallback: (checking: boolean) => {
				let editor = this.getEditor();
				if(!checking) {
					editor.replaceSelection(this.getSelectedText(editor).toLowerCase());
				}
				console.log('TO LOWERCASE');
				return true;
			}
		});

		//this.addSettingTab(new SampleSettingTab(this.app, this));
	}

	onunload() {
		console.log('unloading plugin');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	
	
	
	private getEditor(): CodeMirror.Editor {
		let activeLeaf: any = this.app.workspace.activeLeaf;
		return activeLeaf.view.sourceMode.cmEditor;
	  }

	private getSelectedText(editor : CodeMirror.Editor) : string {
		return editor.getSelection();
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for my awesome plugin.'});

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue('')
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
