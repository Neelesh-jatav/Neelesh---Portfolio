import React from 'react';
import './Drives.css';

const uploadedDrives = [
    {
    id: 1,
    name: '📄 Resume',
    description: 'Career files and info.',
    updatedAt: 'March 06, 2026',
    driveLink: 'https://drive.google.com/file/d/1FTFFZmUoSHZEkcFvarmjEljNjHzA9Ufm/view?usp=sharing',
  },
  {
    id: 2,
    name: '🏅 Certificates',
    description: 'Verified completion certificates.',
    updatedAt: 'Feb 19, 2026',
    driveLink: 'https://drive.google.com/file/d/1wg7VX51WDUoz5KTM5jhUsEUW6bRoj2ZP/view?usp=sharing',
  },
  {
    id: 3,
    name: '🚀 CivicConnect',
    description: 'CivicConnect project files, screenshots, and supporting media files.',
    updatedAt: 'Mar 04, 2026',
    driveLink: 'https://drive.google.com/file/d/15sLfeK_pLmWDuPBZmp7-h2cuuUpcuLIv/view?usp=sharing',
  },
  {
    id: 4,
    name: '🤖 VigilaxAI',
    description: 'VigilaxAI project resources, docs, and deployment assets.',
    updatedAt: 'Mar 06, 2026',
    driveLink: 'https://drive.google.com/file/d/133o72hQD4mUsiMv6xUL1gcGTxaxaDEWi/view?usp=sharing',
  },
  {
    id: 5,
    name: '📁 Other Uploads',
    description: 'Additional uploads and miscellaneous shared files.',
    updatedAt: 'Mar 06, 2026',
    driveLink: 'https://drive.google.com/drive/folders/19FMWLnUOSu_jbBZBSf4TQvR4dUFDZ-OB?usp=sharing',
  },
  
];

const Drives = () => {
  return (
    <div className="drives section">
      <div className="container">
        <h1 className="drives-title">Drives Uploads</h1>
        <p className="drives-subtitle">
          This page lists the uploaded drives and recently updated folders.
        </p>

        <div className="drives-grid">
          {uploadedDrives.map((drive) => (
            <article key={drive.id} className="drive-card">
              <h2 className="drive-name">{drive.name}</h2>
              <p className="drive-description">{drive.description}</p>
              <p className="drive-updated">Last updated: {drive.updatedAt}</p>
              {drive.driveLink && (
                <a
                  href={drive.driveLink}
                  className="drive-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Drive
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drives;
