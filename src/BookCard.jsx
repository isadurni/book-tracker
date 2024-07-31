import React from 'react';

const BookCard = ({book, onClick}) => {
    return (
        <div className='book' onClick={onClick}>
            <div>
                <p>{}</p>
            </div>
            <div>
                <img src={"https://books.google.com/books/publisher/content?id=r_9yEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE715vRvDKfGSd0MP0bayknhAEaibtBs6CTn-uSUxqDwBzwEtwcNEGPO6kRoencRdm2iJBJjyVyY5il7CRRLSaoWZs2tjiN0llkyORebuXw8UhLIZrK8indrkwFli0dyyFg9AXqYG"} alt={''}/>
            </div>
            <div>
                <span>{'genre'}</span>
                <h3>{'title'}</h3>
            </div>
        </div>
    );
}

export default BookCard;