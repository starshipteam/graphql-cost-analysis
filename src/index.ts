// @flow
import CostAnalysis from './costAnalysis'
import { CostAnalysisOptions } from './CostAnalysis'
import { ValidationContext } from 'graphql'

export default function createCostAnalysis (options: CostAnalysisOptions): (context: ValidationContext) => CostAnalysis {
  return (context) => new CostAnalysis(context, options)
}
