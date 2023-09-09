import { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = (props) => {
    const divRef = useRef()
    const editorRef = useRef(null);

    useEffect(() => {
        editorRef.current = new Editor({
            el: divRef.current,
            hideModeSwitch: true,
        });

        editorRef.current.addHook('change', () => {
            const content = editorRef.current.getMarkdown();
            props.onContentChange(content);
        });
    }, [props])

    useEffect(() => () => {
            if (editorRef.current) {
                editorRef.current.removeHook('change');
                editorRef.current = null
            }
        }, [])

    return <div ref={divRef}></div>

}

export default MarkdownEditor;