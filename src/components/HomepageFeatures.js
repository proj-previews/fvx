import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Out-of-the-box support for Babel, TypeScript, ESLint, PostCSS, Less, Sass, images-loader, Unit Testing & End-to-end Testing.
      </>
    ),
  },
  {
    title: 'Extensible',
    description: (
      <>
        The plugin system allows the community to build and share reusable solutions to common needs.
      </>
    ),
  },
  {
    title: 'Less to Learn',
    description: (
      <>
        You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section className={styles.mainBody}>
			<div className="container padding-vert--xl text--left">
				<div className="row">
						<div className="col col--4 col--offset-1">
							<h2>Get started in seconds</h2>
							<p>Whether you’re using React or another library, Fvx lets you <strong>focus on code, not build tools</strong>.<br /><br />To create a project called <i>my-app</i>, run this command:</p>
							<div className={styles.tokenBox}>
								<span> cd my-app && fvx create </span>	
							</div>
						</div>
						<div className={clsx("col col--6 col--offset-1", styles.code)}>
							<div className={styles.codeBox}>
								<div className={styles.codeTitle}>
									<div className={styles.titleRed}></div>
									<div className={styles.titleYellow}></div>
									<div className={styles.titleGreen}></div>
								</div>
								<div className={styles.codeContent}>
									fvx create <br/>
									<span className={styles.wGreen}>欢迎使用fvx, 灵活构建react项目~🎉🎉🎉 </span><br/>
									? 是否创建新的项目? <span className={styles.wSkyBlue}>Yes</span> <br/>
									? 请输入项目名称? <span className={styles.wSkyBlue}>proj</span><br/>
									? 请输入作者? <span className={styles.wSkyBlue}>mike</span><br/>
									? 请选择公共管理状态? <br/>
									<span className={styles.wSkyBlue}>❯</span><span className={styles.wGreen}> ◉</span><span className={styles.wSkyBlue}> no need</span><br/>
									<span className={styles.wSkyBlue}>&nbsp;&nbsp; ◯ mobx</span><br/>
									<span className={styles.wSkyBlue}>&nbsp;&nbsp; ◯ redux</span><br/>
									? 请选择公共管理状态? <span className={styles.wSkyBlue}>no need</span><br/>
? 请选择相应的模块? <br/>
									<span className={styles.wSkyBlue}>❯</span><span className={styles.wGreen}> ◉</span><span className={styles.wSkyBlue}> sass-loader</span><br/>
									<span className={styles.wSkyBlue}>&nbsp;&nbsp; ◯ less-loader</span><br/>
									<span className={styles.wSkyBlue}>&nbsp;&nbsp; <span className={styles.wGreen}> ◉</span> typescript</span><br/>
									<span className={styles.wSkyBlue}>❯</span><span className={styles.wGreen}> ◉</span><span className={styles.wSkyBlue}> image(url-loader,file-loader)</span><br/>
									? 请选择相应的模块? <span className={styles.wSkyBlue}>sass-loader, typescript, image(url-loader,file-loader)</span><br/>
									<span className={styles.wGreen}>----------开始构建-----------</span><br/>
									<span className={styles.wBlue}>当前路径:/private/tmp/test</span><br/>
									<span className={styles.wGreen}>创建文件:/private/tmp/test/tsconfig.json<br/>
										创建文件:/private/tmp/test/src/app.tsx<br/>
		...<br/></span>
yarn install v1.22.10<br/>
[1/4]&nbsp; 🔍 &nbsp; Resolving packages...<br/>
[2/4]&nbsp; 🚚 &nbsp; Fetching packages...<br/>
[3/4]&nbsp; 🔗 &nbsp; Linking dependencies...<br/>
[4/4]&nbsp; 🔨 &nbsp; Building fresh packages...<br/>
success Saved lockfile.<br/>
✨  Done in 36.18s.<br/>
yarn run v1.22.10<br/>
$ webpack-dev-server --config ./config/webpack.base.js<br/>
Happy[babel]: Version: 5.0.1. Threads: 3<br/>
	ℹ ｢wds｣: Project is running at <span className={styles.wBlue}>http://localhost:9901/</span><br/>
webpack 5.51.1 compiled <span className={styles.wGreen}>successfully</span> in 2168 ms<br/>
ℹ ｢wdm｣: Compiled successfully.<br/>
								</div>
							</div>
						</div>
				</div>
			</div>
    </section>
	 <section className={styles.maintain}>
			<div className="container padding-vert--xl text--left">
				<div className="row">
						<div className="col col--4 col--offset-1">
							<h2>Easy to Maintain</h2>
							<p>Updating your build tooling is typically a daunting and time-consuming task. When new versions of Fvx are released, you can upgrade using a single command:</p>
						  <div className={styles.tokenBox}>
								<span> npm install fvx@latest </span>	
							</div>
						</div>
				</div>
			</div>
		</section>		
    </>
  );
}
