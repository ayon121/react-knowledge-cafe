import PropTypes from 'prop-types';
const BookMark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h3 className='bg-slate-200 m-4 p-4 text-3xl rounded-xl border-4'>{title}</h3>
        </div>
    );
};

BookMark.propTypes = {
    bookmark :  PropTypes.object.isRequired
}
export default BookMark;