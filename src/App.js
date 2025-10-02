import React, { useState } from 'react';
import { FileText, Download, HelpCircle, CheckCircle } from 'lucide-react';

const CareerStatementGenerator = () => {
  const [formData, setFormData] = useState({
    personalInfo: { name: '', birth: '', phone: '', email: '', address: '' },
    position: '',
    years: '',
    education: [{ school: '', major: '', degree: '', period: '', status: '' }],
    oneLineIntro: '',
    competency1: '',
    competency2: '',
    competency3: '',
    majorProject: '',
    techStack: '',
    careers: [{ company: '', department: '', position: '', period: '', role: '', isCurrentJob: false }],
    toolSkills: [{ tools: '', proficiency: '' }],
    languageSkills: [{ languages: '', proficiency: '' }],
    certifications: [{ name: '', issuer: '', date: '' }],
    publications: [{ title: '', journal: '', date: '', author: '' }],
    projects: [{ company: '', name: '', period: '', role: '', situation: '', task: '', action: '', result: '', insight: '' }]
  });

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', major: '', degree: '', period: '', status: '' }]
    });
  };

  const updateEducation = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const addCareer = () => {
    setFormData({
      ...formData,
      careers: [...formData.careers, { company: '', department: '', position: '', period: '', role: '', isCurrentJob: false }]
    });
  };

  const updateCareer = (index, field, value) => {
    const newCareers = [...formData.careers];
    newCareers[index][field] = value;
    setFormData({ ...formData, careers: newCareers });
  };

  const removeCareer = (index) => {
    const newCareers = formData.careers.filter((_, i) => i !== index);
    setFormData({ ...formData, careers: newCareers });
  };

  const addToolSkill = () => {
    setFormData({
      ...formData,
      toolSkills: [...formData.toolSkills, { tools: '', proficiency: '' }]
    });
  };

  const updateToolSkill = (index, field, value) => {
    const newSkills = [...formData.toolSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const removeToolSkill = (index) => {
    const newSkills = formData.toolSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const addLanguageSkill = () => {
    setFormData({
      ...formData,
      languageSkills: [...formData.languageSkills, { languages: '', proficiency: '' }]
    });
  };

  const updateLanguageSkill = (index, field, value) => {
    const newSkills = [...formData.languageSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const removeLanguageSkill = (index) => {
    const newSkills = formData.languageSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: '', issuer: '', date: '' }]
    });
  };

  const updateCertification = (index, field, value) => {
    const newCerts = [...formData.certifications];
    newCerts[index][field] = value;
    setFormData({ ...formData, certifications: newCerts });
  };

  const removeCertification = (index) => {
    const newCerts = formData.certifications.filter((_, i) => i !== index);
    setFormData({ ...formData, certifications: newCerts });
  };

  const addPublication = () => {
    setFormData({
      ...formData,
      publications: [...formData.publications, { title: '', journal: '', date: '', author: '' }]
    });
  };

  const updatePublication = (index, field, value) => {
    const newPubs = [...formData.publications];
    newPubs[index][field] = value;
    setFormData({ ...formData, publications: newPubs });
  };

  const removePublication = (index) => {
    const newPubs = formData.publications.filter((_, i) => i !== index);
    setFormData({ ...formData, publications: newPubs });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { company: '', name: '', period: '', role: '', situation: '', task: '', action: '', result: '', insight: '' }]
    });
  };

  const removeProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };

  const updateProject = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const generateWordDocument = () => {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Malgun Gothic,sans-serif;line-height:1.8;padding:40px}h1{text-align:center;border-bottom:2px solid #000;padding-bottom:10px;margin-bottom:30px}h2{margin-top:30px;margin-bottom:15px;border-bottom:1px solid #000;padding-bottom:5px}h3{margin-top:20px;margin-bottom:10px;font-weight:bold}.info-table{width:100%;border-collapse:collapse;margin:20px 0}.info-table td{padding:8px;border:1px solid #000}.info-table td:first-child{font-weight:bold;width:120px}p{margin:10px 0}</style></head><body>';
    
    html += '<h1>CareerEngineer의 경력기술서 작성 가이드&템플릿</h1>';
    html += '<h2>인적사항</h2><table class="info-table">';
    html += '<tr><td>성명</td><td>' + formData.personalInfo.name + '</td></tr>';
    html += '<tr><td>생년월일</td><td>' + formData.personalInfo.birth + '</td></tr>';
    html += '<tr><td>연락처</td><td>' + formData.personalInfo.phone + '</td></tr>';
    html += '<tr><td>이메일</td><td>' + formData.personalInfo.email + '</td></tr>';
    html += '<tr><td>주소</td><td>' + formData.personalInfo.address + '</td></tr>';
    html += '<tr><td>지원 직무</td><td>' + formData.position + '</td></tr>';
    html += '<tr><td>총 경력</td><td>' + formData.years + '년</td></tr>';
    html += '</table>';
    
    html += '<h2>학력사항</h2>';
    formData.education.forEach(edu => {
      html += '<p><strong>' + edu.school + '</strong> | ' + edu.major + ' | ' + edu.degree + ' | ' + edu.period + ' | ' + edu.status + '</p>';
    });
    
    html += '<h2>핵심역량요약</h2>';
    html += '<h3>1줄 포지셔닝</h3><p>' + formData.oneLineIntro.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>대표 성과</h3><p>' + formData.majorProject.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>핵심역량</h3>';
    html += '<p><strong>역량 1:</strong><br>' + formData.competency1.replace(/\n/g, '<br>') + '</p>';
    html += '<p><strong>역량 2:</strong><br>' + formData.competency2.replace(/\n/g, '<br>') + '</p>';
    html += '<p><strong>역량 3:</strong><br>' + formData.competency3.replace(/\n/g, '<br>') + '</p>';
    html += '<h3>주요 기술과 도구</h3><p>' + formData.techStack.replace(/\n/g, '<br>') + '</p>';
    
    html += '<h2>경력사항</h2>';
    formData.careers.forEach(career => {
      html += '<div><p><strong>' + career.company + '</strong> | ' + career.department + ' | ' + career.position;
      if (career.isCurrentJob) html += ' (재직중)';
      html += '</p><p>' + career.period + '</p>';
      html += '<p><strong>역할:</strong> ' + career.role.replace(/\n/g, '<br>') + '</p></div>';
    });
    
    html += '<h3>사용 가능 툴</h3>';
    formData.toolSkills.forEach(skill => {
      html += '<p>' + skill.tools + ' | 숙련도: ' + skill.proficiency + '</p>';
    });
    
    html += '<h3>사용 가능 언어</h3>';
    formData.languageSkills.forEach(skill => {
      html += '<p>' + skill.languages + ' | 숙련도: ' + skill.proficiency + '</p>';
    });
    
    if (formData.certifications.some(cert => cert.name)) {
      html += '<h2>자격증</h2>';
      formData.certifications.forEach(cert => {
        if (cert.name) html += '<p>' + cert.name + ' | ' + cert.issuer + ' | ' + cert.date + '</p>';
      });
    }
    
    if (formData.publications.some(pub => pub.title)) {
      html += '<h2>논문/출판</h2>';
      formData.publications.forEach(pub => {
        if (pub.title) html += '<p>' + pub.title + ' | ' + pub.journal + ' | ' + pub.date + ' | ' + pub.author + '</p>';
      });
    }
    
    html += '<h2>프로젝트 경험 (STAR)</h2>';
    formData.projects.forEach((project, index) => {
      html += '<h3>프로젝트 ' + (index + 1) + ': ' + project.name + '</h3>';
      html += '<p><strong>회사:</strong> ' + project.company + '</p>';
      html += '<p><strong>기간:</strong> ' + project.period + '</p>';
      html += '<p><strong>역할:</strong> ' + project.role + '</p>';
      html += '<p><strong>상황(Situation):</strong><br>' + project.situation.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>과제(Task):</strong><br>' + project.task.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>수행(Action):</strong><br>' + project.action.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>성과(Result):</strong><br>' + project.result.replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>인사이트:</strong><br>' + project.insight.replace(/\n/g, '<br>') + '</p>';
    });
    
    html += '<div style="margin-top:40px;padding:20px;background-color:#fef2f2;border:2px solid #fca5a5;border-radius:8px"><p style="font-size:1rem;color:#374151;margin-bottom:12px;font-weight:bold">📋 저작권 안내</p><p style="font-size:0.875rem;color:#374151;margin-bottom:8px"><strong>이 문서는 저작권법에 의해 보호받는 저작물입니다.</strong> 문서의 전체 또는 일부를 저작권자의 사전 서면 동의 없이 무단으로 <span style="color:#dc2626;font-weight:bold">복제, 배포, 전송, 전시, 방송하거나 수정 및 편집하는 행위는 금지</span>되어 있으며, 위반 시 관련 법령에 따라 법적인 책임을 질 수 있습니다.</p><p style="font-size:0.875rem;color:#374151">오직 개인적인 용도로만 사용해야 하며, <span style="color:#dc2626;font-weight:bold">상업적 목적의 사용 및 무단 배포를 엄격히 금지</span>합니다.</p></div>';
    html += '</body></html>';

    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '경력기술서_' + (formData.personalInfo.name || '미입력') + '_' + new Date().toISOString().split('T')[0] + '.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">CareerEngineer의 경력기술서 작성 가이드&템플릿</h1>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm font-semibold text-gray-800 mb-2">작성 핵심 원칙</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>JD 기반 작성:</strong> 지원 직무의 JD 요구사항과 자신의 역량을 최대한 연결</li>
              <li>• <strong>최신순 작성:</strong> 경력, 프로젝트는 최근 것부터</li>
              <li>• <strong>구체적 기술:</strong> 역할, 규모, 수행 내용을 명확하게</li>
              <li>• <strong>숫자로 증명:</strong> 모든 성과는 구체적 수치로</li>
              <li>• <strong>역할 구분:</strong> 전체 성과와 자신의 역할을 명확히 구분</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            작성 핵심 원칙 - JD 기반 작성법
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="p-4 bg-white rounded-lg">
              <p className="font-semibold mb-2">1단계: JD 분석</p>
              <p>• 지원 직무의 JD에서 핵심 키워드(기술, 역량, 경험)를 추출하세요</p>
              <p>• "필수 요건"과 "우대 사항"을 구분하여 정리하세요</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="font-semibold mb-2">2단계: 매칭 포인트 찾기</p>
              <p>• 자신의 경험 중 JD 키워드와 연결되는 부분을 찾으세요</p>
              <p>• 직접적 경험이 없다면 유사 경험이나 전이 가능한 역량을 찾으세요</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="font-semibold mb-2">3단계: 키워드 반영</p>
              <p>• 1줄 포지셔닝, 핵심역량, 프로젝트 설명에 JD의 핵심 키워드를 자연스럽게 포함하세요</p>
              <p>• 단순 나열이 아닌 실제 경험과 성과 중심으로 작성하세요</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📋 인적사항</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">성명</label>
              <input type="text" value={formData.personalInfo.name} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, name: e.target.value } })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="홍길동" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">생년월일</label>
              <input type="text" value={formData.personalInfo.birth} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, birth: e.target.value } })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="1990.01.01" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">연락처</label>
              <input type="text" value={formData.personalInfo.phone} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, phone: e.target.value } })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="010-1234-5678" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
              <input type="email" value={formData.personalInfo.email} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, email: e.target.value } })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="example@email.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">주소</label>
              <input type="text" value={formData.personalInfo.address} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, address: e.target.value } })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="서울특별시 강남구" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">지원 직무</label>
              <input type="text" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="백엔드 개발자" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">총 경력</label>
              <input type="text" value={formData.years} onChange={(e) => setFormData({ ...formData, years: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="5" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🎓 학력사항</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">학력 {index + 1}</h3>
                {formData.education.length > 1 && (
                  <button onClick={() => removeEducation(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">학교명</label>
                  <input type="text" value={edu.school} onChange={(e) => updateEducation(index, 'school', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="서울대학교" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">전공</label>
                  <input type="text" value={edu.major} onChange={(e) => updateEducation(index, 'major', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="컴퓨터공학" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">학위</label>
                  <input type="text" value={edu.degree} onChange={(e) => updateEducation(index, 'degree', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="학사" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">기간</label>
                  <input type="text" value={edu.period} onChange={(e) => updateEducation(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2010.03 ~ 2014.02" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">상태</label>
                  <input type="text" value={edu.status} onChange={(e) => updateEducation(index, 'status', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="졸업" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addEducation} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">+ 학력 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">⭐ 핵심역량요약</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">1줄 포지셔닝 (지원 직무와 연결)</label>
              <textarea value={formData.oneLineIntro} onChange={(e) => setFormData({ ...formData, oneLineIntro: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={2} placeholder="예시: 5년차 백엔드 개발자로 대용량 트래픽 처리 및 시스템 성능 최적화 전문" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">대표 성과</label>
              <textarea value={formData.majorProject} onChange={(e) => setFormData({ ...formData, majorProject: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시: 결제 시스템 성능 개선 프로젝트에서 응답시간 80% 단축 및 연간 6억원 손실 방지" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 1</label>
              <textarea value={formData.competency1} onChange={(e) => setFormData({ ...formData, competency1: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={2} placeholder="예시: 시스템 아키텍처 설계 및 성능 최적화" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 2</label>
              <textarea value={formData.competency2} onChange={(e) => setFormData({ ...formData, competency2: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={2} placeholder="예시: 대용량 데이터 처리 및 분산 시스템 구축" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 3</label>
              <textarea value={formData.competency3} onChange={(e) => setFormData({ ...formData, competency3: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={2} placeholder="예시: 팀 협업 및 기술 리더십" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">주요 기술과 도구</label>
              <textarea value={formData.techStack} onChange={(e) => setFormData({ ...formData, techStack: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예시:&#10;[개발자] React, TypeScript, Node.js, MySQL, AWS&#10;[기획자] Figma, JIRA, Google Analytics, Notion&#10;[마케터] Google Ads, Facebook Ads Manager, Mixpanel, Tableau&#10;[디자이너] Figma, Adobe XD, Photoshop, Illustrator, Protopie" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">💼 경력사항</h2>
          {formData.careers.map((career, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">경력 {index + 1}</h3>
                {formData.careers.length > 1 && (
                  <button onClick={() => removeCareer(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
                    <input type="text" value={career.company} onChange={(e) => updateCareer(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="네이버" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">부서</label>
                    <input type="text" value={career.department} onChange={(e) => updateCareer(index, 'department', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="플랫폼개발팀" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">직급</label>
                    <input type="text" value={career.position} onChange={(e) => updateCareer(index, 'position', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="시니어 개발자" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">재직기간</label>
                    <input type="text" value={career.period} onChange={(e) => updateCareer(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2020.03 ~ 2023.12" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={career.isCurrentJob} onChange={(e) => updateCareer(index, 'isCurrentJob', e.target.checked)} className="w-4 h-4 text-indigo-600" />
                  <label className="text-sm font-semibold text-gray-700">현재 재직중</label>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">핵심 수행 직무 및 담당 역할</label>
                  <textarea value={career.role} onChange={(e) => updateCareer(index, 'role', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예시:&#10;[개발자] 백엔드 API 설계 및 개발, 데이터베이스 최적화, 시스템 성능 개선&#10;[기획자] 서비스 기획 및 요구사항 정의, 사용자 리서치, 와이어프레임 작성&#10;[마케터] 디지털 광고 캠페인 기획 및 집행, 데이터 분석 및 리포팅, ROI 최적화&#10;[디자이너] UI/UX 디자인, 프로토타입 제작, 디자인 시스템 구축" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addCareer} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">+ 경력 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🛠️ 사용 가능 툴</h2>
          {formData.toolSkills.map((skill, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">툴 {index + 1}</h3>
                {formData.toolSkills.length > 1 && (
                  <button onClick={() => removeToolSkill(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">툴/기술</label>
                  <input type="text" value={skill.tools} onChange={(e) => updateToolSkill(index, 'tools', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="React, Node.js, AWS" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">숙련도</label>
                  <input type="text" value={skill.proficiency} onChange={(e) => updateToolSkill(index, 'proficiency', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="상/중/하" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addToolSkill} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">+ 툴 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🌐 사용 가능 언어</h2>
          {formData.languageSkills.map((skill, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">언어 {index + 1}</h3>
                {formData.languageSkills.length > 1 && (
                  <button onClick={() => removeLanguageSkill(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">언어</label>
                  <input type="text" value={skill.languages} onChange={(e) => updateLanguageSkill(index, 'languages', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="영어, 일본어" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">숙련도</label>
                  <input type="text" value={skill.proficiency} onChange={(e) => updateLanguageSkill(index, 'proficiency', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="상/중/하" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addLanguageSkill} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">+ 언어 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📜 자격증 (선택)</h2>
          {formData.certifications.map((cert, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">자격증 {index + 1}</h3>
                {formData.certifications.length > 1 && (
                  <button onClick={() => removeCertification(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">자격증명</label>
                  <input type="text" value={cert.name} onChange={(e) => updateCertification(index, 'name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="정보처리기사" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">발급기관</label>
                  <input type="text" value={cert.issuer} onChange={(e) => updateCertification(index, 'issuer', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="한국산업인력공단" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">취득일</label>
                  <input type="text" value={cert.date} onChange={(e) => updateCertification(index, 'date', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2020.05" />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addCertification} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">+ 자격증 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📚 논문/출판 (선택)</h2>
          {formData.publications.map((pub, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">논문 {index + 1}</h3>
                {formData.publications.length > 1 && (
                  <button onClick={() => removePublication(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">논문/저서명</label>
                  <input type="text" value={pub.title} onChange={(e) => updatePublication(index, 'title', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="머신러닝을 활용한 추천 시스템 개선" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">학술지/출판사</label>
                    <input type="text" value={pub.journal} onChange={(e) => updatePublication(index, 'journal', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="한국컴퓨터학회" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">발행일</label>
                    <input type="text" value={pub.date} onChange={(e) => updatePublication(index, 'date', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2022.06" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">저자 구분</label>
                    <input type="text" value={pub.author} onChange={(e) => updatePublication(index, 'author', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="제1저자" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addPublication} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">+ 논문 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🚀 프로젝트 경험 (STAR 기법)</h2>
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-gray-800 mb-2">STAR 기법이란?</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>S (Situation):</strong> 프로젝트 배경과 상황</li>
              <li>• <strong>T (Task):</strong> 해결해야 할 과제와 목표</li>
              <li>• <strong>A (Action):</strong> 자신이 수행한 구체적 행동</li>
              <li>• <strong>R (Result):</strong> 달성한 성과와 영향</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
              <p className="text-sm font-semibold text-gray-800 mb-3">✅ 성과 작성 핵심 가이드</p>
              
              <div className="mt-2 p-3 bg-green-50 rounded">
                <p className="font-semibold text-green-800 mb-2">✅ 좋은 예시 - 역할 명확 (개조식)</p>
                <p className="text-gray-700">
                  "▪ 프로젝트 전체: 응답시간 30초→6초(80% 개선), 결제 성공률 92%→98%, 월 손실액 5천만원 제로화<br/>
                  ▪ 자신의 역할: 4명 팀 중 백엔드 리드, Redis 캐싱 시스템 설계 전담<br/>
                  ▪ 자신의 기여: 캐시 히트율 85% 달성, DB 부하 70% 감소로 전체 성과에 핵심 기여"
                </p>
              </div>
              
              <div className="mt-2 p-3 bg-red-50 rounded">
                <p className="font-semibold text-red-800 mb-2">❌ 나쁜 예시 - 역할 불명확</p>
                <p className="text-gray-700">
                  "시스템 성능을 크게 개선하여 매출 손실을 방지했습니다."
                </p>
              </div>
            </div>
          </div>
          
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">프로젝트 {index + 1}</h3>
                {formData.projects.length > 1 && (
                  <button onClick={() => removeProject(index)} className="text-red-600 hover:text-red-800 text-sm font-semibold">삭제</button>
                )}
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
                    <input type="text" value={project.company} onChange={(e) => updateProject(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="네이버" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트명</label>
                    <input type="text" value={project.name} onChange={(e) => updateProject(index, 'name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="결제 시스템 성능 개선" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트 기간</label>
                    <input type="text" value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="2023.01 ~ 2023.06 (6개월)" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">역할</label>
                    <input type="text" value={project.role} onChange={(e) => updateProject(index, 'role', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="백엔드 리드 개발자" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">상황 (Situation)</label>
                  <textarea value={project.situation} onChange={(e) => updateProject(index, 'situation', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예시: 월 거래액 100억원 규모의 전자상거래 플랫폼에서 결제 시스템의 응답시간이 평균 30초로 느려져 결제 이탈률이 8%까지 증가했고, 월 평균 5천만원의 매출 손실이 발생하고 있었습니다." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">과제 (Task)</label>
                  <textarea value={project.task} onChange={(e) => updateProject(index, 'task', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예시: 6개월 내 결제 시스템 응답시간을 10초 이하로 단축하고 결제 성공률을 95% 이상으로 개선하여 매출 손실을 최소화하는 것이 목표였습니다." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">수행 내용 (자신의 역할 명확히)</label>
                  <textarea value={project.action} onChange={(e) => updateProject(index, 'action', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={6} placeholder="예시:&#10;[개발자]&#10;1. Redis 캐싱 시스템 설계 및 구현&#10;2. DB 쿼리 최적화 10개 수행&#10;3. 모니터링 대시보드 구축&#10;4. 부하 테스트 수행&#10;&#10;[기획자]&#10;1. 사용자 인터뷰 20건 수행 및 니즈 분석&#10;2. 와이어프레임 30개 화면 설계&#10;3. 개발팀과 주 2회 요구사항 조율&#10;4. A/B 테스트 시나리오 3개 설계 및 실행&#10;&#10;[마케터]&#10;1. 페이스북/인스타그램 광고 캠페인 10개 기획&#10;2. 타겟 오디언스 세그먼트 5개 설정&#10;3. 일일 광고 성과 분석 및 최적화&#10;4. 월간 마케팅 리포트 작성 및 발표&#10;&#10;[디자이너]&#10;1. 메인 화면 UI 디자인 15개 페이지&#10;2. 사용자 플로우 5개 시나리오 설계&#10;3. 디자인 컴포넌트 라이브러리 50개 제작&#10;4. 프로토타입 제작 및 사용성 테스트 진행" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">성과 (전체 성과 → 자신의 역할 → 자신의 기여 순서, 개조식)</label>
                  <textarea value={project.result} onChange={(e) => updateProject(index, 'result', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={8} placeholder="예시:&#10;[개발자]&#10;▪ 프로젝트 전체: 시스템 응답시간 30초→6초(80% 개선), 결제 성공률 92%→98% 향상, 월 매출 손실액 5천만원 제로화&#10;▪ 자신의 역할: 4명 팀 중 백엔드 리드로 Redis 캐싱 시스템 설계 전담&#10;▪ 자신의 기여: 캐시 히트율 85% 달성으로 DB 부하 70% 감소, 전체 응답시간 개선에 핵심 기여&#10;&#10;[기획자]&#10;▪ 프로젝트 전체: 신규 기능 출시로 MAU 50만→80만(60% 증가), 사용자 체류시간 5분→8분 향상&#10;▪ 자신의 역할: 3명 기획팀 중 UX 리서치 및 서비스 설계 담당&#10;▪ 자신의 기여: 사용자 인터뷰 20건 기반 핵심 페인포인트 발굴, 개선된 사용자 플로우 설계로 이탈률 15% 감소&#10;&#10;[마케터]&#10;▪ 프로젝트 전체: 캠페인 진행으로 신규 고객 1만명 유입, 매출 2억원 증대, ROAS 300% 달성&#10;▪ 자신의 역할: 2명 마케팅팀 중 페이스북/인스타그램 광고 담당&#10;▪ 자신의 기여: 타겟 세그먼트 최적화로 CPA 30% 절감(15,000원→10,500원), 전환율 2.5%→3.8% 개선&#10;&#10;[디자이너]&#10;▪ 프로젝트 전체: 리뉴얼 후 사용자 만족도 70점→85점(15점 상승), 앱 평점 3.8→4.5점 향상&#10;▪ 자신의 역할: 4명 디자인팀 중 UI 디자인 리드 담당&#10;▪ 자신의 기여: 디자인 시스템 구축으로 개발 시간 30% 단축, 일관된 UI로 사용성 개선에 핵심 기여" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">인사이트/배운점 (선택)</label>
                  <textarea value={project.insight} onChange={(e) => updateProject(index, 'insight', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시: 이 프로젝트를 통해 대용량 트래픽 환경에서의 캐싱 전략 설계 역량을 확보했으며, 시스템 성능 최적화가 비즈니스 성과에 직접적인 영향을 미친다는 것을 경험했습니다." />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addProject} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">+ 프로젝트 추가</button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-indigo-600" />
            최종 점검 체크리스트
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ JD 연계성</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 지원 직무 JD의 핵심 키워드가 경력기술서에 포함되어 있나요?</li>
                  <li>• JD 요구사항과 자신의 경험이 명확히 매칭되나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 구체성 검증</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 모든 성과에 구체적인 숫자(%, 배수, 절대값)가 있나요?</li>
                  <li>• 역할 기술 시 팀 규모와 자신의 포지션이 명시되어 있나요?</li>
                  <li>• 기간, 횟수, 규모 등이 구체적으로 표현되어 있나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 역할 구분</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 팀 전체 성과와 자신의 기여가 명확히 구분되어 있나요?</li>
                  <li>• "우리가", "팀이"가 아닌 "자신이" 수행한 일이 명확한가요?</li>
                  <li>• 담당 직무의 중요성과 책임 범위가 드러나나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 표현 검증</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• "참여", "수행", "기여" 같은 애매한 표현을 구체화했나요?</li>
                  <li>• "효율적", "적극적", "성실" 같은 추상적 표현이 없나요?</li>
                  <li>• Before → After 형태로 개선 정도가 명확한가요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 순서 정리</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 경력, 프로젝트가 최신순으로 정렬되어 있나요?</li>
                  <li>• 지원 직무와 관련성 높은 내용이 우선 배치되어 있나요?</li>
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">✅ 확보 역량</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• 각 프로젝트에서 습득한 구체적 기술/역량이 명시되어 있나요?</li>
                  <li>• 단순히 "역량 향상"이 아닌 구체적인 스킬이 표현되어 있나요?</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button onClick={generateWordDocument} className="py-4 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 flex items-center gap-2">
              <Download className="w-6 h-6" />
              워드 파일 다운로드
            </button>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong>📝 다운로드 후 활용 방법</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 생성된 워드파일을 활용하여 원하는 양식에 내용을 붙여서 완성하세요</li>
              <li>• 생성된 파일은 위에서 입력한 순서대로 출력됩니다</li>
              <li>• 최종 제출 시에는 지원하는 직무와 관련된 순서로, 최근 내용 순서로 정리해서 활용하세요</li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
            <p className="text-sm text-gray-700 mb-3">
              <strong style={{fontSize: '1.1em'}}>📋 저작권 안내</strong>
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>이 문서는 저작권법에 의해 보호받는 저작물입니다.</strong> 문서의 전체 또는 일부를 저작권자의 사전 서면 동의 없이 무단으로 <span style={{color: '#dc2626', fontWeight: 'bold'}}>복제, 배포, 전송, 전시, 방송하거나 수정 및 편집하는 행위는 금지</span>되어 있으며, 위반 시 관련 법령에 따라 법적인 책임을 질 수 있습니다.
            </p>
            <p className="text-sm text-gray-700">
              오직 개인적인 용도로만 사용해야 하며, <span style={{color: '#dc2626', fontWeight: 'bold'}}>상업적 목적의 사용 및 무단 배포를 엄격히 금지</span>합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerStatementGenerator;