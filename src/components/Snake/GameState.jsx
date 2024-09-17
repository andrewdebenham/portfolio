import { useState, useEffect } from 'react';
import GamePieces from './GamePieces';
import styles from './SnakeStyles.module.css';

const GameState = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore')) || 0);
    const [gameOver, setGameOver] = useState(false);
    const [collision, setCollisionType] = useState("");

    const handleGameOver = (type) => {
        setGameOver(true);

        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("highScore", score.toString());
        }

        setCollisionType(type);
    }

    const handleResetGame = () => {
        setScore(0);
        setGameOver(false);
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (gameOver && e.key === "Enter") {
                handleResetGame();
            }
        }

        window.addEventListener("keydown", handleKeyPress);
    }, [gameOver])

    return (
        <div className={styles.gameState}>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
            {
                gameOver && (
                    <div>
                        <p>Game Over! {collision === "wall" ? "You hit the wall" : "You ate yourself"}!</p>
                        <p>Press enter to reset the game</p>
                    </div>
                )
            }{
                !gameOver && (
                    <GamePieces
                        score={score}
                        setScore={setScore}
                        onGameOver={(type) => handleGameOver(type)}
                    />
                )
            }
        </div>
    )
}

export default GameState;