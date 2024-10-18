import '/src/css/skills.css';

function Skills() {
    return (
        <>
            <div className="skillsDiv">
                <p className='skillsHeader'>How I know my language?</p>
                <div className="skillsContainer">
                    <div className="skill">
                        <span className='skillTitle'>HTML</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                                style={{
                                    'animation': 'html 1.5s ease-in forwards 1',
                                    'width': 'calc(600px * 0.033)'
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>CSS</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'css 1.5s ease-in forwards 1',
                                'width': 'calc(600px * 0.033)'}}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>Javascript</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'js 1.5s ease-in forwards 1',
                                'width': 'calc(600px * 0.033)'}}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>React</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'react 1.5s ease-in forwards 1',
                                'width': 'calc(600px * 0.033)'}}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>SQL</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'sql 1.5s ease-in forwards 1',
                                'width': 'calc(600px * 0.033)'}}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>PHP</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'php 1.5s ease-in forwards 1',
                                'width': 'calc(600px * .033)'}}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>Python</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'python 1.5s ease-in forwards 1',
                                'width': 'calc(600px * 0.033)'}}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>C#</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'csharp 1.5s ease-in forwards 1',
                                'width': 'calc(600px * 0.033)'}}
                            ></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span className='skillTitle'>Java</span>
                        <div className="measureBase">
                            <div className="measureSkill"
                            style={{
                                'animation': 'java 1.5s ease-in forwards 1',
                                'width': 'calc(600px * 0.033)'}}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills