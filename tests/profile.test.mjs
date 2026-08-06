import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const root = new URL("../", import.meta.url)

async function read(path) {
  return readFile(new URL(path, root), "utf8")
}

test("profile leads with the hybrid proprietary-trader identity and method", async () => {
  const readme = await read("README.md")

  assert.match(readme, /量化与主观结合的自营交易者/)
  assert.match(readme, /主观研究[^\n]*方向/)
  assert.match(readme, /量化研究[^\n]*(?:择时信号|子策略)/)
  assert.match(readme, /策略组合|组合使用/)
  assert.match(readme, /风险暴露|尾部风险/)
  assert.doesNotMatch(readme, /主观交易者 · AI 辅助决策 · 量化研究者/)
  assert.doesNotMatch(readme, /游资|A9|A10|内部观点/)
})

test("profile uses the settled Suya brand roles and evidence links", async () => {
  const readme = await read("README.md")

  assert.match(readme, /苏牙说[^\n]*(?:盘前|主观观点)/)
  assert.match(readme, /苏牙投资[^\n]*(?:自营|历史记录|完整组合)/)
  assert.match(readme, /https:\/\/weilisong\.com\//)
  assert.match(readme, /https:\/\/www\.suyainvestments\.com\//)
  assert.match(readme, /https:\/\/mp\.weixin\.qq\.com\/s\/c45VdLSXmSYlyz7NHEo8Fw/)
  assert.match(readme, /https:\/\/ojs\.aaai\.org\/index\.php\/AAAI\/article\/view\/33365/)
  assert.match(readme, /\[公开择时账本\]\(https:\/\/github\.com\/sowelswl\/suya-market-regime-ledger\)/)
  assert.doesNotMatch(readme, /公开择时账本（建设中|公开择时账本[^\n]*即将公开/)
  assert.doesNotMatch(readme, /会员价格|立即购买|付费信号/)
})

test("metrics automation updates weekly instead of hourly", async () => {
  const workflow = await read(".github/workflows/metrics.yml")

  assert.match(workflow, /cron:\s*["']0 0 \* \* 1["']/)
  assert.doesNotMatch(workflow, /0 \*\/1 \* \* \*/)
})
