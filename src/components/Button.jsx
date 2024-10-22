import { cva } from "class-variance-authority"

const buttonStyles = cva(["bg-secondary hover:bg-secondary-hover"])

export function Button() {
    return <button className={buttonStyles()} />
}