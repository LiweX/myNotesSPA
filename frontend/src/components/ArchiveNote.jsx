import React, { Fragment , useState} from 'react'

export function ArchiveNote({noteID,archiveNote}) {

    const [archived, setArchived] = useState(false);
    const archiveHandler = () => {
        archiveNote((prevNotes) => {
            const newList = [...prevNotes];
            const note = newList.find((note) => note.id === noteID)
            note.archived = !note.archived;
            setArchived(!archived);
            return newList;
          });
    }

  return (
    <Fragment>
       <button onClick={archiveHandler}><img alt='archiveIcon' src={archived? process.env.PUBLIC_URL+"unarchive.png":process.env.PUBLIC_URL+"archive.png"} width="25" height={25} /></button> 
    </Fragment>
  )
}
