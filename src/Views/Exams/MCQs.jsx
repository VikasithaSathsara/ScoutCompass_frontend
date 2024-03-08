import "./MCQs.css";

function MCQs() {
    return (
        <div>
            <h1>Ordered List Arrow Cards</h1>
            <ol class="olcards">
                <a href="#">
                    <li style={{ "--cardColor": "#fc374e" }}>
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 1</div>
                        </div>
                    </li>
                </a>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <div class="content">
                        <div class="mcq-title">Model MCQ Paper 2</div>
                    </div>
                </li>
                <li style={{ "--cardColor": "#fc374e" }}>
                    <div class="content">
                        <div class="mcq-title">Model MCQ Paper 3</div>
                    </div>
                </li>
                <li style={{ "--cardColor": "#fc374e" }}>
                    <div class="content">
                        <div class="mcq-title">Model MCQ Paper 4</div>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default MCQs;
