'use client'

export const UsernameProfilePicture = ({ className, onLoad, src }) => {
    return (
        <div>
            <img
                src={src}
                alt="Profile Picture Avatar"
                height={80}
                width={80}
                className={className}
                onAbort={onLoad}
            />
        </div>
    );
}


export default UsernameProfilePicture;