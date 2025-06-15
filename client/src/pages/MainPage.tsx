// src/pages/MainPage.
import React from 'react';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1 className={styles.h1}>🎲 Hash 기반 공정 게임</h1>
          <p className={styles.p}>
            해시 알고리즘을 기반으로, 누구나 결과 조작 여부를 검증할 수 있는 투명한 게임 플랫폼입니다. 
          </p>
        </section>
        <section className={styles.gameSection}>
          <h2 className={styles.sectionTitle}>🎮 게임 소개</h2>
          <div className={styles.gameList}>
            <div className={styles.gameCard}>
              <h3>🔥 Crush</h3>
              <p>Crush은 배당 곡선이 상승하다가 무작위로 멈추기 전에 멈춰서 수익을 얻는 타이밍을 예측하는 게임입니다.</p>
            </div>
            <div className={styles.gameCard}>
              <h3>🔺🔻 High-Low</h3>
              <p>High Low는 트럼프 카드를 기반으로 다음 카드의 숫자, 색깔, 무늬 또는 조커 여부 등을 예측하는 확률 게임입니다.</p>
            </div>
            <div className={styles.gameCard}>
              <h3>🪜 Ladder</h3>
              <p>사다리 게임은 두 가지 선택지 중 하나를 고르고, 사다리를 따라가 성공 또는 실패 중 한 결과를 무작위로 맞이하는 단순 확률 게임입니다.</p>
            </div>
          </div>
        </section>
        <section className={styles.explainSection}>
          <h2 className={styles.sectionTitle}>🧠 공정성 원리</h2>
          <div className={styles.explainCard}>
            <p>
            - 게임을 시작하기 전에 서버는 결과(seed + result)를 <strong>SHA-256</strong> 해시로 암호화하여 제공합니다.
            <br />
            - 게임 종료 후 원본을 공개하며, 사용자는 직접 해시를 비교하여 조작이 없었음을 검증할 수 있습니다.
            </p>
          </div>
        </section>
      </main>
  );
};