export default function BookingModal({visible, modalClose}) {
    if (!visible) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="relative bg-white p-4 w-3/4">
          <button style={{top: '10px', right : '10px'}} className="absolute" onClick={modalClose}>&times;</button>
          <form>

          </form>
        </div>
      </div>
    );
  }
  