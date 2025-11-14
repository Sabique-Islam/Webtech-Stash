"""Runs the example demo and the analyzer to show the five constructs in action."""
import runpy
import os
from analyzer import analyze_file


HERE = os.path.dirname(__file__)
EXAMPLE = os.path.join(HERE, 'examples', 'code_example.py')


def run_example():
    print('\n=== Running example code (executes demo) ===\n')
    runpy.run_path(EXAMPLE, run_name='__main__')


def run_analysis():
    print('\n=== Static analysis of example file ===\n')
    analyze_file(EXAMPLE)


if __name__ == '__main__':
    run_example()
    run_analysis()
