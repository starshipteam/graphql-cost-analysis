import CostAnalysis from './costAnalysis'
import { CostAnalysisOptions } from './costAnalysis'
import { ValidationContext } from 'graphql'

export default function createCostAnalysis (options: CostAnalysisOptions): (context: ValidationContext) => CostAnalysis {
  return (context) => new CostAnalysis(context, options)
}
