// Sol AI section: what the ChatGPT integration does today, and what leaves the computer.
export function FeaturesSolAi() {
  return (
    <div id="sol-ai" className="scroll-mt-[100px]">
      <h2 className="dia-h2">Sol AI with ChatGPT</h2>
      <p>
        Sol AI is an optional assistant built into the browser. It runs on your own ChatGPT Plus or
        Pro subscription through Sign in with ChatGPT: no API key, no extra bill, and nothing
        happens until you connect your account in Settings &gt; Sol.
      </p>
      <p>
        It does not just receive a copied block of text. When you ask about a page, Sol AI works on
        the live tab with tools that Sol runs locally, so it can find the answer the way you would.
      </p>

      <p>
        <strong className="font-bold text-black">Ask the site, not a snippet</strong>
      </p>
      <ul>
        <li>
          Reads the open page as structure: headings, main text, links, buttons and fields
        </li>
        <li>
          Searches the page, follows links to other documentation pages and highlights the passage
          it used, while showing each step as it happens
        </li>
        <li>
          Clicking, typing into a field or opening an address always waits for your approval, and
          password, card and one-time-code fields are never read or filled
        </li>
      </ul>

      <p>
        <strong className="font-bold text-black">One-click actions</strong>
      </p>
      <ul>
        <li>
          Summarize the page from the address bar, with the answer streaming in right away
        </li>
        <li>
          Right-click a selection to explain or translate it (six languages), or a text field to
          fix, rephrase or translate what you wrote, then replace it in one click
        </li>
        <li>Copy any answer or turn it into a note</li>
      </ul>

      <p>
        <strong className="font-bold text-black">Chat panel, notes and topics</strong>
      </p>
      <ul>
        <li>
          A chat panel on the right for quick questions, which can look at the open tab when the
          question is about it
        </li>
        <li>
          Notes on request: search your notes, summarize them, or create a new note from an
          instruction such as &ldquo;key points of this page&rdquo;
        </li>
        <li>
          Optional daily sorting of your bookmarks and history into topics on the start page, off by
          default
        </li>
      </ul>

      <p>
        <strong className="font-bold text-black">What leaves your computer</strong>
        <br />
        Only what you act on goes to OpenAI: your question, the selected text, and the page content
        Sol AI reads to answer it. Topic sorting sends page titles and domains, never full
        addresses, and only if you turn it on. Sign-in tokens stay encrypted on your PC, and Sol AI
        is unavailable in private windows.
      </p>
    </div>
  );
}
