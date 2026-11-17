// DATA (Đã nhúng sẵn)
const allQuestions = [
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Thuộc tính của thẻ HTML có tác dụng gì?","option_a":"Xóa nội dung của thẻ HTML.","option_b":"Bổ sung thông tin, làm rõ cách xử lí của thẻ.","option_c":"Thay thế hoàn toàn thẻ HTML.","option_d":"Tạo một trang web mới.","correct_answer":"B","id":1},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Thuộc tính của thẻ HTML được đặt ở vị trí nào?","option_a":"Trong thẻ kết thúc.","option_b":"Sau nội dung của thẻ.","option_c":"Sau nội dung của thẻ. C. Trong thẻ bắt đầu, sau tên thẻ.","option_d":"Bên ngoài cặp thẻ HTML.","correct_answer":"C","id":2},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Cú pháp khai báo thuộc tính HTML nào sau đây là đúng?","option_a":"tên_thuộc_tính: giá_trị;","option_b":"tên_thuộc_tính=\"giá_trị\"","option_c":"tên_thuộc_tính(giá_trị)","option_d":"tên_thuộc_tính<giá_trị>","correct_answer":"B","id":3},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Thuộc tính nào thường được sử dụng để thiết lập định dạng văn bản trực tiếp cho một phần tử HTML?","option_a":"href","option_b":"src","option_c":"style","option_d":"alt","correct_answer":"C","id":4},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Thẻ HTML nào được sử dụng để tạo một đoạn văn bản?","option_a":"<h1>","option_b":"<p>","option_c":"<br>","option_d":"<hr>","correct_answer":"B","id":5},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Trong HTML, thẻ nào dùng để tạo tiêu đề có cấp độ lớn nhất?","option_a":"<h6>","option_b":"<h3>","option_c":"<h1>","option_d":"<p>","correct_answer":"C","id":6},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Thẻ HTML nào dùng để tạo đường kẻ ngang phân cách nội dung?","option_a":"<br>","option_b":"<hr>","option_c":"<p>","option_d":"<strong>","correct_answer":"B","id":7},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Muốn xuống dòng trong một đoạn văn bản mà không tạo đoạn mới, ta sử dụng thẻ nào?","option_a":"<br>","option_b":"<hr>","option_c":"<p>","option_d":"<h2>","correct_answer":"A","id":8},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Cặp thẻ nào thường được sử dụng để định dạng chữ in đậm?","option_a":"<i> và </i>","option_b":"<u> và </u>","option_c":"<b> và </b>","option_d":"<sub> và </sub>","correct_answer":"C","id":9},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Thẻ HTML nào dùng để định dạng chữ in nghiêng?","option_a":"<b>","option_b":"<i>","option_c":"<sup>","option_d":"<sub>","correct_answer":"B","id":10},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Muốn hiển thị công thức H₂O với số 2 ở vị trí chỉ số dưới, em sử dụng thẻ nào?","option_a":"<sup>","option_b":"<sub>","option_c":"<strong>","option_d":"<em>","correct_answer":"B","id":11},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Đoạn mã HTML nào sau đây hiển thị số 2 ở vị trí chỉ số trên trong biểu thức x²?","option_a":"x<sub>2</sub>","option_b":"x<br>2","option_c":"x<sup>2</sup>","option_d":"x<strong>2</strong>","correct_answer":"C","id":12},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Cho đoạn mã HTML: <p style=\"color:red; font-size:20px;\">Tin học 12</p>. Kết quả hiển thị là gì?","option_a":"Văn bản màu xanh, cỡ chữ 20px.","option_b":"Văn bản màu đỏ, cỡ chữ 20px.","option_c":"Văn bản màu đỏ, cỡ chữ mặc định.","option_d":"Văn bản màu đen, cỡ chữ 20px.","correct_answer":"B","id":13},
    {"grade":12,"level":"Nhận biết","type":"mcq","question_text":"Cho đoạn mã HTML: <h2 style=\"color:blue; text-align:center;\">Chào mừng</h2>. Kết quả hiển thị là gì?","option_a":"Chữ Chào mừng màu xanh, căn giữa.","option_b":"Chữ Chào mừng màu đỏ, căn trái.","option_c":"Chữ Chào mừng màu xanh, căn phải.","option_d":"Chữ Chào mừng màu đen, căn giữa.","correct_answer":"A","id":14},
    {"grade":12,"level":"Nhận biết","type":"tf","question_text":"Về thuộc tính của thẻ HTML:","statements":[{"text":"Mọi thẻ HTML đều bắt buộc phải có thuộc tính.","correct":"Sai"},{"text":"Thuộc tính có tác dụng bổ sung thông tin cho thẻ HTML.","correct":"Đúng"},{"text":"Thuộc tính được đặt trong thẻ bắt đầu.","correct":"Đúng"},{"text":"Khi một thẻ có nhiều thuộc tính, các thuộc tính được ngăn cách bởi dấu cách.","correct":"Đúng"}],"id":15},
    {"grade":12,"level":"Nhận biết","type":"tf","question_text":"Về các thẻ định dạng trình bày văn bản:","statements":[{"text":"Thẻ <p> được sử dụng để tạo đoạn văn bản.","correct":"Đúng"},{"text":"Thẻ <h1> dùng để tạo tiêu đề cấp lớn nhất.","correct":"Đúng"},{"text":"Thẻ <br> dùng để tạo đường kẻ ngang.","correct":"Sai"},{"text":"Thẻ <hr> dùng để tạo đường kẻ ngang phân cách nội dung.","correct":"Đúng"}],"id":16},
    {"grade":12,"level":"Nhận biết","type":"tf","question_text":"Về các thẻ định dạng phông chữ:","statements":[{"text":"Thẻ <b> thường được sử dụng để hiển thị chữ in đậm.","correct":"Đúng"},{"text":"Thẻ <i> được sử dụng để hiển thị chữ in nghiêng.","correct":"Đúng"},{"text":"Thẻ <sup> được sử dụng để tạo chỉ số dưới.","correct":"Sai"},{"text":"Thẻ <sub> được sử dụng để tạo chỉ số dưới.","correct":"Đúng"}],"id":17},
    {"grade":12,"level":"Nhận biết","type":"tf","question_text":"Cho đoạn mã HTML: <p style=\"color:red; font-size:18px;\">Tin học 12</p>","statements":[{"text":"Thẻ <p> tạo một đoạn văn bản.","correct":"Đúng"},{"text":"Thuộc tính style được sử dụng để thiết lập định dạng trực tiếp cho đoạn văn bản.","correct":"Đúng"},{"text":"Văn bản Tin học 12 được hiển thị với màu đỏ.","correct":"Đúng"},{"text":"Văn bản Tin học 12 được hiển thị với cỡ chữ 12px.","correct":"Sai"}],"id":18},
    {"grade":12,"level":"Nhận biết","type":"tf","question_text":"Một học sinh viết mã HTML để trình bày nội dung sau: <h1>Hóa học</h1><p>Công thức nước là H<sub>2</sub>O.</p><p>Biểu thức toán học: x<sup>2</sup></p><p><b>Chúc các bạn học tốt!</b></p>","statements":[{"text":"Thẻ <h1> được sử dụng để tạo tiêu đề.","correct":"Đúng"},{"text":"Số 2 trong công thức H₂O được hiển thị ở vị trí chỉ số dưới.","correct":"Đúng"},{"text":"x<sup>2</sup></p><p><b>Chúc các bạn học tốt!</b></p>","correct":"Sai"},{"text":"Nội dung “Chúc các bạn học tốt!” được hiển thị bằng chữ in nghiêng.","correct":"Sai"}],"id":19}
];

let showAnswers = false;

// Khởi tạo khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    renderQuestions();
});

// Hàm chống lỗi mất chữ do thẻ HTML thô từ API
function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Bật/tắt đáp án
function toggleAnswers() {
    showAnswers = !showAnswers;
    document.body.classList.toggle('show-answers');
    
    const btn = document.getElementById('btn-toggle-ans');
    if (showAnswers) {
        btn.innerHTML = `<i data-lucide="eye" class="w-4 h-4"></i> <span>Ẩn đáp án</span>`;
        btn.classList.add('bg-brand-50', 'text-brand-700', 'border-brand-200');
    } else {
        btn.innerHTML = `<i data-lucide="eye-off" class="w-4 h-4"></i> <span>Hiện đáp án</span>`;
        btn.classList.remove('bg-brand-50', 'text-brand-700', 'border-brand-200');
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Reset bộ lọc
function resetFilters() {
    document.getElementById('filter-grade').value = 'all';
    document.getElementById('filter-type').value = 'all';
    document.getElementById('filter-level').value = 'all';
    renderQuestions();
}

// Render danh sách câu hỏi
function renderQuestions() {
    const gradeFilter = document.getElementById('filter-grade').value;
    const typeFilter = document.getElementById('filter-type').value;
    const levelFilter = document.getElementById('filter-level').value;
    const container = document.getElementById('questions-container');
    
    let filtered = allQuestions.filter(q => {
        if (gradeFilter !== 'all' && String(q.grade) !== gradeFilter) return false;
        if (typeFilter !== 'all' && q.type !== typeFilter) return false;
        if (levelFilter !== 'all' && q.level !== levelFilter) return false;
        return true;
    });

    // Update Stats
    document.getElementById('stat-total').innerText = filtered.length;
    document.getElementById('stat-mcq').innerText = filtered.filter(q => q.type === 'mcq').length;
    document.getElementById('stat-tf').innerText = filtered.filter(q => q.type === 'tf').length;
    document.getElementById('result-count').innerText = `Hiển thị ${filtered.length} câu hỏi`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500 flex flex-col items-center">
                <i data-lucide="inbox" class="w-12 h-12 text-gray-300 mb-3"></i>
                <p>Không tìm thấy câu hỏi nào phù hợp với bộ lọc.</p>
            </div>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    let html = '';
    filtered.forEach((q, index) => {
        let typeBadge = q.type === 'tf' 
            ? '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Tự luận Đ/S</span>' 
            : '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Trắc nghiệm</span>';
        
        let levelBadgeColor = q.level === 'Nhận biết' ? 'bg-gray-100 text-gray-700' : (q.level === 'Thông hiểu' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800');
        let levelBadge = `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${levelBadgeColor}">${q.level}</span>`;
        
        html += `<div class="question-card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <span class="text-base font-bold text-gray-900">Câu ${index + 1}</span>
                </div>
                <div class="flex gap-2">${levelBadge} ${typeBadge}</div>
            </div>
            <div class="p-6">
                <div class="text-gray-900 font-medium mb-4 leading-relaxed">${escapeHTML(q.question_text)}</div>`;

        if (q.type === 'tf' && Array.isArray(q.statements)) {
            html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-3">`;
            const labels = ['a', 'b', 'c', 'd'];
            q.statements.forEach((st, i) => {
                let mark = st.correct === 'Đúng' 
                    ? '<span class="correct-mark text-emerald-600 font-semibold text-sm ml-2"> (Đúng)</span>' 
                    : '<span class="correct-mark text-rose-600 font-semibold text-sm ml-2"> (Sai)</span>';
                
                html += `<div class="flex items-start p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span class="font-bold text-gray-700 mr-2">${labels[i]})</span>
                    <span class="text-gray-700 flex-1 text-sm">${escapeHTML(st.text)}</span>
                    ${mark}
                </div>`;
            });
            html += `</div>`;
        } else {
            html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-start p-3 rounded-lg border border-gray-100 bg-gray-50/50"><span class="font-bold text-gray-500 mr-2">A.</span><span class="text-gray-700 text-sm">${escapeHTML(q.option_a)}</span>${q.correct_answer === 'A' ? '<span class="correct-mark text-emerald-600 font-semibold ml-2"> (Đáp án)</span>' : ''}</div>
                <div class="flex items-start p-3 rounded-lg border border-gray-100 bg-gray-50/50"><span class="font-bold text-gray-500 mr-2">B.</span><span class="text-gray-700 text-sm">${escapeHTML(q.option_b)}</span>${q.correct_answer === 'B' ? '<span class="correct-mark text-emerald-600 font-semibold ml-2"> (Đáp án)</span>' : ''}</div>
                <div class="flex items-start p-3 rounded-lg border border-gray-100 bg-gray-50/50"><span class="font-bold text-gray-500 mr-2">C.</span><span class="text-gray-700 text-sm">${escapeHTML(q.option_c)}</span>${q.correct_answer === 'C' ? '<span class="correct-mark text-emerald-600 font-semibold ml-2"> (Đáp án)</span>' : ''}</div>
                <div class="flex items-start p-3 rounded-lg border border-gray-100 bg-gray-50/50"><span class="font-bold text-gray-500 mr-2">D.</span><span class="text-gray-700 text-sm">${escapeHTML(q.option_d)}</span>${q.correct_answer === 'D' ? '<span class="correct-mark text-emerald-600 font-semibold ml-2"> (Đáp án)</span>' : ''}</div>
            </div>`;
        }
        html += `</div></div>`;
    });
    container.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// XUẤT WORD
function exportWord() {
    const content = document.getElementById('questions-container').cloneNode(true);
    
    // Xóa icon SVG để không bị lỗi font trong Word
    content.querySelectorAll('svg').forEach(el => el.remove());
    
    content.querySelectorAll('.question-card').forEach(card => {
        card.setAttribute('style', 'margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px dashed #ccc; page-break-inside: avoid; font-family: "Times New Roman", serif;');
    });
    content.querySelectorAll('.text-gray-900.font-medium').forEach(el => {
        el.setAttribute('style', 'font-weight: bold; font-size: 14pt; margin-bottom: 8px;');
    });
    content.querySelectorAll('.grid').forEach(el => {
        el.setAttribute('style', 'margin-left: 15px;');
    });

    // Đảm bảo đáp án đúng in ra màu xanh trong Word
    content.querySelectorAll('.correct-mark').forEach(el => {
        el.setAttribute('style', 'color: #198754; font-weight: bold;');
    });

    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Ngân Hàng Câu Hỏi</title>
    <style>
        body { font-family: 'Times New Roman', serif; font-size: 13pt; }
        .question-card { margin-bottom: 20px; page-break-inside: avoid; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .text-gray-900 { font-weight: bold; font-size: 14pt; margin-bottom: 8px; display: block; }
        .grid { margin-left: 15px; }
        .flex { display: block; margin-bottom: 4px; }
        .font-bold { font-weight: bold; margin-right: 5px; }
        .correct-mark { color: #198754; font-weight: bold; margin-left: 5px; }
        .px-6.py-4 { border-bottom: 1px solid #ccc; margin-bottom: 10px; font-weight: bold; }
        .text-sm { font-size: 13pt; }
    </style>
    </head><body>`;
    
    const html = header + `<div style="font-size: 16pt; font-weight: bold; text-align: center; margin-bottom: 20px;">NGÂN HÀNG CÂU HỎI</div>` + content.innerHTML + `</body></html>`;
    
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ngan_Hang_Cau_Hoi.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// XUẤT PDF (Tải file trực tiếp, đã xử lý lỗi mất chữ)
function exportPDF() {
    // Clone toàn bộ khu vực hiển thị
    const element = document.getElementById('print-area').cloneNode(true);
    
    // Xóa các phần tử không cần thiết (bộ lọc, header)
    element.querySelectorAll('.no-print').forEach(el => el.remove());
    
    // Xóa toàn bộ icon SVG để html2canvas không bị lỗi render
    element.querySelectorAll('svg').forEach(el => el.remove());
    
    // Chuyển layout Flex/Grid về Block để chống mất chữ
    element.querySelectorAll('.flex, .grid').forEach(el => {
        el.style.display = 'block';
    });
    
    // Đảm bảo đáp án đúng hiển thị
    element.querySelectorAll('.correct-mark').forEach(el => {
        el.style.display = 'inline';
    });
    
    // Tạo vùng chứa tạm thời để render chuẩn
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    wrapper.style.background = 'white';
    wrapper.style.width = '800px'; // Set width để căn lề chuẩn
    wrapper.appendChild(element);
    document.body.appendChild(wrapper);

    const opt = {
        margin:       15,
        filename:     'Ngan_Hang_Cau_Hoi.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(wrapper).save().then(() => {
        document.body.removeChild(wrapper);
    });
}