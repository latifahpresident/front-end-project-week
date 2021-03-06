import React from 'react';
import Markdown from 'react-markdown';
import TopNav from './TopNav';
import MobileNav from './MobileNav';

import { 
    NotesView, 
    NotesHeader, 
    NotesWrapper, 
    NotesContent, 
    Notes, 
    NotesTitle, 
    NotesBody 
} from '../style'

class NotesList extends React.Component  {
   
    truncate = (string) => {
        if (string.length > 140)
           return string.substring(0, 140)+'...';
        else
           return string;
     };

    render (){
        if(this.props.notes.length === 0 ) {
            return (<div>Loading</div>)
        } else {

        return(
            <NotesView>
                <MobileNav/>
                <TopNav
                    filteredSearch={this.props.filteredSearch}
                    handleSearchInput={this.props.handleSearchInput}
                    sortTitle={this.props.sortTitle}
                    sortRecent={this.props.sortRecent}
                />
            
                <NotesHeader>Your Notes:</NotesHeader>
                <NotesWrapper> 
                    {this.props.notes.map(note => {
                        return (
                            
                        <NotesContent key={note._id}>    
                            <Notes key={note._id} onClick={ () => 
                                this.props.history.push(`/note/${note._id}`)}
                            >
                                <NotesTitle>{note.title}</NotesTitle>
                                <NotesBody>
                                <Markdown source={this.truncate(note.textBody)}/> 
                                </NotesBody>
                            </Notes>
                        </NotesContent>
                        );
                    })}
                </NotesWrapper>
            </NotesView>
            );
            }
        }
};

export default NotesList