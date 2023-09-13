import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog , handleAddtoBookmark ,  handleMarkasread }) => {
    const {title , cover , reading_time , author_image , author , posted_dates , hashtags}  = blog;

    const read_time = parseFloat(reading_time)

    return (
        <div className='mb-9'>
            <img className='rounded-lg' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex  justify-between'>
                <div className='flex ' >
                    <img className='w-16' src={author_image} alt="" />
                    <div className='m-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_dates}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min time</span>
                    <button onClick={()=>handleAddtoBookmark(blog)} className='m-4 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            {
                hashtags.map(hash => <span key={hash}>{hash} </span>)
            }
            <br />
            <button onClick={()=>handleMarkasread(read_time)} className='my-4 py-4 text-purple-400 font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddtoBookmark : PropTypes.func.isRequired,
    handleMarkasread : PropTypes.func.isRequired
}

export default Blog;
