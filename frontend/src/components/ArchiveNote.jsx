import React, { Fragment} from 'react'

export function ArchiveNote({noteID,archiveNote,archivedView}) {

    const archiveHandler = () => {
        archiveNote((prevNotes) => {
            const newList = [...prevNotes];
            const note = newList.find((note) => note.id === noteID)
            note.archived = !note.archived;
            return newList;
          });
    }

  return (
    <Fragment>
       <button onClick={archiveHandler}><img alt='archiveIcon' src={archivedView? process.env.PUBLIC_URL+"unarchive.png":process.env.PUBLIC_URL+"archive.png"} width="25" height={25} /></button> 
    </Fragment>
  )
}
