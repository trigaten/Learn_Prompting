import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import styles from "./styles.module.css";
import Course from './course';
import SignUp from './signup';

const courses = [{
  name: 'Intro to ChatGPT',
  desc: "Learn about ChatGPT, one of the most advanced AI systems available today, and dive into the world of Generative AI.",
  special: true,
  isPro: false,
  percent: 60,
  count: 12,
  url: 'https://learn-prompting.webflow.io/course-chat-gpt-for-everyone',
  src: "https://media.discordapp.net/attachments/1174416571498770492/1175581256768045137/shorter.png?ex=656bc05c&is=65594b5c&hm=25bcce0549bba96c056ad956bbbe4809bf6719269a88af6a5f6fc07e664690ef&=&width=811&height=521",
  srcset: "https://assets-global.website-files.com/653e598cdeea6f44f70baa31/654ddcffb248d1b4c1126638_course-p-500.png 500w, https://assets-global.website-files.com/653e598cdeea6f44f70baa31/654ddcffb248d1b4c1126638_course-p-800.png 800w, https://assets-global.website-files.com/653e598cdeea6f44f70baa31/654ddcffb248d1b4c1126638_course-p-1080.png 1080w, https://assets-global.website-files.com/653e598cdeea6f44f70baa31/654ddcffb248d1b4c1126638_course-p-1600.png 1600w, https://assets-global.website-files.com/653e598cdeea6f44f70baa31/654ddcffb248d1b4c1126638_course-p-2000.png 2000w, https://assets-global.website-files.com/653e598cdeea6f44f70baa31/654ddcffb248d1b4c1126638_course.png 2562w",
},
{
  name: 'Generative AI for artists',
  desc: 'Learn about ChatGPT, one of the most advanced AI systems available today, and dive into the world of Generative AI.',
  isPro: true,
  percent: 100,
  count: 12,
  url: 'https://learn-prompting.webflow.io/course-chat-gpt-for-everyone',
  src: "https://assets-global.website-files.com/653e598cdeea6f44f70baa31/6548dfdd8622f3f86cddbd54_ab.png",
  srcset: "https://assets-global.website-files.com/653e598cdeea6f44f70baa31/6548dfdd8622f3f86cddbd54_ab-p-500.png 500w, https://assets-global.website-files.com/653e598cdeea6f44f70baa31/6548dfdd8622f3f86cddbd54_ab.png 788w",
},
]



function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm"
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}

function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

      <div className={clsx("col", styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}

const securityWords = ['hack', 'security', 'inject', 'safety']

export default function DocItemFooter() {
  const { metadata, ...rest } = useDoc();
  console.log( metadata.description, rest.toc.map(t => t.value))
  const isSecurity = [...rest.toc.map(t => t?.value || ''), metadata.description].some(t => securityWords.some(w => t.toLowerCase().includes(w)))
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >

      <h2 style={{marginTop: 60, marginBottom: 32, fontSize: 32}}>
       Want to learn more?</h2>
      <div className={styles.courses}>
        {courses.filter(c => c).slice(0, 2).map(c => <Course key={c.name} src={c.src} srcset={c.srcset} {...c}/>)}
      </div>

      <br />
      <SignUp/>
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}

    </footer>
  );
}
