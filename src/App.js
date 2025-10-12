import React, { useState } from 'react';
import { Download, FileText, User, Award, ChevronRight, ChevronLeft, HelpCircle, Lock, Edit, ChevronDown, ChevronUp } from 'lucide-react';

function CareerStatementGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  
  const SECRET_PASSWORD = 'CeCd2025)';

  const handleLogin = () => {
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      birth: '',
      phone: '',
      email: '',
      address: '',
      company: ''
    },
    position: '',
    years: '',
    education: [{ school: '', major: '', degree: '', period: '', status: '' }],
    oneLineIntro: '',
    competency1: '',
    competency2: '',
    competency3: '',
    majorProject: '',
    techStack: '',
    careers: [{ company: '', department: '', position: '', period: '', isCurrentJob: false, role: '' }],
    toolSkills: [{ tools: '', proficiency: '' }],
    languageSkills: [{ languages: '', proficiency: '' }],
    certifications: [{ name: '', issuer: '', date: '' }],
    additionalStrength: '',
    publications: [{ title: '', journal: '', date: '', author: '', volume: '', issue: '', pages: '', doi: '' }],
    projects: [{ 
      company: '', 
      name: '', 
      period: '', 
      background: '', 
      goals: '', 
      roleAndTasks: '', 
      achievement: '', 
      insights: '' 
    }]
  });

  const steps = [
    { id: 'intro', title: '시작하기', subtitle: '경력기술서 작성 안내' },
    { id: 'personal', title: '인적사항', subtitle: '기본 정보를 입력하세요' },
    { id: 'education', title: '학력사항', subtitle: '학력 정보를 입력하세요' },
    { id: 'competency', title: '핵심역량', subtitle: 'JD 기반으로 작성하세요' },
    { id: 'career', title: '경력사항', subtitle: '최신순으로 작성하세요' },
    { id: 'skills', title: '스킬 및 자격', subtitle: '보유 스킬과 자격증을 입력하세요' },
    { id: 'projects', title: '주요 프로젝트', subtitle: '최신순으로 작성하세요' },
    { id: 'publications', title: '작성 논문', subtitle: '논문 정보를 입력하세요' },
    { id: 'download', title: '최종 확인 및 다운로드', subtitle: '작성 내용을 확인하고 다운로드하세요' }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const updatePersonalInfo = (field, value) => {
    setFormData({ 
      ...formData, 
      personalInfo: { ...formData.personalInfo, [field]: value } 
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', major: '', degree: '', period: '', status: '' }]
    });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const updateEducation = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index][field] = value;
    setFormData({ ...formData, education: newEducation });
  };

  const addCareer = () => {
    setFormData({
      ...formData,
      careers: [...formData.careers, { company: '', department: '', position: '', period: '', isCurrentJob: false, role: '' }]
    });
  };

  const removeCareer = (index) => {
    const newCareers = formData.careers.filter((_, i) => i !== index);
    setFormData({ ...formData, careers: newCareers });
  };

  const updateCareer = (index, field, value) => {
    const newCareers = [...formData.careers];
    newCareers[index][field] = value;
    setFormData({ ...formData, careers: newCareers });
  };

  const addToolSkill = () => {
    setFormData({
      ...formData,
      toolSkills: [...formData.toolSkills, { tools: '', proficiency: '' }]
    });
  };

  const removeToolSkill = (index) => {
    const newSkills = formData.toolSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const updateToolSkill = (index, field, value) => {
    const newSkills = [...formData.toolSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, toolSkills: newSkills });
  };

  const addLanguageSkill = () => {
    setFormData({
      ...formData,
      languageSkills: [...formData.languageSkills, { languages: '', proficiency: '' }]
    });
  };

  const removeLanguageSkill = (index) => {
    const newSkills = formData.languageSkills.filter((_, i) => i !== index);
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const updateLanguageSkill = (index, field, value) => {
    const newSkills = [...formData.languageSkills];
    newSkills[index][field] = value;
    setFormData({ ...formData, languageSkills: newSkills });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: '', issuer: '', date: '' }]
    });
  };

  const removeCertification = (index) => {
    const newCerts = formData.certifications.filter((_, i) => i !== index);
    setFormData({ ...formData, certifications: newCerts });
  };

  const updateCertification = (index, field, value) => {
    const newCerts = [...formData.certifications];
    newCerts[index][field] = value;
    setFormData({ ...formData, certifications: newCerts });
  };

  const addPublication = () => {
    setFormData({
      ...formData,
      publications: [...formData.publications, { title: '', journal: '', date: '', author: '', volume: '', issue: '', pages: '', doi: '' }]
    });
  };

  const removePublication = (index) => {
    const newPubs = formData.publications.filter((_, i) => i !== index);
    setFormData({ ...formData, publications: newPubs });
  };

  const updatePublication = (index, field, value) => {
    const newPubs = [...formData.publications];
    newPubs[index][field] = value;
    setFormData({ ...formData, publications: newPubs });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { 
        company: '', 
        name: '', 
        period: '', 
        background: '', 
        goals: '', 
        roleAndTasks: '', 
        achievement: '', 
        insights: '' 
      }]
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
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Malgun Gothic', Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
            font-size: 12pt;
            color: #333;
          }
          h1 {
            text-align: center;
            font-size: 20pt;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }
          h2 {
            font-size: 14pt;
            margin-top: 30px;
            margin-bottom: 15px;
            border-bottom: 1px solid #000;
            padding-bottom: 5px;
            color: #1a3c6e;
          }
          h3 {
            font-size: 12pt;
            margin-top: 20px;
            margin-bottom: 10px;
            font-weight: bold;
          }
          .section-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          .section-table th, .section-table td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
            vertical-align: top;
          }
          .section-table th {
            background-color: #f5f5f5;
            font-weight: bold;
            width: 150px;
          }
          .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            text-align: center;
            font-size: 10pt;
            color: #666;
          }
        </style>
      </head>
      <body>
        <h1>경력기술서</h1>
    `;

    html += `
      <h2>인적사항</h2>
      <table class="section-table">
        <tr><th>성명</th><td>${formData.personalInfo.name}</td></tr>
        <tr><th>생년월일</th><td>${formData.personalInfo.birth}</td></tr>
        <tr><th>연락처</th><td>${formData.personalInfo.phone}</td></tr>
        <tr><th>이메일</th><td>${formData.personalInfo.email}</td></tr>
        <tr><th>주소</th><td>${formData.personalInfo.address}</td></tr>
        <tr><th>지원 직무</th><td>${formData.position}</td></tr>
        <tr><th>지원 회사</th><td>${formData.personalInfo.company}</td></tr>
        <tr><th>총 경력</th><td>${formData.years}년</td></tr>
      </table>
    `;

    html += `<h2>학력사항</h2>`;
    if (formData.education.length > 0) {
      html += `<table class="section-table">`;
      html += `<tr><th>학교명</th><th>전공</th><th>학위</th><th>재학 기간</th><th>상태</th></tr>`;
      formData.education.forEach(edu => {
        html += `
          <tr>
            <td>${edu.school}</td>
            <td>${edu.major}</td>
            <td>${edu.degree}</td>
            <td>${edu.period}</td>
            <td>${edu.status}</td>
          </tr>
        `;
      });
      html += `</table>`;
    }

    html += `
      <h2>핵심역량</h2>
      <table class="section-table">
        <tr><th>1줄 포지셔닝</th><td>${formData.oneLineIntro.replace(/\n/g, '<br>')}</td></tr>
        <tr><th>핵심역량 1</th><td>${formData.competency1.replace(/\n/g, '<br>')}</td></tr>
        <tr><th>핵심역량 2</th><td>${formData.competency2.replace(/\n/g, '<br>')}</td></tr>
        <tr><th>핵심역량 3</th><td>${formData.competency3.replace(/\n/g, '<br>')}</td></tr>
        <tr><th>대표 성과</th><td>${formData.majorProject.replace(/\n/g, '<br>')}</td></tr>
        <tr><th>핵심 기술 스택</th><td>${formData.techStack.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `;

    html += `<h2>경력사항</h2>`;
    if (formData.careers.length > 0) {
      formData.careers.forEach(career => {
        html += `
          <table class="section-table">
            <tr><th>회사명</th><td>${career.company}${career.isCurrentJob ? ' (재직중)' : ''}</td></tr>
            <tr><th>부서</th><td>${career.department}</td></tr>
            <tr><th>직책</th><td>${career.position}</td></tr>
            <tr><th>재직 기간</th><td>${career.period}</td></tr>
            <tr><th>주요 역할</th><td>${career.role.replace(/\n/g, '<br>')}</td></tr>
          </table>
        `;
      });
    }

    html += `<h2>스킬 및 자격</h2>`;
    html += `<h3>사용 가능 툴</h3>`;
    if (formData.toolSkills.length > 0) {
      html += `<table class="section-table">`;
      html += `<tr><th>툴</th><th>숙련도</th></tr>`;
      formData.toolSkills.forEach(skill => {
        html += `<tr><td>${skill.tools}</td><td>${skill.proficiency}</td></tr>`;
      });
      html += `</table>`;
    }
    
    html += `<h3>사용 가능 언어</h3>`;
    if (formData.languageSkills.length > 0) {
      html += `<table class="section-table">`;
      html += `<tr><th>언어</th><th>숙련도</th></tr>`;
      formData.languageSkills.forEach(skill => {
        html += `<tr><td>${skill.languages}</td><td>${skill.proficiency}</td></tr>`;
      });
      html += `</table>`;
    }
    
    html += `<h3>자격증</h3>`;
    if (formData.certifications.length > 0) {
      html += `<table class="section-table">`;
      html += `<tr><th>자격증명</th><th>발급기관</th><th>취득일</th></tr>`;
      formData.certifications.forEach(cert => {
        html += `<tr><td>${cert.name}</td><td>${cert.issuer}</td><td>${cert.date}</td></tr>`;
      });
      html += `</table>`;
    }
    
    html += `
      <h3>추가 강점</h3>
      <table class="section-table">
        <tr><th>내용</th><td>${formData.additionalStrength.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `;

    html += `<h2>주요 프로젝트</h2>`;
    if (formData.projects.length > 0) {
      formData.projects.forEach((project, index) => {
        html += `
          <h3>프로젝트 ${index + 1}: ${project.name}</h3>
          <table class="section-table">
            <tr><th>회사/조직</th><td>${project.company}</td></tr>
            <tr><th>기간</th><td>${project.period}</td></tr>
            <tr><th>배경</th><td>${project.background.replace(/\n/g, '<br>')}</td></tr>
            <tr><th>목표</th><td>${project.goals.replace(/\n/g, '<br>')}</td></tr>
            <tr><th>역할 및 수행 내용</th><td>${project.roleAndTasks.replace(/\n/g, '<br>')}</td></tr>
            <tr><th>성과</th><td>${project.achievement.replace(/\n/g, '<br>')}</td></tr>
            <tr><th>인사이트</th><td>${project.insights.replace(/\n/g, '<br>')}</td></tr>
          </table>
        `;
      });
    }

    html += `<h2>작성 논문</h2>`;
    if (formData.publications.length > 0) {
      html += `<table class="section-table">`;
      html += `<tr><th>논문 제목</th><th>저자</th><th>저널/학회</th><th>권호</th><th>페이지</th><th>DOI/URL</th></tr>`;
      formData.publications.forEach(pub => {
        html += `
          <tr>
            <td><strong>${pub.title}</strong></td>
            <td>${pub.author}</td>
            <td><i>${pub.journal}</i></td>
            <td>${pub.volume}(${pub.issue})</td>
            <td>${pub.pages}</td>
            <td>${pub.doi ? pub.doi : ''}</td>
          </tr>
        `;
      });
      html += `</table>`;
    }

    html += `
      <div class="footer">
        <p style="font-weight: bold">© 2025 CareerEngineer. All Rights Reserved.</p>
        <p>이 문서는 저작권법에 의해 보호받는 저작물입니다.</p>
        <p>문서의 전체 또는 일부를 저작권자의 사전 서면 동의 없이 무단으로 복제, 배포, 전송, 전시, 방송하거나 수정 및 편집하는 행위는 금지되어 있으며,<br>위반 시 관련 법령에 따라 법적인 책임을 질 수 있습니다.</p>
        <p>오직 개인적인 용도로만 사용해야 하며, 상업적 목적의 사용 및 무단 배포를 엄격히 금지합니다.</p>
      </div>
      </body>
      </html>
    `;
    
    const blob = new Blob([html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.personalInfo.name}_경력기술서_${formData.personalInfo.company}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">비공개 페이지</h1>
            <p className="text-gray-600">CareerEngineer의 경력기술서 작성 가이드&템플릿</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">비밀번호를 입력하세요</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder="비밀번호 입력"
                autoFocus
              />
            </div>
            {showError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                비밀번호가 올바르지 않습니다.
              </div>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              접속하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderStepContent = () => {
    const step = steps[currentStep];

    switch (step.id) {
      case 'intro':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">환영합니다! 👋</h3>
              <p className="text-gray-700 mb-4">
                CareerEngineer의 경력기술서 작성 가이드&템플릿입니다.
                단계별로 진행하며 체계적인 경력기술서를 작성할 수 있습니다.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-sm font-semibold text-gray-800 mb-2">작성 핵심 원칙</p>
              <ul className="text-sm text-gray-900 space-y-1">
                <li>• <strong>직무 공고와 연결:</strong> 지원 직무의 요구사항에 맞춰 경험을 강조하세요</li>
                <li>• <strong>최신순 정렬:</strong> 최근 경력과 프로젝트를 먼저 작성하세요</li>
                <li>• <strong>구체적으로:</strong> 역할과 성과를 숫자로 표현하세요 (예: "매출 10% 증가")</li>
                <li>• <strong>역할 구분:</strong> 팀 성과와 나의 기여를 명확히 나눠 작성하세요</li>
                <li>• <strong>간결하게:</strong> 1-2페이지, 핵심만 전달하세요</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-indigo-600 mb-3">📋 JD 분석 및 키워드 찾기</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>1단계:</strong> 지원 직무 JD의 핵심 요구사항 파악</p>
                <p><strong>2단계:</strong> JD 요구사항과 매칭되는 본인의 경험/프로젝트 선별</p>
                <p><strong>3단계:</strong> 선별한 경험을 구체적 숫자와 기간으로 표현</p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <p className="text-blue-700 font-semibold">💡 예시:</p>
                  <p className="text-sm">개발자 JD: "Python으로 데이터 분석 2년 이상" → "Python으로 고객 데이터 분석 3년"</p>
                  <p className="text-sm">마케터 JD: "디지털 광고 캠페인 운영" → "Google Ads로 캠페인 15개 운영"</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-800 text-center">© 2025 CareerEngineer. All Rights Reserved.</p>
                <p className="text-xs text-red-800 text-center mt-1 font-semibold">
                  이 문서는 저작권법에 의해 보호받는 저작물입니다. 무단 복제 및 배포를 엄격히 금지합니다.
                </p>
              </div>
            </div>
          </div>
        );

      case 'personal':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">📌 인적사항 작성 시 중요 안내사항</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <p><strong>개인정보 보호:</strong> 귀하가 작성하신 모든 내용은 브라우저에서만 처리되며, 외부 서버에 저장되지 않습니다.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">성명</label>
                <input type="text" value={formData.personalInfo.name} onChange={(e) => updatePersonalInfo('name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">생년월일</label>
                <input type="text" value={formData.personalInfo.birth} onChange={(e) => updatePersonalInfo('birth', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 1995.01.01" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">연락처</label>
                <input type="text" value={formData.personalInfo.phone} onChange={(e) => updatePersonalInfo('phone', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 010-0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
                <input type="email" value={formData.personalInfo.email} onChange={(e) => updatePersonalInfo('email', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: example@email.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">주소</label>
                <input type="text" value={formData.personalInfo.address} onChange={(e) => updatePersonalInfo('address', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 서울특별시 강남구" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">지원 직무</label>
                <input type="text" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 백엔드 개발자" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">지원 회사</label>
                <input type="text" value={formData.personalInfo.company} onChange={(e) => updatePersonalInfo('company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: ABC솔루션" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">총 경력 (년)</label>
                <input type="number" value={formData.years} onChange={(e) => setFormData({...formData, years: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 5" />
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-4">
            {formData.education.map((edu, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">학력 {index + 1}</h3>
                  {formData.education.length > 1 && (
                    <button onClick={() => removeEducation(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">학교명</label>
                    <input type="text" value={edu.school} onChange={(e) => updateEducation(index, 'school', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: OO대학교" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">전공</label>
                    <input type="text" value={edu.major} onChange={(e) => updateEducation(index, 'major', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 컴퓨터공학과" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">학위</label>
                    <input type="text" value={edu.degree} onChange={(e) => updateEducation(index, 'degree', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 학사, 석사" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">재학 기간</label>
                    <input type="text" value={edu.period} onChange={(e) => updateEducation(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 2015.03 - 2019.02" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">졸업 상태</label>
                    <select value={edu.status} onChange={(e) => updateEducation(index, 'status', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option value="">선택</option>
                      <option value="졸업">졸업</option>
                      <option value="재학">재학</option>
                      <option value="수료">수료</option>
                      <option value="중퇴">중퇴</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={addEducation} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 학력 추가</button>
          </div>
        );

      case 'competency':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-800 mb-2">✅ JD 매칭 작성법</p>
              <div className="text-sm text-gray-700 space-y-2">
                <p>1. 지원 직무 JD의 핵심 요구사항 파악</p>
                <p>2. JD 요구사항과 매칭되는 본인의 경험/프로젝트 선별</p>
                <p>3. 선별한 경험을 구체적 숫자와 기간으로 표현</p>
                <p className="text-blue-700 font-semibold mt-2">💡 예시: JD에 "MSA 전환 경험" 요구 → "3년간 레거시 시스템 MSA 전환 3건 리드"</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">1줄 포지셔닝 (JD 핵심 키워드 포함)</label>
                <textarea value={formData.oneLineIntro} onChange={(e) => setFormData({...formData, oneLineIntro: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={2} placeholder="예시: 3년차 데이터 분석가로 Python과 SQL을 활용한 데이터 시각화 전문" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 1 (JD 필수 요구사항과 매칭)</label>
                <textarea value={formData.competency1} onChange={(e) => setFormData({...formData, competency1: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시: Python, SQL로 데이터 분석 3년 | 10만 건 데이터 처리 자동화" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 2 (JD 우대 요구사항과 매칭)</label>
                <textarea value={formData.competency2} onChange={(e) => setFormData({...formData, competency2: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시: Power BI 시각화 | 대시보드 20개 구축으로 의사결정 속도 50% 향상" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">핵심역량 3 (추가 차별화 역량)</label>
                <textarea value={formData.competency3} onChange={(e) => setFormData({...formData, competency3: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시: 팀 협업 | 5명 팀 리드로 애자일 스프린트 20회 운영" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">대표 성과 (가장 임팩트 있는 성과)</label>
                <textarea value={formData.majorProject} onChange={(e) => setFormData({...formData, majorProject: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시: Python 자동화로 처리 시간 50% 단축, 연간 1억원 비용 절감" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">핵심 기술 스택 (JD 요구 기술 우선 배치)</label>
                <textarea value={formData.techStack} onChange={(e) => setFormData({...formData, techStack: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예시: Python, SQL, Power BI, Excel, Tableau, AWS, Git" />
              </div>
            </div>
          </div>
        );

      case 'career':
        return (
          <div className="space-y-4">
            {formData.careers.map((career, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">경력 {index + 1}</h3>
                  {formData.careers.length > 1 && (
                    <button onClick={() => removeCareer(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
                    <input type="text" value={career.company} onChange={(e) => updateCareer(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: ABC솔루션" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">부서</label>
                    <input type="text" value={career.department} onChange={(e) => updateCareer(index, 'department', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 개발팀" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">직책</label>
                    <input type="text" value={career.position} onChange={(e) => updateCareer(index, 'position', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 선임 개발자" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">재직 기간</label>
                    <input type="text" value={career.period} onChange={(e) => updateCareer(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 2020.01 - 2023.12" />
                  </div>
                  <div className="md:col-span-2 flex items-center gap-2">
                    <input type="checkbox" checked={career.isCurrentJob} onChange={(e) => updateCareer(index, 'isCurrentJob', e.target.checked)} className="w-4 h-4 text-indigo-600 rounded" />
                    <label className="text-sm text-gray-700">현재 재직중</label>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">주요 역할 및 성과</label>
                    <textarea value={career.role} onChange={(e) => updateCareer(index, 'role', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 데이터 분석 시스템 개발 및 운영" />
                  </div>
                </div>
              </div>
            ))}
            <button onClick={addCareer} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 경력 추가</button>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">사용 가능 툴</h3>
              {formData.toolSkills.map((skill, index) => (
                <div key={index} className="mb-4 flex gap-4">
                  <input type="text" value={skill.tools} onChange={(e) => updateToolSkill(index, 'tools', e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: Excel, PowerPoint" />
                  <select value={skill.proficiency} onChange={(e) => updateToolSkill(index, 'proficiency', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option value="">숙련도</option>
                    <option value="상">상</option>
                    <option value="중">중</option>
                    <option value="하">하</option>
                  </select>
                  {formData.toolSkills.length > 1 && (
                    <button onClick={() => removeToolSkill(index)} className="text-red-600 hover:text-red-800">삭제</button>
                  )}
                </div>
              ))}
              <button onClick={addToolSkill} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 툴 추가</button>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">사용 가능 언어</h3>
              {formData.languageSkills.map((skill, index) => (
                <div key={index} className="mb-4 flex gap-4">
                  <input type="text" value={skill.languages} onChange={(e) => updateLanguageSkill(index, 'languages', e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: Python, JavaScript" />
                  <select value={skill.proficiency} onChange={(e) => updateLanguageSkill(index, 'proficiency', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option value="">숙련도</option>
                    <option value="상">상</option>
                    <option value="중">중</option>
                    <option value="하">하</option>
                  </select>
                  {formData.languageSkills.length > 1 && (
                    <button onClick={() => removeLanguageSkill(index)} className="text-red-600 hover:text-red-800">삭제</button>
                  )}
                </div>
              ))}
              <button onClick={addLanguageSkill} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 언어 추가</button>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">자격증</h3>
              {formData.certifications.map((cert, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-700">자격증 {index + 1}</h4>
                    {formData.certifications.length > 1 && (
                      <button onClick={() => removeCertification(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" value={cert.name} onChange={(e) => updateCertification(index, 'name', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="자격증명" />
                    <input type="text" value={cert.issuer} onChange={(e) => updateCertification(index, 'issuer', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="발급기관" />
                    <input type="text" value={cert.date} onChange={(e) => updateCertification(index, 'date', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="취득일" />
                  </div>
                </div>
              ))}
              <button onClick={addCertification} className="w-full py-2 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 자격증 추가</button>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">추가 강점</label>
              <textarea value={formData.additionalStrength} onChange={(e) => setFormData({...formData, additionalStrength: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 영어 비즈니스 회화 가능" />
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">📌 프로젝트 작성 시 중요 안내사항</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <p><strong>보안 준수:</strong> 프로젝트 작성 시 보안유지가 필요한 회사명, 민감 정보에 대해서는 해당 분야의 일반적인 용어로 작성하세요.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <p><strong>Compliance 준수:</strong> 기밀유지 의무에 위배되지 않도록 구체적인 수치나 고객사 정보는 범위로 표현하세요.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-blue-800 mb-2">✅ 프로젝트 작성 가이드</p>
              <div className="text-sm text-gray-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">📌 성과 작성 3단계:</p>
                  <p><strong>1단계:</strong> 프로젝트 전체 성과 먼저 기술</p>
                  <p><strong>2단계:</strong> 본인의 구체적 담당 업무와 역할 명시</p>
                  <p><strong>3단계:</strong> 본인 담당 영역에서의 성과 수치 제시</p>
                </div>
                
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="font-semibold text-green-800 mb-2">✅ 좋은 예시</p>
                  <p className="text-gray-700 text-sm">
                    "프로젝트 전체: 결제 성공률 90%→98%, 손실 5천만원→0원<br/>
                    나의 역할: 4명 팀에서 데이터 분석 담당<br/>
                    나의 기여: Python으로 분석 자동화, 처리 시간 50% 단축"
                  </p>
                </div>
              </div>
            </div>

            {formData.projects.map((project, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">프로젝트 {index + 1}</h3>
                  {formData.projects.length > 1 && (
                    <button onClick={() => removeProject(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">회사/조직</label>
                      <input type="text" value={project.company} onChange={(e) => updateProject(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: ABC 솔루션" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트명</label>
                      <input type="text" value={project.name} onChange={(e) => updateProject(index, 'name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 결제 시스템 성능 개선" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">수행 기간</label>
                      <input type="text" value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 2023.01 - 2023.06" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트 배경</label>
                    <textarea value={project.background} onChange={(e) => updateProject(index, 'background', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 월 매출 10억원 플랫폼, 데이터 처리 지연으로 보고 지체" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트 목표</label>
                    <textarea value={project.goals} onChange={(e) => updateProject(index, 'goals', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="예: 처리 시간 50% 단축, 보고서 정확도 95% 이상" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">자신의 역할 및 수행 내용</label>
                    <textarea value={project.roleAndTasks} onChange={(e) => updateProject(index, 'roleAndTasks', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예: 5명 팀에서 데이터 분석 담당, Python 스크립트로 자동화, SQL 쿼리 최적화 10개" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">성과 (전체 성과와 나의 기여 구분)</label>
                    <textarea value={project.achievement} onChange={(e) => updateProject(index, 'achievement', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예: [전체 성과] 처리 시간 10시간→5시간, 정확도 98% [나의 기여] 자동화 스크립트 개발로 처리 시간 50% 단축" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">인사이트 및 강조하고 싶은 부분</label>
                    <textarea value={project.insights} onChange={(e) => updateProject(index, 'insights', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="예: 데이터 자동화로 의사결정 속도를 높이는 중요성 배움" />
                  </div>
                </div>
              </div>
            ))}
            <button onClick={addProject} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 프로젝트 추가</button>
          </div>
        );

      case 'publications':
        return (
          <div className="space-y-4">
            {formData.publications.map((pub, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">논문 {index + 1}</h3>
                  {formData.publications.length > 1 && (
                    <button onClick={() => removePublication(index)} className="text-red-600 hover:text-red-800 text-sm">삭제</button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">논문 제목</label>
                    <input type="text" value={pub.title} onChange={(e) => updatePublication(index, 'title', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 인공지능 기반 데이터 분석의 효율성 연구" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">저자 구분</label>
                      <input type="text" value={pub.author} onChange={(e) => updatePublication(index, 'author', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 제1저자" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">게재 저널/학회</label>
                      <input type="text" value={pub.journal} onChange={(e) => updatePublication(index, 'journal', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 한국정보과학회지" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">권</label>
                      <input type="text" value={pub.volume} onChange={(e) => updatePublication(index, 'volume', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 45" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">호</label>
                      <input type="text" value={pub.issue} onChange={(e) => updatePublication(index, 'issue', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 3" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">페이지</label>
                      <input type="text" value={pub.pages} onChange={(e) => updatePublication(index, 'pages', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 123-135" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">발표일</label>
                      <input type="text" value={pub.date} onChange={(e) => updatePublication(index, 'date', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: 2023.06" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">DOI/URL</label>
                      <input type="text" value={pub.doi} onChange={(e) => updatePublication(index, 'doi', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="예: https://doi.org/..." />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={addPublication} className="w-full py-3 border-2 border-dashed border-indigo-300 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50">+ 논문 추가</button>
          </div>
        );

      case 'download':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 작성 완료!</h3>
              <p className="text-gray-700">
                작성하신 내용을 최종 확인하고 수정하세요.<br />
                확인 후 워드 문서로 다운로드할 수 있습니다.
              </p>
            </div>

            {/* 인적사항 섹션 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('personal')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-gray-800">인적사항</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); goToStep(1); }}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    수정
                  </button>
                  {expandedSections['personal'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {expandedSections['personal'] && (
                <div className="p-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-semibold">성명:</span> {formData.personalInfo.name || '-'}</div>
                    <div><span className="font-semibold">생년월일:</span> {formData.personalInfo.birth || '-'}</div>
                    <div><span className="font-semibold">연락처:</span> {formData.personalInfo.phone || '-'}</div>
                    <div><span className="font-semibold">이메일:</span> {formData.personalInfo.email || '-'}</div>
                    <div className="col-span-2"><span className="font-semibold">주소:</span> {formData.personalInfo.address || '-'}</div>
                    <div><span className="font-semibold">지원 직무:</span> {formData.position || '-'}</div>
                    <div><span className="font-semibold">지원 회사:</span> {formData.personalInfo.company || '-'}</div>
                    <div><span className="font-semibold">총 경력:</span> {formData.years || '-'}년</div>
                  </div>
                </div>
              )}
            </div>

            {/* 학력사항 섹션 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('education')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">학력사항</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); goToStep(2); }}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    수정
                  </button>
                  {expandedSections['education'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {expandedSections['education'] && (
                <div className="p-4 border-t border-gray-200">
                  {formData.education.map((edu, i) => (
                    <div key={i} className="mb-3 pb-3 border-b last:border-b-0 text-sm">
                      <div className="font-semibold">{edu.school || '-'} / {edu.major || '-'}</div>
                      <div>{edu.degree || '-'} | {edu.period || '-'} | {edu.status || '-'}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 핵심역량 섹션 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('competency')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-gray-800">핵심역량</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); goToStep(3); }}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    수정
                  </button>
                  {expandedSections['competency'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {expandedSections['competency'] && (
                <div className="p-4 border-t border-gray-200 space-y-2 text-sm">
                  <div><span className="font-semibold">1줄 포지셔닝:</span> {formData.oneLineIntro || '-'}</div>
                  <div><span className="font-semibold">핵심역량 1:</span> {formData.competency1 || '-'}</div>
                  <div><span className="font-semibold">핵심역량 2:</span> {formData.competency2 || '-'}</div>
                  <div><span className="font-semibold">핵심역량 3:</span> {formData.competency3 || '-'}</div>
                  <div><span className="font-semibold">대표 성과:</span> {formData.majorProject || '-'}</div>
                  <div><span className="font-semibold">핵심 기술 스택:</span> {formData.techStack || '-'}</div>
                </div>
              )}
            </div>

            {/* 경력사항 섹션 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('career')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">경력사항</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); goToStep(4); }}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    수정
                  </button>
                  {expandedSections['career'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {expandedSections['career'] && (
                <div className="p-4 border-t border-gray-200">
                  {formData.careers.map((career, i) => (
                    <div key={i} className="mb-3 pb-3 border-b last:border-b-0 text-sm">
                      <div className="font-semibold">{career.company || '-'} {career.isCurrentJob && '(재직중)'}</div>
                      <div>{career.department || '-'} | {career.position || '-'}</div>
                      <div className="text-gray-600">{career.period || '-'}</div>
                      <div className="mt-1">{career.role || '-'}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 스킬 및 자격 섹션 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('skills')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">스킬 및 자격</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); goToStep(5); }}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    수정
                  </button>
                  {expandedSections['skills'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {expandedSections['skills'] && (
                <div className="p-4 border-t border-gray-200 space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">사용 가능 툴</div>
                    {formData.toolSkills.map((s, i) => (
                      <div key={i}>{s.tools || '-'} ({s.proficiency || '-'})</div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold mb-1">사용 가능 언어</div>
                    {formData.languageSkills.map((s, i) => (
                      <div key={i}>{s.languages || '-'} ({s.proficiency || '-'})</div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold mb-1">자격증</div>
                    {formData.certifications.map((c, i) => (
                      <div key={i}>{c.name || '-'} | {c.issuer || '-'} | {c.date || '-'}</div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold mb-1">추가 강점</div>
                    <div>{formData.additionalStrength || '-'}</div>
                  </div>
                </div>
              )}
            </div>

            {/* 주요 프로젝트 섹션 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('projects')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">주요 프로젝트</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); goToStep(6); }}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    수정
                  </button>
                  {expandedSections['projects'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {expandedSections['projects'] && (
                <div className="p-4 border-t border-gray-200">
                  {formData.projects.map((proj, i) => (
                    <div key={i} className="mb-4 pb-4 border-b last:border-b-0 text-sm">
                      <div className="font-semibold">{proj.name || '-'}</div>
                      <div className="text-gray-600">{proj.company || '-'} | {proj.period || '-'}</div>
                      <div className="mt-2">
                        <div><span className="font-semibold">배경:</span> {proj.background || '-'}</div>
                        <div><span className="font-semibold">목표:</span> {proj.goals || '-'}</div>
                        <div><span className="font-semibold">역할:</span> {proj.roleAndTasks || '-'}</div>
                        <div><span className="font-semibold">성과:</span> {proj.achievement || '-'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 작성 논문 섹션 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleSection('publications')}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">작성 논문</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); goToStep(7); }}
                    className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    수정
                  </button>
                  {expandedSections['publications'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              {expandedSections['publications'] && (
                <div className="p-4 border-t border-gray-200">
                  {formData.publications.map((pub, i) => (
                    <div key={i} className="mb-3 pb-3 border-b last:border-b-0 text-sm">
                      <div className="font-semibold">{pub.title || '-'}</div>
                      <div>{pub.author || '-'} | {pub.journal || '-'}</div>
                      <div className="text-gray-600">{pub.volume}({pub.issue}) | {pub.pages} | {pub.date}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 다운로드 버튼 */}
            <div className="text-center pt-4">
              <button
                onClick={generateWordDocument}
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-lg shadow-lg"
              >
                <Download className="w-6 h-6" />
                워드 문서로 다운로드
              </button>
            </div>


          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              CareerEngineer의 경력기술서 작성 가이드&템플릿
            </h1>
          </div>

          {/* 진행률 바 */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{steps[currentStep].title}</span>
              <span>진행률: {Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-600 mb-6">{steps[currentStep].subtitle}</p>

          {renderStepContent()}

          {/* 네비게이션 버튼 */}
          <div className="flex gap-4 mt-8">
            {currentStep > 0 && (
              <button
                onClick={goToPrevStep}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
              >
                <ChevronLeft className="w-5 h-5" />
                이전
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                onClick={goToNextStep}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
              >
                다음
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs font-bold text-gray-700 mb-2">© 2025 CareerEngineer. All Rights Reserved.</p>
              <p className="text-xs text-gray-500 mb-1">이 문서는 저작권법에 의해 보호받는 저작물입니다.</p>
              <p className="text-xs text-red-500 mb-1">문서의 전체 또는 일부를 저작권자의 사전 서면 동의 없이 무단으로 복제, 배포, 전송, 전시, 방송하거나</p>
              <p className="text-xs text-red-500 mb-1">수정 및 편집하는 행위는 금지되어 있으며, 위반 시 관련 법령에 따라 법적인 책임을 질 수 있습니다.</p>
              <p className="text-xs text-gray-500">오직 개인적인 용도로만 사용해야 하며, 상업적 목적의 사용 및 무단 배포를 엄격히 금지합니다.</p>
            </div>
      </div>
    </div>
  );
}

export default CareerStatementGenerator;