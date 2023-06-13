/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Essentials,
	Paragraph,
	SourceEditing
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'sourceEditing',
			'undo',
			'redo'
		]
	},
	language: 'en'
};

export default Editor;
