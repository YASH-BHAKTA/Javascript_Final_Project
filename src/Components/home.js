import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Hello, Welcome</h1>
            <h3>
                I have used two Api Here
            </h3>
            <h4>1). Add Student Api (POST)</h4>
            <p>This Api is mainly used for making POST Request <br />
                And this api send two string data such as "fname" and "lname"<br />
                To the server.</p>
            <p>
                How my Api take data to post in database?<br />
                It uses the json text format.<br />
                
            </p>
            <p>Here i have used mongodb as a server.<br />
                Express as a API maker. <br />
                Node as backend.<br />
                And React as a Frontend.</p>

            <h4>2). Display Student List (GET)</h4>
            <p>This Api is mainly used for making GET Request <br />
                And this api get whole array of data from database.
            </p>
            <p>Here i have used mongodb as a server.<br />
                Express as a API maker. <br />
                Node as backend.<br />
                And React as a Frontend.</p>
        </div>
    )
}
export default Home;