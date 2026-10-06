/* =================================================
   AN TÂM PSYCHOLOGY CLINIC
   Interactive functions
================================================= */


/* ================= PACKAGE ================= */

function selectPackage(packageName) {

    const packageSelect =
        document.getElementById("package");

    packageSelect.value = packageName;

    document
        .getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ================= BOOKING ================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const packageName =
        document.getElementById("package").value;

    showModal(`

        <div style="text-align:center">

            <div style="
                font-size:50px;
                color:#668872;
                margin-bottom:15px;
            ">
                ✓
            </div>

            <h2>Đặt lịch thành công!</h2>

            <p style="margin-top:15px">
                Xin chào <strong>${name}</strong>.
            </p>

            <p>
                Lịch tư vấn của bạn:
            </p>

            <p>
                <strong>
                    ${date} — ${time}
                </strong>
            </p>

            <p>
                ${packageName}
            </p>

            <p style="
                color:#777;
                font-size:13px;
                margin-top:20px;
            ">
                Đây là bản demo website.
                Trong website thực tế, thông tin
                sẽ được gửi đến hệ thống quản lý
                lịch hẹn của phòng khám.
            </p>

        </div>

    `);

});


/* ================= PAYMENT ================= */

function showPayment(type) {

    if (type === "QR") {

        showModal(`

            <h2>Thanh toán bằng QR</h2>

            <div style="
                width:200px;
                height:200px;
                margin:25px auto;
                background:
                    repeating-linear-gradient(
                        45deg,
                        #222 0,
                        #222 5px,
                        white 5px,
                        white 10px
                    );
                border:15px solid white;
                box-shadow:0 0 0 1px #ddd;
            "></div>

            <p style="text-align:center">
                Đây là mã QR minh họa.
            </p>

            <p style="
                text-align:center;
                color:#777;
                font-size:13px;
            ">
                Khi triển khai thực tế,
                thay bằng QR thanh toán của phòng khám.
            </p>

        `);

    }

    else {

        showModal(`

            <h2>Thông tin chuyển khoản</h2>

            <div style="
                background:#eef3ed;
                padding:20px;
                border-radius:12px;
                margin-top:20px;
            ">

                <p>
                    <strong>Ngân hàng:</strong>
                    Ngân hàng Demo
                </p>

                <p>
                    <strong>Số tài khoản:</strong>
                    0123456789
                </p>

                <p>
                    <strong>Chủ tài khoản:</strong>
                    AN TAM PSYCHOLOGY
                </p>

                <p>
                    <strong>Nội dung:</strong>
                    HO TEN + TU VAN
                </p>

            </div>

            <p style="
                margin-top:15px;
                color:#777;
                font-size:12px;
            ">
                Đây chỉ là thông tin minh họa cho website.
            </p>

        `);

    }

}


/* ================= MODAL ================= */

function showModal(content) {

    const modal =
        document.getElementById("modal");

    const modalContent =
        document.getElementById("modalContent");

    modalContent.innerHTML = content;

    modal.classList.add("show");

}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");

}


document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });


/* ================= PSYCHOLOGICAL TEST ================= */

const questions = [

    {
        question:
            "Trong 2 tuần gần đây, bạn có cảm thấy buồn hoặc xuống tinh thần không?",

        answers: [
            "Hầu như không",
            "Thỉnh thoảng",
            "Khá thường xuyên",
            "Gần như mỗi ngày"
        ]
    },

    {
        question:
            "Bạn có cảm thấy khó thư giãn hoặc thường xuyên lo lắng không?",

        answers: [
            "Hầu như không",
            "Thỉnh thoảng",
            "Khá thường xuyên",
            "Gần như mỗi ngày"
        ]
    },

    {
        question:
            "Bạn có gặp khó khăn trong việc tập trung học tập hoặc làm việc không?",

        answers: [
            "Hầu như không",
            "Thỉnh thoảng",
            "Khá thường xuyên",
            "Gần như mỗi ngày"
        ]
    },

    {
        question:
            "Gần đây bạn có cảm thấy mệt mỏi hoặc thiếu năng lượng không?",

        answers: [
            "Hầu như không",
            "Thỉnh thoảng",
            "Khá thường xuyên",
            "Gần như mỗi ngày"
        ]
    },

    {
        question:
            "Bạn có cảm thấy những hoạt động trước đây mình yêu thích không còn hấp dẫn không?",

        answers: [
            "Hầu như không",
            "Thỉnh thoảng",
            "Khá thường xuyên",
            "Gần như mỗi ngày"
        ]
    }

];


let currentQuestion = 0;

let score = 0;

let testStarted = false;


/* ================= START TEST ================= */

function startTest() {

    currentQuestion = 0;

    score = 0;

    testStarted = true;

    document
        .getElementById("testArea")
        .style.display = "block";

    showQuestion();

    document
        .getElementById("testArea")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= SHOW QUESTION ================= */

function showQuestion() {

    const question =
        questions[currentQuestion];

    document
        .getElementById("question")
        .textContent =
        `${currentQuestion + 1}. ${question.question}`;


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent = answer;

            button.onclick = function() {

                score += index;

                document
                    .querySelectorAll(".answer")
                    .forEach(btn => {

                        btn.disabled = true;

                    });

                button.style.background =
                    "#e2eee3";

                button.style.borderColor =
                    "#668872";

            };

            answers.appendChild(button);

        }
    );

}


/* ================= NEXT ================= */

function nextQuestion() {

    if (!testStarted) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }

}


/* ================= RESULT ================= */

function showResult() {

    let result = "";

    if (score <= 3) {

        result = `
            <h2>Mức độ hiện tại khá ổn định</h2>

            <p>
                Qua các câu trả lời, bạn chưa ghi nhận
                nhiều dấu hiệu đáng lo ngại trong bài
                tự đánh giá này.
            </p>
        `;

    }

    else if (score <= 8) {

        result = `
            <h2>Bạn có thể đang gặp một số áp lực</h2>

            <p>
                Có một số dấu hiệu cho thấy bạn có thể
                đang trải qua căng thẳng hoặc áp lực.
                Hãy dành thời gian nghỉ ngơi và chăm sóc
                bản thân.
            </p>
        `;

    }

    else {

        result = `
            <h2>Bạn nên quan tâm hơn đến sức khỏe tinh thần</h2>

            <p>
                Kết quả cho thấy bạn đang có khá nhiều
                biểu hiện cần được quan tâm. Bạn có thể
                cân nhắc trò chuyện với người đáng tin cậy
                hoặc chuyên gia tâm lý.
            </p>
        `;

    }


    showModal(`

        <div>

            <div style="
                font-size:45px;
                color:#668872;
            ">
                ♡
            </div>

            ${result}

            <hr style="
                margin:25px 0;
                border:none;
                border-top:1px solid #eee;
            ">

            <p style="
                font-size:13px;
                color:#777;
            ">
                Lưu ý: Đây là bài tự đánh giá minh họa,
                không phải công cụ chẩn đoán tâm lý.
                Kết quả không thể thay thế đánh giá
                trực tiếp từ chuyên gia.
            </p>

            <br>

            <a
                href="#booking"
                onclick="closeModal()"
                class="primary-btn"
            >
                Đặt lịch tư vấn
            </a>

        </div>

    `);


    testStarted = false;

}


/* ================= INITIAL STATE ================= */

document
    .getElementById("testArea")
    .style.display = "none";