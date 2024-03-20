import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPages = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, dignissimos eum. Omnis eos eaque nisi sint perferendis nemo illo est asperiores odit, expedita, et placeat ad. Exercitationem officia repudiandae sunt.</Typography>    */}
        {/* <NothingSelectedView /> */}
        <NoteView />

      </JournalLayout>

      <IconButton 
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}} />
      </IconButton>

    </>
  )
}
