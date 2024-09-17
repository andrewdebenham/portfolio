import { useRef, useState, useEffect } from "react";
import styles from './SnakeStyles.module.css';

const GamePieces = ({score, setScore, onGameOver}) => {
    const canvasRef = useRef();
    const SNAKE_SPEED = 10;
    const [food, setFood] = useState({ x: 180, y: 100 });
    const [snake, setSnake] = useState([
        { x: 100, y: 50 },
        { x: 95, y: 50 }
    ]);
    const [direction, setDirection] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const drawSnake = () => {
            snake.forEach((snakePart) => {
                ctx.beginPath();
                ctx.rect(snakePart.x, snakePart.y, 14, 14);
                ctx.fillStyle = '#90EE90';
                ctx.fill();
                ctx.closePath();
            })
        }

        const drawFood = () => {
            ctx.beginPath();
            ctx.rect(food.x, food.y, 14, 14);
            ctx.fillStyle = '#FF0000';
            ctx.fill();
            ctx.closePath();
        }

        const moveSnake = () => {
            if (direction) {
                setSnake((prevSnake) => {
                    const newSnake = [...prevSnake];
                    const snakeHead = { x: newSnake[0].x, y: newSnake[0].y };

                    for (let i = newSnake.length - 1; i > 0; i--) {
                        newSnake[i].x = newSnake[i - 1].x;
                        newSnake[i].y = newSnake[i - 1].y;
                    }

                    switch (direction) {
                        case "right":
                            snakeHead.x += SNAKE_SPEED;
                            break;
                        case "left":
                            snakeHead.x -= SNAKE_SPEED;
                            break;
                        case "up":
                            snakeHead.y -= SNAKE_SPEED;
                            break;
                        case "down":
                            snakeHead.y += SNAKE_SPEED;
                            break;
                        default:
                            break;
                    }

                    newSnake[0] = snakeHead;
                    handleFoodCollision(newSnake);
                    handleWallCollision(snakeHead);
                    handleBodyCollision(newSnake);

                    return newSnake;
                });
            }
        }

        const handleBodyCollision = (newSnake) => {
            const snakeHead = newSnake[0];

            for (let i = 1; i < newSnake.length; i++) {
                if (snakeHead.x === newSnake[i].x && snakeHead.y === newSnake[i].y) {
                    onGameOver("self");
                }
            }
        }

        const handleWallCollision = (snakeHead) => {
            if (snakeHead.x + SNAKE_SPEED > canvas.width || snakeHead.x + SNAKE_SPEED < 0) {
                onGameOver("wall");
            }
            if (snakeHead.y + SNAKE_SPEED > canvas.height || snakeHead.y < 0) {
                onGameOver("wall");
            }
        }

        const handleFoodCollision = (newSnake) => {
            const snakeHead = newSnake[0];

            if (snakeHead.x === food.x && snakeHead.y === food.y) {
                setScore(score++);

                setFood({
                    x: Math.floor((Math.random() * canvas.width) / SNAKE_SPEED) * SNAKE_SPEED,
                    y: Math.floor((Math.random() * canvas.height) / SNAKE_SPEED) * SNAKE_SPEED,
                });

                newSnake.push({
                    x: newSnake[newSnake.length - 1].x,
                    y: newSnake[newSnake.length - 1].y,
                })
            }
        }

        const handleKeyPress = (e) => {
            switch(e.key) {
                case "ArrowRight":
                    setDirection("right");
                    break;
                case "ArrowLeft":
                    setDirection("left");
                    break;
                case "ArrowUp":
                    setDirection("up");
                    break;
                case "ArrowDown":
                    setDirection("down");
                    break;
                default:
                    break;
            }
        }

        window.addEventListener("keydown", handleKeyPress);

        const interval = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawSnake();
            drawFood();
            moveSnake();
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, [snake, direction])

    return (
        <div>
            <canvas className={styles.gameCanvas} ref={canvasRef} width={450} height={420} />
        </div>
    )
}

export default GamePieces;