

const Logo = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        fill="none"
        width="200"
        height="50"
    >
        {/* Checkmark Icon */}
        <path
            d="M10 25 L20 35 L40 15"
            stroke="#4CAF50"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        {/* Text "Task Master" */}
        <text
            x="50"
            y="32"
            fill="#4CAF50"
            fontSize="20"
            fontWeight="bold"
            fontFamily="'Arial', sans-serif"
        >
            Task Master
        </text>
    </svg>
    );
};

export default Logo;