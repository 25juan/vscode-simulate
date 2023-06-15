import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
export const useEditorConfigStore = defineStore<
  "editorConfigStore",
  {
    editorRef: monacoEditor.editor.IStandaloneCodeEditor | null;
    editorContent: string;
    theme: "light" | string;
    language: string;
    monacoEditorOptions: monacoEditor.editor.IStandaloneEditorConstructionOptions;
  },
  {},
  {
    formatCode: () => void;
    changeFontSize: (fontSize?: number) => void;
    setEditorRef: (
      editor: monacoEditor.editor.IStandaloneCodeEditor,
      monaco: typeof monacoEditor
    ) => void;
  }
>("editorConfigStore", {
  state() {
    return {
      theme: "vs-dark",
      language: "typescript",
      monacoEditorOptions: {
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
        tabSize: 2,
        fontSize: 18,
        fontFamily:
          "IntelOne Mono,JetBrains Mono,'Fira Code',Menlo,Monaco, 'Courier New', monospace",
        minimap: {
          enabled: false,
        },
      },
      editorRef: null,
      editorContent: `const obj = {
        a: 1
      }

      async function  sayHello() {
        return Promise.resolve(1)
      }
      (async () => {
        const result = await sayHello()
        console.log(result)
      })()
      `,
    };
  },
  actions: {
    formatCode() {
      this.editorRef?.getAction("editor.action.formatDocument")?.run();
    },
    changeFontSize(fontSize) {
      if (fontSize) {
        this.monacoEditorOptions.fontSize = fontSize;
      } else {
        this.monacoEditorOptions.fontSize =
          (this.monacoEditorOptions.fontSize || 16) + 2;
      }
    },
    setEditorRef(editorRef: monacoEditor.editor.IStandaloneCodeEditor) {
      this.editorRef = editorRef;
      setTimeout(this.formatCode, 500);
    },
  },
});
