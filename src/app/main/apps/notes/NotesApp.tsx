import { lighten, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FusePageCarded from '@fuse/core/FusePageCarded';
import NoteDialog from './components/dialogs/note/NoteDialog';
import NewNote from './NewNote';
import NoteList from './NoteList';
import NotesHeader from './NotesHeader';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCards } from './store/thunks';

const Root = styled(FusePageCarded)(() => ({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-sidebar': {},
  '& .FusePageCarded-leftSidebar': {},
}));

const CardNoteApp: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <>
      <Root
        header={<NotesHeader />}
        content={
          <div className="flex flex-col w-full items-center p-24">
            <Box
              className="w-full rounded-16 border p-12 flex flex-col items-center"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              <NewNote />
              <NoteList />
            </Box>
            <NoteDialog />
          </div>
        }
        leftSidebarContent={<>空着的侧边栏</>}
      />
    </>
  );
}

export default withReducer('notesApp', reducer)(CardNoteApp);
