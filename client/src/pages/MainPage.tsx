// src/pages/MainPage.
import React from 'react';

export default function MainPage() {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h1 style={styles.title}>🎲 Hash 기반 공정 게임</h1>
        <p style={styles.subtitle}>
          해시 알고리즘을 기반으로, 누구나 결과 조작 여부를 검증할 수 있는 투명한 게임 플랫폼입니다.
        </p>
      </section>

      <section style={styles.games}>
        <h2 style={styles.sectionTitle}>🎮 게임 소개</h2>
        <div style={styles.gameList}>
          <GameCard
            title="🔥 Crush"
            description="충돌을 피하며 타이밍을 맞춰 멈춰야 하는 고속 게임. 결과는 미리 해시로 고정됩니다."
          />
          <GameCard
            title="🔺 High / Low"
            description="숫자가 더 높을까 낮을까? 결과는 이미 결정되어 있고, 해시를 통해 그 진위를 확인할 수 있습니다."
          />
          <GameCard
            title="🪜 Ladder"
            description="사다리 타기를 통한 랜덤 경로. 서버는 사다리 구조를 미리 해시로 고정하여 공정성을 보장합니다."
          />
        </div>
      </section>

      <section style={styles.fairness}>
        <h2 style={styles.sectionTitle}>🧠 공정성 원리</h2>
        <p>
          게임을 시작하기 전에 서버는 결과(seed + result)를 <strong>SHA-256</strong> 해시로 암호화하여 제공합니다.
          <br />
          게임 종료 후 원본을 공개하며, 사용자는 직접 해시를 비교하여 조작이 없었음을 검증할 수 있습니다.
        </p>
      </section>
    </main>
  );
}

type GameCardProps = {
  title: string;
  description: string;
};

function GameCard({ title, description }: GameCardProps) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '2rem',
    color: '#f1f1f1',
    fontFamily: 'Pretendard, sans-serif',
    backgroundColor: '#1e1e1e',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#ccc',
  },
  games: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  gameList: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1 1 250px',
    backgroundColor: '#2e2e2e',
    padding: '1rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  fairness: {
    backgroundColor: '#2a2a2a',
    padding: '1.5rem',
    borderRadius: '1rem',
  },
};