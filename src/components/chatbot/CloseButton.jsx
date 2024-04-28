import { IoCloseSharp } from "react-icons/io5";

const CloseButton = ({ onClick }) => {
    return (
        <button onClick={onClick} style={{ float: 'right' }}>
            <IoCloseSharp className="text-xl font-bold text-white" />
        </button>
    );
};

export default CloseButton
