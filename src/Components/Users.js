import React from 'react';
import User from './User';
function Users() {
    return (
        <div className="right">
                <User
                    src="https://icdn4.digitaltrends.com/image/digitaltrends_es/img_0327-510x0.jpg"
                    alt="prince"
                    name="Random Person"
                />
            <div className="users__block">
                <User
                src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                alt="prince"
                name="Prince_Harry"
                min/>
                <User
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Prince_Harry"
                    min/>
                <User
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Prince_Harry"
                    min/>
                <User
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Prince_Harry"
                    min/>
            </div>
        </div>
    );
}

export default Users;