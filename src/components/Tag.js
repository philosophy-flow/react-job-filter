import '../assets/stylesheets/Tag.css';

function Tag({content, color}) {
  return (
    <div style={{backgroundColor: `${color}`}} className="Tag">
      {content}
    </div>
  );
}


export default Tag;
