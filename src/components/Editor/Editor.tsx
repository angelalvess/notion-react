import {
  EditorContent,
  useEditor,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { initialContent } from './initialContent';
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from 'react-icons/rx';
import { BubbleButton } from './BubbleButton';

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert"
        editor={editor}
      />

      {editor && (
        <FloatingMenu
          className="bg-zinc-700 shadow-xl gap-1 border border-zinc-600 shadow-black/20 rounded-lg
           overflow-hidden flex flex-col py-2 px-1 "
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;

            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === '/';
          }}
        >
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 border border-zinc-600 rounded"
            />

            <div className=" flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text.
              </span>
            </div>
          </button>

          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading"
              className="w-12 border border-zinc-600 rounded"
            />

            <div className=" flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">
                Big section heading.
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg
           overflow-hidden flex divide-x divide-x-zinc-600 "
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className=" w-4 h-4" />
          </BubbleButton>

          <BubbleButton>
            Comment
            <RxChatBubble className=" w-4 h-4" />
          </BubbleButton>

          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className=" w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className=" w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough className=" w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode className=" w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
};

export default Editor;
