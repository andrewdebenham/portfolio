import styles from './SnakeStyles.module.css';

const Modal = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div>
            <div>
                <button onClick={onClose} className={styles.closeButton}>X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;