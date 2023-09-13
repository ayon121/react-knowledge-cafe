import PropTypes from 'prop-types';
import BookMark from '../bookmark/BookMark';
const Bookmarks = ({bookmarks , readingtime}) => {
    return (
        <div className="mx-4 ">
            <h1  className="text-4xl my-3">Book Marks: {bookmarks.length}</h1>
            <h3 className="text-2xl my-3">Reading Time: {readingtime}</h3>

            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime : PropTypes.number
}

export default Bookmarks;