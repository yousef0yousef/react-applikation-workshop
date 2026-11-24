
function ReviewList({ rating, comment, date, name }) {
  return (
    <>
        <h3>Namn: {name} | betyg: {rating}</h3>
        <span>{date}</span>
        <p>{comment}</p>
    </>
  );
}

export default ReviewList;
